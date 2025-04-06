import BrandLogoImage from '@/assets/images/brand-logo-image.png';
import { CardList } from '@/components/CardList';

function BellIcon() {
  return (
    <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5269 12.8483C24.5329 12.7907 24.536 12.7322 24.536 12.673C24.536 11.749 23.7869 11 22.863 11C21.939 11 21.19 11.749 21.19 12.673C21.19 12.7322 21.193 12.7907 21.199 12.8484C19.7172 13.1583 18.3067 13.8629 17.1696 14.8326C15.6102 16.1623 14.4981 18.0524 14.4981 20.2016V26.8936C14.4981 27.5675 14.422 28.0135 14.2825 28.2721C14.2231 28.3824 14.1607 28.4418 14.0939 28.48C14.0254 28.5191 13.9016 28.5644 13.6783 28.5666H13.6616C13.1996 28.5666 12.8251 28.9411 12.8251 29.4031C12.8251 29.4031 12.8251 29.4031 12.8251 29.4031C12.8251 29.8651 13.1996 30.2396 13.6616 30.2396C13.6694 30.2396 13.6771 30.2396 13.6849 30.2396H19.8701C19.9936 31.7844 21.2869 33 22.8635 33C24.44 33 25.7333 31.7844 25.8568 30.2396H32.0414C32.0491 30.2396 32.0569 30.2396 32.0647 30.2396C32.4978 30.2396 32.854 29.9105 32.8969 29.4887C32.8997 29.4605 32.9012 29.432 32.9012 29.4031C32.9012 29.4031 32.9012 29.4031 32.9012 29.4031C32.9012 29.3995 32.9012 29.3959 32.9011 29.3923C32.9005 29.3428 32.8955 29.2943 32.8867 29.2472C32.8136 28.8597 32.4734 28.5666 32.0647 28.5666H32.048C31.8246 28.5644 31.7009 28.5191 31.6324 28.48C31.5656 28.4418 31.5032 28.3824 31.4437 28.2721C31.3043 28.0135 31.2282 27.5675 31.2282 26.8936V20.2016C31.2282 18.0524 30.1161 16.1623 28.5567 14.8326C27.4194 13.8628 26.0088 13.1582 24.5269 12.8483ZM29.7627 28.5666C29.5929 28.0283 29.5552 27.4341 29.5552 26.8936V20.2016C29.5552 18.6535 28.7516 17.1975 27.4711 16.1056C26.1892 15.0124 24.4959 14.3461 22.8631 14.3461C21.2304 14.3461 19.5371 15.0124 18.2551 16.1056C16.9746 17.1975 16.1711 18.6535 16.1711 20.2016V26.8936C16.1711 27.4341 16.1333 28.0283 15.9636 28.5666H29.7627ZM24.1714 30.2396H21.5555C21.6696 30.8581 22.2121 31.327 22.8635 31.327C23.5148 31.327 24.0573 30.8581 24.1714 30.2396Z"
        fill="#805AF1"
      />
    </svg>
  );
}

interface HeaderProps {
  children?: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <div className="flex h-[64px] w-screen min-w-[390px] gap-common-presentCard-gap border-b-[0.5px] bg-common-home-header-background py-[8px] pl-[8px] pr-[14px] sm:h-[68px] sm:w-full sm:min-w-[360px]">
      {children}
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex size-full items-center gap-unit-sx rounded-common-border-radius-full border-2 border-common-home-searchbar bg-common-search px-[12px]">
      <img src={BrandLogoImage} alt="Brand Logo" className="h-[18px] w-[79.95px]" />
      <input
        type="text"
        className="typography-medium h-[18px] w-full bg-common-search text-text-default outline-none placeholder:text-common-home-searchbar"
        placeholder="Search for Cards"
      />
    </div>
  );
}

export function Home() {
  return (
    <div className="h-screen w-screen">
      <Header>
        <SearchBar />
        <BellIcon />
      </Header>
      <main className="flex flex-col items-center gap-common-presentCard-gap p-[8px]">
        <CardList />
      </main>
    </div>
  );
}
