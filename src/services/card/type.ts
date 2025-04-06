export type CardType = 'POST' | 'VIDEO';

interface Profile {
  nickName: string;
  profileImage: Image;
}

interface Category {
  name: string;
  imageUrl: string;
}

interface Image {
  imageUrl: string;
}

interface Video {
  videoUrl: string;
}

export interface CardResponse {
  list: CardItem[];
  hasNext: boolean;
}

interface BaseCardItem {
  profile: Profile;
}

interface PostCardItem extends BaseCardItem {
  cardType: 'POST';
  card: PostCard;
}

interface VideoCardItem extends BaseCardItem {
  cardType: 'VIDEO';
  card: VideoCard;
}

export type CardItem = PostCardItem | VideoCardItem;

interface BaseCard {
  cardId: string;
  category: Category;
  title: string;
  body: string | null;
  viewCount: number;
  userCount: number;
  createdAt: number;
}

interface PostCard extends BaseCard {
  cardType: 'POST';
  cardImage: Image[];
}

interface VideoCard extends BaseCard {
  cardType: 'VIDEO';
  video: Video[];
}
