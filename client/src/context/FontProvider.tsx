import React, { createContext, useState, ReactNode, useEffect, useMemo, useCallback } from 'react';

export interface FontContextProps {
  currentFont: string;
  setFont: (font: string) => void;
  fonts: string[];
}

const FontContext = createContext<FontContextProps | undefined>(undefined);

interface FontProviderProps {
  children: ReactNode;
}

const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
    
  const fonts = useMemo(() => [
    'Fugaz One',
    'Mogra',
    'Black Ops One',
    'Zen Dots',
    'Slackey'
  ], []);

  const [currentFont, setCurrentFont] = useState<string>(fonts[0]);

  const setFont = useCallback((font: string) => {
    setCurrentFont(font)
    const root = document.querySelector(':root') as HTMLElement;
    root.style.setProperty('--emphasisedFontFamily', font + ', Poppins, sans-serif');
  }, []);

  useEffect(() => {
    setFont(fonts[0]);
  }, [setFont, fonts])

  return (
    <FontContext.Provider value={{ currentFont, setFont, fonts }}>
      {children}
    </FontContext.Provider>
  );
};

export default FontProvider;

export const FontCon = FontContext;
