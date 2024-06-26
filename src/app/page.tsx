"use client"

import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const colors = [
  {
    url: "/building",
    title: 'Check In',
    backgroundColor: 'blue',
    width: '100vh',
  },
  {
    url: "/stats",
    title: 'Building Stats',
    backgroundColor: 'white',
    width: '100vh',
  },
];

const ColorButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiColorBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ColorBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row', // Adjust to 'row' if you want horizontal centering
        alignItems: 'center',    // Horizontal centering
        justifyContent: 'center', // Vertical centering
        height: '100vh',    
        widht: '100vh',   // Ensure the container takes at least the full viewport height
      }}
    >
      {colors.map((color) => (
        <Link key={color.title} href={color.url}>
          <ColorButton
            component="a"
            focusRipple
            style={{
              width: color.width,
            }}
          >
            <ColorBackdrop className="MuiColorBackdrop-root" style={{ backgroundColor: color.backgroundColor }} />
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme: { spacing: (arg0: number) => any; }) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {color.title}
            </Typography>
          </ColorButton>
        </Link>
      ))}
    </Box>
  );
}
