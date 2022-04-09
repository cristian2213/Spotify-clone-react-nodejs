import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/home/HomePage';

import SearchPage from './pages/search/SearchPage';
import CollectionsPage from './pages/collections/CollectionsPage';
import PlaylistPage from './pages/playlist/PlaylistPage';
import TracksPage from './pages/tracks/TracksPage';

function App() {
  // 0. Use SWR and Skeleton to better UI&UX ✅
  // 1. Make to the main content resize dragging ✅
  // 2. Create progress bar and program it ✅
  // 3. Create controlls to the player ✅
  // 5. Recieve song in stream from the server ❌
  // 6. Create search page ❌
  // 8. Create unit-testing, integration-testing and end-two-end-testing ❌
  // 9. Deploy ❌

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
