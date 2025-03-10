import { useState } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


//import { useRouter } from 'src/routes/hooks';

// import { bgGradient } from '../theme/css';

//import Logo from 'src/components/logo';
//import Iconify from '../components/iconify';

export function LoginView() {
  const theme = useTheme();
  const navigate = useNavigate()

  //const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    //router.push('/dashboard');
    
    const params = new URLSearchParams();
    params.append('client_id', 'auction-cli');
    params.append('username', 'admin');
    params.append('password', 'admin');
    params.append('grant_type', 'password');

    alert(import.meta.env.VITE_AUTH_API_HOST)

    axios({
          method: 'post',
          url: `${import.meta.env.VITE_AUTH_API_HOST}/realms/master/protocol/openid-connect/token`,
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: params.toString()
      })
      .then(function (response) {
          console.log(JSON.stringify(response.data));
          localStorage.setItem('TOKEN', response.data.access_token);
          navigate("/")
      })
      .catch(function (error) {
          console.log(error);
      });
  };

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {/* <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} /> */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      // sx={{
      //   ...bgGradient({
      //     color: alpha(theme.palette.background.default, 1),
      //     imgUrl: '/assets/background/overlay_4.jpg',
      //   }),
      //   height: 1,
      // }}
    >
      {/* <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}


      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
      <br/><br/>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Stack direction="row" spacing={1}>
              <Link href="/" underline="none">                  
                <Box
                  component="img"
                  src="/assets/logo.png"
                  sx={{ width: 55 }}
                />
              </Link>                      

              <Typography variant="h4">
                Login
              </Typography>
          </Stack>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Ainda nao possui uma conta?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Criar Nova Conta
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              Google
              {/* <Iconify icon="eva:google-fill" color="#DF3E30" /> */}
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              Facebook
              {/* <Iconify icon="eva:facebook-fill" color="#1877F2" /> */}
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              Twitter
              {/* <Iconify icon="eva:twitter-fill" color="#1C9CEA" /> */}
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              OU
            </Typography>
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
