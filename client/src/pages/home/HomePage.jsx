import AlbumsSections from '../../components/album/AlbumsSections';
import { sections } from '../../dummyData';

function HomePage() {
  return (
    <section>
      <AlbumsSections sections={sections} />
    </section>
  );
}

export default HomePage;
