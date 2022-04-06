import ListAlbums from './ListAlbums';

interface IProps {
  sections: Array<any>;
}

function AlbumsSections({ sections }: IProps) {
  console.log(sections);
  return (
    <>
      {sections.map((section) => (
        <div key={section.id} className='mb-10'>
          <div className='mb-5'>
            <h1 className='text-2xl font-bold tracking-[-0.04em]'>
              {section.name}
            </h1>
          </div>
          <ListAlbums singers={section.singers} />
        </div>
      ))}
    </>
  );
}

export default AlbumsSections;
