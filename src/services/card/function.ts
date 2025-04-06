import ky from 'ky';
import { CardResponse } from './type';

export const fetchCards = async () => {
  const response = await ky.get<CardResponse>('/api/v1/card').json();
  return response;
};

export const fetcCardsWithPage = async (page: string) => {
  const response = await ky.get<CardResponse>(`/api/v1/card?page=${page}`).json();
  return response;
};
