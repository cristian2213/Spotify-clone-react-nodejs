import { useCallback, useState, useEffect, MouseEvent } from 'react';

interface IProps {
  onSizeChange: (arg: number) => void;
}

function ResizeBar({ onSizeChange }: IProps) {
  const [isResize, setIsResize] = useState(false);

  const handleMouse = useCallback(
    (event: any) => {
      switch (event.type) {
        case 'mousemove':
          if (isResize) {
            const maxX = 410;
            const minX = 172;
            const { clientX } = event;

            switch (true) {
              case clientX >= maxX:
                onSizeChange(maxX);
                break;

              case clientX <= minX:
                onSizeChange(minX);
                break;

              case clientX >= minX && clientX <= maxX:
                onSizeChange(clientX);
                break;
            }
          }
          break;

        case 'mouseup':
          if (isResize) {
            setIsResize(false);
          }
          break;
      }
    },
    [isResize, onSizeChange]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('mouseup', handleMouse);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('mouseup', handleMouse);
    };
  }, [handleMouse]);

  const handleResize = () => {
    setIsResize(true);
  };

  return (
    <div
      className='w-[9px] bg-black cursor-col-resize group transition-all'
      onMouseDown={handleResize}
    >
      <span className='block w-[0.1px] h-full group-hover:bg-[#636363]'></span>
    </div>
  );
}

export default ResizeBar;
