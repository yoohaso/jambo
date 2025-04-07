import { HomeIcon, SayIcon, MyIcon, UnionIcon } from '@/components/icons';
import { WriteButton } from './WriteButton';
import { MENU_NAME } from '@/constants';

export function SideMenu() {
  return (
    <div className="fixed hidden h-screen w-side-menu-desktop bg-common-tabbar p-[16px] sm:block">
      <div className="h-header-desktop" />
      <SideMenuButton iconComponent={<HomeIcon />} label={MENU_NAME.HOME} />
      <SideMenuButton iconComponent={<UnionIcon />} label={MENU_NAME.NEARBY} />
      <SideMenuButton iconComponent={<SayIcon />} label={MENU_NAME.CONNECT} />
      <SideMenuButton iconComponent={<MyIcon />} label={MENU_NAME.ME} />
      <SideMenuButton iconComponent={<WriteButton size={24} />} label={MENU_NAME.ADD_A_CARD} />
    </div>
  );
}

interface SideMenuButtonProps {
  iconComponent: React.ReactNode;
  label: string;
}

function SideMenuButton({ iconComponent, label }: SideMenuButtonProps) {
  return (
    <div className="flex h-[48px] items-center gap-common-presentCard-gap py-[6px]">
      {iconComponent}
      <div className="typography-desktop-side-menu h-[11px] text-text-default">{label}</div>
    </div>
  );
}
