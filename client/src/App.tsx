import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/home/HomePage';

import SearchPage from './pages/search/SearchPage';
import CollectionsPage from './pages/collections/CollectionsPage';
import PlaylistPage from './pages/playlist/PlaylistPage';
import TracksPage from './pages/tracks/TracksPage';
// const SearchPage = lazy(() => import('./pages/search/SearchPage'));
// const CollectionsPage = lazy(() =>
//   import('./pages/collections/CollectionsPage')
// );
// const PlaylistPage = lazy(() => import('./pages/playlist/PlaylistPage'));
// const TracksPage = lazy(() => import('./pages/tracks/TracksPage'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='' element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='collections' element={<CollectionsPage />} />
          <Route path='playlist' element={<PlaylistPage />} />
          <Route path='tracks' element={<TracksPage />} />
        </Route>
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </Suspense>
  );
}

export default App;
