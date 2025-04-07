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

function Tabbar() {
  return (
    <div className="flex h-[64px] w-full items-center justify-evenly bg-common-tabbar">
      <TabbarButton iconComponent={<HouseIcon />} label="HOME" />
      <TabbarButton iconComponent={<LocationIcon />} label="NEARBY" />
      <WriteButton />
      <TabbarButton iconComponent={<MessageIcon />} label="CONNECT" />
      <TabbarButton iconComponent={<MyIcon />} label="ME" />
    </div>
  );
}

function WriteButton() {
  return (
    <div className="flex size-[44px] items-center justify-center rounded-[100px] border-2 border-base-grayscale-grayscale-0 bg-form-button-primary">
      <PlusIcon />
    </div>
  );
}

export function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Header>
        <SearchBar />
        <BellIcon />
      </Header>
      <main>
        <CardList />
      </main>
      <div className="sm: hidden h-[64px]"></div>
      <div className="fixed inset-x-0 bottom-0 z-10 sm:hidden">
        <Tabbar />
      </div>
    </div>
  );
}

function HouseIcon() {
  return (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.523 1.32603C9.94492 0.230491 11.9298 0.223736 13.3588 1.31144L20.8395 7.00679V7.05099C21.5772 7.78429 22 8.78452 22 9.83708V21.0098C22 21.8398 21.3244 22.5 20.5062 22.5H14.716C13.8978 22.5 13.2222 21.8398 13.2222 21.0098V17.4137H8.77778V21.0098C8.77778 21.8398 8.1022 22.5 7.28395 22.5H1.49383C0.67558 22.5 0 21.8398 0 21.0098V9.82605C0 8.60432 0.569058 7.45625 1.53452 6.71078L8.523 1.32603Z"
        fill="black"
      />
    </svg>
  );
}

interface TabbarButtonProps {
  iconComponent: React.ReactNode;
  label?: string;
}

function TabbarButton({ iconComponent, label }: TabbarButtonProps) {
  return (
    <div className="flex h-[48px] flex-col items-center justify-between py-[6px]">
      {iconComponent}
      <div className="typography-mobile-tabbar h-[11px] text-text-default">{label}</div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.23529 10.6696C2.23529 6.11434 5.75476 2.49594 10 2.49594C14.2452 2.49594 17.7647 6.11434 17.7647 10.6696C17.7647 12.8816 16.3826 15.8768 14.5584 18.3996C13.662 19.6393 12.7009 20.7057 11.8298 21.4503C11.3938 21.8229 10.9994 22.0986 10.6638 22.2766C10.3157 22.4612 10.0994 22.5041 10 22.5041C9.90055 22.5041 9.68428 22.4612 9.33624 22.2766C9.00058 22.0986 8.60615 21.8229 8.17023 21.4503C7.29912 20.7057 6.33795 19.6393 5.44157 18.3996C3.61739 15.8768 2.23529 12.8816 2.23529 10.6696ZM10 0.5C4.56735 0.5 0.239349 5.09905 0.239349 10.6696C0.239349 13.5204 1.92419 16.9415 3.82415 19.5691C4.78983 20.9047 5.85504 22.0971 6.87338 22.9675C7.38218 23.4024 7.89826 23.7733 8.40121 24.04C8.89178 24.3001 9.44224 24.5 10 24.5C10.5578 24.5 11.1082 24.3001 11.5988 24.04C12.1017 23.7733 12.6178 23.4024 13.1266 22.9675C14.145 22.0971 15.2102 20.9047 16.1759 19.5691C18.0758 16.9415 19.7606 13.5204 19.7606 10.6696C19.7606 5.09905 15.4326 0.5 10 0.5ZM7.10345 10.8449C7.10345 9.2452 8.40028 7.94837 10 7.94837C11.5997 7.94837 12.8966 9.2452 12.8966 10.8449C12.8966 12.4446 11.5997 13.7415 10 13.7415C8.40028 13.7415 7.10345 12.4446 7.10345 10.8449ZM10 5.95243C7.29795 5.95243 5.1075 8.14287 5.1075 10.8449C5.1075 13.547 7.29795 15.7374 10 15.7374C12.702 15.7374 14.8925 13.547 14.8925 10.8449C14.8925 8.14287 12.702 5.95243 10 5.95243Z"
        fill="black"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4.47972C0 2.28736 1.76911 0.498535 3.96296 0.498535H18.037C20.2309 0.498535 22 2.28736 22 4.47972V15.1623C22 17.3546 20.2309 19.1435 18.037 19.1435H13.5835L10.2038 22.1708L10.1703 22.1961C9.1761 22.9464 7.77778 22.224 7.77778 21.0004V19.1435H3.96296C1.76911 19.1435 0 17.3546 0 15.1623V4.47972ZM3.96296 2.49854C2.88522 2.49854 2 3.38035 2 4.47972V15.1623C2 16.2616 2.88522 17.1435 3.96296 17.1435H8.28395C9.11485 17.1435 9.77778 17.8193 9.77778 18.6403V19.8674L12.4534 17.4707L12.4859 17.446C12.7458 17.2489 13.0619 17.1435 13.3864 17.1435H18.037C19.1148 17.1435 20 16.2616 20 15.1623V4.47972C20 3.38035 19.1148 2.49854 18.037 2.49854H3.96296Z"
        fill="black"
      />
    </svg>
  );
}

function MyIcon() {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1538 2.34615C5.56563 2.34615 1.84615 6.06563 1.84615 10.6538V14.3462C1.84615 18.9344 5.56563 22.6538 10.1538 22.6538H13.8462C18.4344 22.6538 22.1538 18.9344 22.1538 14.3462V10.6538C22.1538 6.06563 18.4344 2.34615 13.8462 2.34615H10.1538ZM0 10.6538C0 5.04603 4.54603 0.5 10.1538 0.5H13.8462C19.454 0.5 24 5.04603 24 10.6538V14.3462C24 19.954 19.454 24.5 13.8462 24.5H10.1538C4.54603 24.5 0 19.954 0 14.3462V10.6538Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9446 7.88473C10.4458 7.88473 9.2308 9.09976 9.2308 10.5986C9.2308 12.0974 10.4458 13.3124 11.9446 13.3124C13.4435 13.3124 14.6585 12.0974 14.6585 10.5986C14.6585 9.09976 13.4435 7.88473 11.9446 7.88473ZM7.38464 10.5986C7.38464 8.08016 9.42622 6.03857 11.9446 6.03857C14.4631 6.03857 16.5046 8.08016 16.5046 10.5986C16.5046 13.117 14.4631 15.1586 11.9446 15.1586C9.42622 15.1586 7.38464 13.117 7.38464 10.5986Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15.269C8.42982 15.269 5.53848 18.1603 5.53848 21.7305C5.53848 22.2403 5.1252 22.6536 4.6154 22.6536C4.1056 22.6536 3.69232 22.2403 3.69232 21.7305C3.69232 17.1407 7.41021 13.4229 12 13.4229C16.5898 13.4229 20.3077 17.1407 20.3077 21.7305C20.3077 22.2403 19.8944 22.6536 19.3846 22.6536C18.8748 22.6536 18.4616 22.2403 18.4616 21.7305C18.4616 18.1603 15.5702 15.269 12 15.269Z"
        fill="black"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.72727 0.727273C8.72727 0.325611 8.40166 0 8 0C7.59834 0 7.27273 0.325611 7.27273 0.727273V7.27273H0.727273C0.325611 7.27273 0 7.59834 0 8C0 8.40166 0.325611 8.72727 0.727273 8.72727H7.27273V15.2727C7.27273 15.6744 7.59834 16 8 16C8.40166 16 8.72727 15.6744 8.72727 15.2727V8.72727H15.2727C15.6744 8.72727 16 8.40166 16 8C16 7.59834 15.6744 7.27273 15.2727 7.27273H8.72727V0.727273Z"
        fill="black"
      />
    </svg>
  );
}
