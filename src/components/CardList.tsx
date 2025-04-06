import { useCallback, useEffect, useRef, useState } from 'react';
import { PostCard, VideoCard } from './Card';
import { fetcCardsWithPage, fetchCards } from '@/services/card/function';
import { CardItem } from '@/services/card/type';

type IntersectHandler = (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;

const useIntersect = (onIntersect: IntersectHandler, options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          onIntersect(entry, observer);
        }
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options, callback]);

  return ref;
};

export function CardList() {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [hasNext, setHasNext] = useState(false);

  const lastCardId = cards.length > 0 && cards[cards.length - 1].card.cardId;

  useEffect(() => {
    const getCards = async () => {
      const { list, hasNext } = await fetchCards();
      setCards(list);
      setHasNext(hasNext);
    };

    getCards();
  }, []);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNext && lastCardId) {
      const { list, hasNext } = await fetcCardsWithPage(lastCardId);
      setCards(prev => [...prev, ...list]);
      setHasNext(hasNext);
    }
  });

  return (
    <div className="flex flex-col items-center gap-common-presentCard-gap p-[8px]">
      {cards.map(({ cardType, card, profile }) => {
        return cardType === 'POST' ? (
          <PostCard
            key={card.cardId}
            profile={{
              nickName: profile.nickName,
              imageUrl: profile.profileImage.imageUrl,
            }}
            createdAt={card.createdAt}
            category={{ name: card.category.name, imageUrl: card.category.imageUrl }}
            title={card.title}
            body={card.body}
            cardImages={card.cardImage}
            viewCount={card.viewCount}
            userCount={card.userCount}
          />
        ) : (
          <VideoCard
            key={card.cardId}
            profile={{
              nickName: profile.nickName,
              imageUrl: profile.profileImage.imageUrl,
            }}
            createdAt={card.createdAt}
            category={{ name: card.category.name, imageUrl: card.category.imageUrl }}
            title={card.title}
            body={card.body}
            videoUrl={card.video[0].videoUrl}
            viewCount={card.viewCount}
            userCount={card.userCount}
          />
        );
      })}
      <div ref={ref}></div>
    </div>
  );
}
