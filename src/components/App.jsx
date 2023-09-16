import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Catalogue = lazy(() => import('pages/Catalogue'));
const Favorites = lazy(() => import('pages/Favorites'));


export const App = () => {
  return (
    <>
      <Router basename="/rental-cars">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/catalog" element={<Catalogue />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};


