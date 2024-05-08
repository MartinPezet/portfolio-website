import React, { useMemo } from 'react';
import useMousePosition from '../../hooks/useMousePosition';


interface Props {
  children: React.ReactNode
}
// Chat GPT's Improved version
// This version when applied to App will re render everytime the user moves their mouse (messing up most animations on children)
const BackgroundGradient: React.FC<Props> = ({children}: Props) => {
    
  const {mouseX, mouseY} = useMousePosition();

  const width = window.innerWidth;
  const height = window.innerHeight;

  const styles = useMemo(() => {
    const positions = [{x: 100, y: 0, size: 60}, {x: 0, y: 100, size: 30}];

    const pixelPositions = positions.map(({x, y}) => ({x: width * (x / 100), y: height * (y / 100)}));

    const calculateDistance = (positionIndex: number) => {
      const {x, y} = pixelPositions[positionIndex];
      const dx = x - mouseX;
      const dy = y - mouseY;
      return Math.sqrt((dx ** 2 + dy ** 2) / (width * width + height * height)); // Distance as a percentage
    };

    const currentPercentageDistance = pixelPositions.map((_, index) => calculateDistance(index));

    return {
      background: `
        radial-gradient(circle at ${positions[0].x}vw ${positions[0].y}vh, rgba(18,131,255,0.4) 0vw, transparent ${positions[0].size * (1 - (currentPercentageDistance[0] / 3.5))}vw),
        radial-gradient(circle at ${positions[1].x}vw ${positions[1].y}vh, rgba(18,131,255,0.2) 0vw, transparent ${positions[1].size * (1 - (currentPercentageDistance[1] / 3.5))}vw)
        `,
        height: "200vh"
      };
  }, [mouseX, mouseY, width, height]);

  return (
    <div style={styles}>
      {children}
    </div>
  );
}

export default BackgroundGradient;