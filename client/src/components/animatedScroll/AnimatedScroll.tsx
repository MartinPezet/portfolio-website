import React, { useEffect, useRef, useState } from 'react'

interface ScrollProps {
    children: React.ReactNode;
    threshold?: number;
    transitionClass?: string;
    className?: string;
};

const AnimatedScroll: React.FC<ScrollProps> = ({children, threshold = 0.2, transitionClass = "default-scroll-transition", className = ""}) => {

    const [isVisible, setIsVisible] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    entry.boundingClientRect.top > 0
                  ) {
                    setIsVisible(true);
                    console.log(isVisible ? "" : "motion-safe:" + transitionClass)
                  }
            },
            { threshold }
        );
        const element = ref.current;
        if (element) observer.observe(element);
    }, [ref, threshold]);

    return (
    <div ref={ref} className={`${className} motion-safe:transition-all motion-safe:duration-1000 ${isVisible ? "" : transitionClass}`}>
        {children}
    </div>
    )
}

export default AnimatedScroll;