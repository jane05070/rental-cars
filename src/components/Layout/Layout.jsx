import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from "../Container/Container"

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;
