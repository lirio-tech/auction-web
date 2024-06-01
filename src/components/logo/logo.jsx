import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
//import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

//import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder) 
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
          />
          <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          />
          <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          />
        </g>
      </svg> */}
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="424.000000pt" height="306.000000pt" viewBox="0 0 424.000000 306.000000"
        preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,306.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M2033 2637 c18 -15 24 -32 7 -22 -11 7 -34 -13 -37 -31 -4 -23 -76
              -84 -98 -84 -13 0 -25 -5 -27 -10 -4 -14 -82 -40 -140 -47 -35 -4 -51 -2 -63
              11 -9 9 -23 16 -32 16 -16 0 -70 28 -91 48 -7 6 -20 12 -28 12 -8 0 -15 10
              -15 23 -1 16 -2 18 -6 5 -5 -21 -14 -23 -30 -7 -12 12 -49 -45 -338 -531 -620
              -1041 -594 -992 -595 -1111 -1 -171 100 -310 261 -360 62 -19 88 -20 465 -17
              395 3 400 3 459 27 86 35 173 124 205 211 31 83 33 184 6 255 -11 27 -70 137
              -133 243 -62 106 -113 200 -113 209 0 16 65 129 80 138 10 6 43 -47 315 -510
              234 -397 267 -449 317 -487 106 -81 165 -90 544 -86 285 3 302 5 357 27 82 32
              166 113 202 193 38 84 45 190 18 268 -31 91 -296 514 -323 516 -8 1 -17 2 -20
              3 -3 1 -15 4 -28 7 -12 2 -39 15 -60 28 -44 29 -134 120 -130 132 1 5 -1 19
              -5 30 -19 56 -165 59 -270 5 -48 -25 -63 -29 -72 -19 -16 18 -100 156 -270
              442 -175 293 -255 422 -255 410 0 -5 -8 6 -17 24 -9 18 -25 37 -37 43 -19 9
              -20 9 -3 -4z m-525 -132 c-3 -3 -9 2 -12 12 -6 14 -5 15 5 6 7 -7 10 -15 7
              -18z"/>
              <path d="M1480 2575 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
              -7 -10 -15z"/>
          </g>
        </svg>

    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    // <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
    //   {logo}
    // </Link>
    logo
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
