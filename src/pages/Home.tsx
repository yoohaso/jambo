import { CardList } from '@/components/CardList';
import { Header } from '@/components/Header';
import { SideMenu } from '@/components/SideMenu';
import { Tabbar } from '@/components/Tabbar';

export function Home() {
  return (
    <HomeLayout>
      <CardList />
    </HomeLayout>
  );
}

interface HomeLayaoutProps {
  children: React.ReactNode;
}

function HomeLayout({ children }: HomeLayaoutProps) {
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="flex">
        <SideMenu />
        <main className="flex-1">
          <div className="h-header-mobile w-full sm:block sm:h-header-desktop" />
          <div className="flex">
            <div className="hidden h-screen w-side-menu-desktop sm:block" />
            <div className="flex-1">{children}</div>
          </div>
          <div className="hidden h-[200px] w-full sm:block" />
        </main>
      </div>
      <div className="h-tabbar-mobile sm:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-10 sm:hidden">
        <Tabbar />
      </div>
    </div>
  );
}
