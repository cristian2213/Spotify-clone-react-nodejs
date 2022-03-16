const { Router } = require('express');
const router = Router();

// router.use('/my-path', myCustomRouter);
router.get('/sections', (req, res) => {
  const sections = [
    {
      id: '1',
      name: 'Recently Played',
      singers: [
        {
          id: 2,
          name: 'Sticky Fingers',
          artist: 'Artist',
          img: 'https://google.com',
          alt: 'custom alt.',
        },
        {
          id: 3,
          name: 'Hola Beats Lofi',
          artist: 'Music to work and study free of copyright',
          img: 'https://google.com',
          alt: 'custom alt.',
        },
        {
          id: 3,
          name: 'Hola Beats Lofi',
          artist: 'Music to work and study free of copyright',
          img: 'https://google.com',
          alt: 'custom alt.',
        },
        {
          id: 4,
          name: 'Hola Beats Lofi',
          artist: 'Music to work and study free of copyright',
          img: 'https://google.com',
          alt: 'custom alt.',
        },
      ],
    },
  ];
  return res.json(sections);
});
module.exports = router;
