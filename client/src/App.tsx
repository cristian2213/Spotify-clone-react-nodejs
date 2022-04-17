import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/home/HomePage';

import SearchPage from './pages/search/SearchPage';
import CollectionsPage from './pages/collections/CollectionsPage';
import PlaylistPage from './pages/playlist/PlaylistPage';
import TracksPage from './pages/tracks/TracksPage';

function App() {
  return (
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
  );
}

export default App;
