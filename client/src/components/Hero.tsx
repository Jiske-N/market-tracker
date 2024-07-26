import Typewriter from 'typewriter-effect';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        maxWidth: '800px',
        margin: 'auto',
        paddingTop: { xs: '96px', md: '0' },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#00df9a',
          fontWeight: 'bold',
          padding: '0.5rem',
        }}
      >
        YOUR GATEWAY TO FINANCIAL SUCCESS
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: '4xl', sm: '6xl', md: '7xl' },
          fontWeight: 'bold',
          paddingY: { xs: '0', md: '1.5rem' },
        }}
      >
        Unlock inspiration.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '1rem',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 'xl', sm: '4xl', md: '5xl' },
            fontWeight: 'bold',
            paddingRight: { xs: '0.5rem', md: '1rem' },
          }}
        >
          Fast, flexible data on the
        </Typography>
        <Typewriter
          options={{
            strings: ['NYSE', 'NASDAQ', 'CHX'],
            autoStart: true,
            loop: true,
            delay: 120,
            deleteSpeed: 140,
          }}
        //   style={{
        //     fontSize: { xs: 'xl', sm: '4xl', md: '5xl' },
        //     fontWeight: 'bold',
        //     paddingLeft: { xs: '0.5rem', md: '1rem' },
        //   }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: 'xl', md: '2xl' },
          fontWeight: 'bold',
          color: 'gray.500',
        }}
      >
        Monitor your investments and discover new opportunites to achieve financial freedom.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#00df9a',
          color: 'black',
          width: '200px',
          borderRadius: '8px',
          fontWeight: 'medium',
          marginY: '1.5rem',
          marginX: 'auto',
          paddingY: '0.75rem',
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;