import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

interface ThemeToggleProps {
  // eslint-disable-next-line react/require-default-props
  variant?: string;
}

export default function ThemeToggle({ variant = 'outline' }: ThemeToggleProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      variant={variant}
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
    />
  );
}
