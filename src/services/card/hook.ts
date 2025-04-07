import { useCallback, useEffect, useState } from 'react';
import { CardItem } from './type';
import { fetchCards, fetchCardsWithPage } from './function';

export function useCards() {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getCards = async () => {
      setIsLoading(true);
      try {
        const { list, hasNext } = await fetchCards();
        setCards(list);
        setHasNext(hasNext);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('알 수 없는 에러가 발생하였습니다.'));
        }

        console.error('Error fetching cards:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getCards();
  }, []);

  const lastCardId = cards.length > 0 ? cards[cards.length - 1].card.cardId : null;

  const fetchNextPage = useCallback(async () => {
    if (!hasNext) {
      return;
    }

    if (lastCardId === null) {
      return;
    }

    setIsLoading(true);

    try {
      const { list, hasNext } = await fetchCardsWithPage(lastCardId);
      setCards(prev => [...prev, ...list]);
      setHasNext(hasNext);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error('알 수 없는 에러가 발생하였습니다.'));
      }

      console.error('Error fetching next cards:', error);
    } finally {
      setIsLoading(false);
    }
  }, [hasNext, lastCardId]);

  return { data: { cards, hasNext }, isLoading, error, fetchNextPage };
}
