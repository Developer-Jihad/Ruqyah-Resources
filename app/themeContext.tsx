
"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

interface ThemeContextProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeToggleContext = createContext<ThemeContextProps>({
  toggleTheme: () => {},
  isDarkMode: false,
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeToggleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme.palette.mode === 'light' ? darkTheme : lightTheme;
      localStorage.setItem('preferredTheme', newTheme.palette.mode);
      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme === 'dark') {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, []);

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, isDarkMode: theme.palette.mode === 'dark' }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
