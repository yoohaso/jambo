import { useEffect, useState } from 'react';
import { PostCard, VideoCard } from './Card';
import { fetchCards } from '@/services/card/function';
import { CardItem } from '@/services/card/type';

export function CardList() {
  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    const getCards = async () => {
      const { list } = await fetchCards();
      setCards(list);
    };

    getCards();
  }, []);

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
    </div>
  );
}
