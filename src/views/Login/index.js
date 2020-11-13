import React from 'react';
import { Button, Input, InputAdornment, IconButton } from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  LockOpen,
  MailOutline,
} from '@material-ui/icons';
import useStyles from '../../styles/Login/makeStyle';
import {
  LoginContainer,
  LogoImage,
  Title,
  Subtitle,
} from '../../styles/Login/login';
import Logo from '../../assets/logo-home@2x.png';

function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <LoginContainer>
      <LogoImage src={Logo} alt="logo" />

      <Title>BEM-VINDO AO EMPRESAS</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
      </Subtitle>

      <Input
        className={classes.inputStyle}
        value={values.email}
        fullWidth
        placeholder="Email"
        color="primary"
        onChange={handleChange('email')}
        startAdornment={
          <InputAdornment position="start">
            <MailOutline color="primary" />
          </InputAdornment>
        }
        labelWidth={70}
      />

      <Input
        className={classes.inputStyle}
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        fullWidth
        placeholder="Senha"
        color="primary"
        onChange={handleChange('password')}
        startAdornment={
          <InputAdornment position="start">
            <LockOpen color="primary" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />

      <Button
        className={classes.buttonStyle}
        fullWidth
        variant="contained"
        color="secondary"
      >
        ENTRAR
      </Button>
    </LoginContainer>
  );
}

export default Login;
