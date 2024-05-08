import React, { ReactNode } from 'react'
import useMousePosition from '../../hooks/useMousePosition';

interface Props {
    children: ReactNode,
    className: string
}

// TODO: Fix: Doesn't work with scrolling currently

 const MouseGradient: React.FC<Props> = ({children,className}: Props) => {
    const {mouseX, mouseY} = useMousePosition();

  return (
    <div
        style={{
            backgroundImage: `radial-gradient( circle at ${mouseX}px ${mouseY}px, rgba(18,131,255,0.4), transparent 10vh )`
        }}
        className={className}
    >
        {children}
    </div>
  )
}

export default MouseGradient;