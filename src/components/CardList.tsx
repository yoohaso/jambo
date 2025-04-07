import { useCallback } from 'react';
import { PostCard, VideoCard } from './Card';
import { useCards } from '@/services/card/hook';
import { useIntersect } from '@/hooks/useIntersect';
import { computeDateNotation } from '@/utils/computeDateNotation';
import { computeCountNotaion } from '@/utils/computeCountNotation';

export function CardList() {
  const {
    data: { cards, hasNext },
    isLoading,
    error,
    fetchNextPage,
  } = useCards();

  const handleIntersect = useCallback(
    async (entry: IntersectionObserverEntry, observer: IntersectionObserver) => {
      observer.unobserve(entry.target);

      if (hasNext) {
        fetchNextPage();
      }
    },
    [hasNext, fetchNextPage]
  );

  const ref = useIntersect(handleIntersect);

  return (
    <div className="flex flex-col items-center gap-common-presentCard-gap px-[8px] pt-[8px] sm:px-0">
      {cards.map(({ cardType, card, profile }) => {
        return cardType === 'POST' ? (
          <PostCard
            key={card.cardId}
            profile={{
              nickName: profile.nickName,
              imageUrl: profile.profileImage.imageUrl,
            }}
            time={computeDateNotation(card.createdAt)}
            category={{ name: card.category.name, imageUrl: card.category.imageUrl }}
            title={card.title}
            body={card.body}
            cardImages={card.cardImage}
            viewCountText={computeCountNotaion(card.viewCount)}
            userCountText={computeCountNotaion(card.userCount)}
          />
        ) : (
          <VideoCard
            key={card.cardId}
            profile={{
              nickName: profile.nickName,
              imageUrl: profile.profileImage.imageUrl,
            }}
            time={computeDateNotation(card.createdAt)}
            category={{ name: card.category.name, imageUrl: card.category.imageUrl }}
            title={card.title}
            body={card.body}
            videoUrl={card.video[0].videoUrl}
            viewCountText={computeCountNotaion(card.viewCount)}
            userCountText={computeCountNotaion(card.userCount)}
          />
        );
      })}
      <div ref={ref} className="h-[2px]"></div>
      {isLoading && <div className="text-[20px] text-black">로딩중</div>}
      {error && <div className="text-[20px] text-black">{error.message}</div>}
    </div>
  );
}
