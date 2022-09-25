import React, { Suspense, useRef } from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';
import Loading from '../Loading';
import MenuToggler from '../MenuToggler';
import { StyledMain } from './styles';

function Layout() {
  const menuToggler = useRef<HTMLInputElement>(null);

  return (
    <>
      <MenuToggler forwardRef={menuToggler} />
      <Header menuToggler={menuToggler} />
      <StyledMain>
        <Suspense fallback={<Loading size="SMALL" />}>
          <Outlet />
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
}

export default Layout;
