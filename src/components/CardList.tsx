import { useCallback, useEffect, useRef } from 'react';
import { PostCard, VideoCard } from './Card';
import { useCards } from '@/services/card/hook';

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

const computeViewCountNotaion = (count: number) => {
  const THOUSANDS = 1000;
  const MILLIONS = 1000000;

  if (count > MILLIONS) {
    return (count / MILLIONS).toFixed(1) + 'M';
  }

  if (count > THOUSANDS) {
    return (count / THOUSANDS).toFixed(1) + 'K';
  }

  return `${count}`;
};

const formatDateWithDots = (timestamp: number, formatStr: 'yyyy.mm.dd' | 'mm.dd') => {
  const dateObj = new Date(timestamp);
  const hasYearFormat = formatStr.startsWith('yyyy');

  const year = hasYearFormat ? dateObj.getFullYear().toString() : undefined;
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');

  if (hasYearFormat) {
    return `${year}.${month}.${day}`;
  }

  return `${month}.${day}`;
};

const computeDateNotation = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const ONE_MINUTE = 60;
  const ONE_HOUR = 3600;
  const ONE_DAY = 86400;
  const ONE_YEAR = 31536000;

  if (diffSeconds < ONE_MINUTE) {
    return 'Now';
  } else if (diffSeconds >= ONE_MINUTE && diffSeconds < ONE_HOUR) {
    return `${Math.floor(diffSeconds / ONE_MINUTE)}min ago`;
  } else if (diffSeconds >= ONE_HOUR && diffSeconds < ONE_DAY) {
    return `${Math.floor(diffSeconds / ONE_HOUR)}h ago`;
  } else if (diffSeconds >= ONE_DAY && diffSeconds < ONE_YEAR) {
    return formatDateWithDots(timestamp, 'mm.dd');
  } else {
    return formatDateWithDots(timestamp, 'yyyy.mm.dd');
  }
};

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
            viewCountText={computeViewCountNotaion(card.viewCount)}
            userCountText={computeViewCountNotaion(card.userCount)}
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
            viewCountText={computeViewCountNotaion(card.viewCount)}
            userCountText={computeViewCountNotaion(card.userCount)}
          />
        );
      })}
      <div ref={ref} className="h-[2px]"></div>
      {isLoading && <div className="text-[20px] text-black">로딩중</div>}
      {error && <div className="text-[20px] text-black">{error.message}</div>}
    </div>
  );
}
