import { HomeIcon, SayIcon, MyIcon, UnionIcon } from '@/components/icons';
import { WriteButton } from './WriteButton';

export function Tabbar() {
  return (
    <div className="flex h-tabbar-mobile w-full items-center justify-evenly bg-common-tabbar">
      <TabbarButton iconComponent={<HomeIcon />} label="HOME" />
      <TabbarButton iconComponent={<UnionIcon />} label="NEARBY" />
      <WriteButton size={44} />
      <TabbarButton iconComponent={<SayIcon />} label="CONNECT" />
      <TabbarButton iconComponent={<MyIcon />} label="ME" />
    </div>
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
