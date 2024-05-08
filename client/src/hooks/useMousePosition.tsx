// Snippet based on Josh Comeau https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/
import React, {useEffect} from 'react';

interface MousePosition {
    mouseX: number | null;
    mouseY: number | null;
  }

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ mouseX: null, mouseY: null });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;