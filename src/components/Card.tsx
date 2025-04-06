function VisitorIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.28571 1.28571C4.28571 0.575893 4.86161 0 5.57143 0H6.42857C7.13839 0 7.71429 0.575893 7.71429 1.28571V10.7143C7.71429 11.4241 7.13839 12 6.42857 12H5.57143C4.86161 12 4.28571 11.4241 4.28571 10.7143V1.28571ZM0 6.42857C0 5.71875 0.575893 5.14286 1.28571 5.14286H2.14286C2.85268 5.14286 3.42857 5.71875 3.42857 6.42857V10.7143C3.42857 11.4241 2.85268 12 2.14286 12H1.28571C0.575893 12 0 11.4241 0 10.7143V6.42857ZM9.85714 1.71429H10.7143C11.4241 1.71429 12 2.29018 12 3V10.7143C12 11.4241 11.4241 12 10.7143 12H9.85714C9.14732 12 8.57143 11.4241 8.57143 10.7143V3C8.57143 2.29018 9.14732 1.71429 9.85714 1.71429Z"
        fill="black"
      />
    </svg>
  );
}

function TalkingIcon() {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.86524 5.71976C7.21726 5.71976 8.31336 4.62367 8.31336 3.27164C8.31336 1.91962 7.21726 0.823517 5.86524 0.823517C4.51323 0.823517 3.41712 1.91962 3.41712 3.27164C3.41712 4.62365 4.51323 5.71976 5.86524 5.71976ZM11.3626 5.65557C12.3707 5.65557 13.1879 4.83831 13.1879 3.83021C13.1879 2.82212 12.3707 2.00486 11.3626 2.00486C10.3545 2.00486 9.5372 2.82212 9.5372 3.83021C9.5372 4.83831 10.3545 5.65557 11.3626 5.65557ZM14.991 9.97175C14.6259 7.67395 13.4233 6.29957 11.3617 6.29957C10.5672 6.29957 9.92296 6.49286 9.38605 6.87935C9.45051 6.94381 9.51489 7.00819 9.6008 7.07264C10.4812 7.99609 11.0826 9.32749 11.3617 11.024C11.3617 11.0595 11.3682 11.0949 11.374 11.1268C11.3788 11.1528 11.3832 11.1765 11.3832 11.1958C13.3803 11.2173 15.1412 10.8737 14.9909 9.97173L14.991 9.97175ZM1.01104 11.1527C0.817768 12.3338 3.17999 12.8062 5.86433 12.8062C8.54868 12.8062 10.9109 12.3338 10.7176 11.1527C10.2022 8.08183 8.59163 6.25648 5.86433 6.25648C3.13704 6.25648 1.52645 8.06036 1.01104 11.1527Z"
        fill="black"
      />
    </svg>
  );
}

interface CardProps {
  cardType?: 'POST' | 'VIDEO';
  profile?: {
    nickName: string;
    imageUrl: string;
  };
  category?: {
    name: string;
    imageUrl: string;
  };
  title?: string;
  body?: string | null;
  cardImages?: { imageUrl: string }[];
  video?: { videoUrl: string }[];
  viewCount?: number;
  userCount?: number;
  createdAt?: number;
}

export function Card({
  cardType = 'POST',
  profile = {
    nickName: 'Arthur',
    imageUrl: 'https://jambo-homework.s3.ap-northeast-2.amazonaws.com/thumbnail/t11.png',
  },
  category = {
    name: 'Question & Answer',
    imageUrl:
      'https://jambo-homework.s3.ap-northeast-2.amazonaws.com/categroy/Question%26Answer.png',
  },
  title = 'Entrepreneurs & Hustlers Connect!',
  body = "If you're passionate about business, side hustles, or personal growth, let’s exchange knowledge and push each other toward success!",
  cardImages = [
    {
      imageUrl: 'https://jambo-homework.s3.ap-northeast-2.amazonaws.com/image/img5.png',
    },
  ],
  viewCount = 720,
  userCount = 14,
  createdAt = 1677369600000,
}: CardProps) {
  return cardType === 'POST' ? (
    <PostCard
      profile={profile}
      createdAt={createdAt}
      category={category}
      title={title}
      body={body}
      cardImages={cardImages}
      viewCount={viewCount}
      userCount={userCount}
    />
  ) : (
    <></>
  );
}

interface PostCardProps {
  profile: {
    nickName: string;
    imageUrl: string;
  };
  category: {
    name: string;
    imageUrl: string;
  };
  title: string;
  body: string | null;
  cardImages: { imageUrl: string }[];
  viewCount: number;
  userCount: number;
  createdAt: number;
}

function PostCard({
  profile,
  createdAt,
  category,
  title,
  body,
  viewCount,
  userCount,
}: PostCardProps) {
  return (
    <div className="h-fit rounded-[32px] bg-common-container-presentCard sm:w-[560px]">
      <UserInfo {...profile} createdAt={createdAt} />
      <Contents
        category={category}
        title={title}
        body={body}
        viewCount={viewCount}
        userCount={userCount}
      />
    </div>
  );
}

interface UserInfoProps {
  nickName: string;
  imageUrl: string;
  createdAt: number;
}

function UserInfo({ nickName, imageUrl, createdAt }: UserInfoProps) {
  return (
    <div className="flex items-center gap-common-presentCard-gap px-common-padding-presentCard pb-[12px] pt-common-padding-presentCard">
      <img src={imageUrl} className="size-[34px] rounded-common-border-radius-full" />
      <div className="flex flex-col gap-unit-xxxs">
        <span className="typography-exception-username-small text-text-default">{nickName}</span>
        <span className="typography-exception-meta text-text-default">{createdAt}</span>
      </div>
    </div>
  );
}

interface ContentsProps {
  category: {
    name: string;
    imageUrl: string;
  };
  title: string;
  body: string | null;
  viewCount: number;
  userCount: number;
}

function Contents({ category, title, body, viewCount, userCount }: ContentsProps) {
  return (
    <div className="flex flex-col gap-common-presentCard-gap px-common-padding-presentCard pb-common-padding-presentCard">
      <div className="flex flex-col gap-[2px]">
        <div className="flex gap-unit-xxxs">
          <img src={category.imageUrl} className="size-[14px]" />
          <span className="typography-label-small-bold text-text-default">{category.name}</span>
        </div>
        <span className="typography-title-small-heavy text-text-default">{title}</span>
      </div>
      <div>
        <p className="typography-medium text-text-default">{body}</p>
      </div>
      <div className="flex gap-unit-sx">
        <div className="flex items-center gap-unit-xxxs">
          <VisitorIcon />
          <span className="typography-body-small text-text-default">{viewCount}</span>
        </div>
        <div className="flex items-center gap-unit-xxxs">
          <TalkingIcon />
          <span className="typography-body-small text-text-default">{userCount}</span>
        </div>
      </div>
    </div>
  );
}
