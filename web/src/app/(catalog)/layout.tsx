import { FC, ReactNode } from 'react';

import { Navigation } from '@/components/navigation';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='container py-4'>
      <Navigation />
      {children}
    </main>
  );
};

export default Layout;
