/* eslint-disable no-console */
import React, { useState } from 'react';
import { Button, Input, InputAdornment, IconButton } from '@material-ui/core';
import {
  Visibility,
  VisibilityOff,
  LockOpen,
  MailOutline,
  Error,
} from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../../styles/Login/makeStyle';
import {
  LoginContainer,
  LogoImage,
  Title,
  Subtitle,
  ErrorMsg,
} from '../../styles/Login/login';
import { authLogin } from '../../store/fetchActions';
import Logo from '../../assets/logo-home@2x.png';

function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.load.loading);
  const error = useSelector((state) => state.auth.error);
  const classes = useStyles();

  const [values, setValues] = useState({
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

  async function handleLogin(e) {
    e.preventDefault();

    console.log(loading);
    const data = {
      email: values.email,
      password: values.password,
    };
    dispatch(authLogin(data));
  }

  return (
    <LoginContainer onSubmit={handleLogin}>
      <LogoImage src={Logo} alt="logo" />

      <Title>BEM-VINDO AO EMPRESAS</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
      </Subtitle>

      <Input
        className={classes.inputStyle}
        value={values.email}
        fullWidth
        type="text"
        placeholder="Email"
        color="primary"
        error={error}
        onChange={handleChange('email')}
        startAdornment={
          <InputAdornment position="start">
            <MailOutline color="primary" />
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
              {error ? <Error style={{ color: '#ff0f44' }} /> : null}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />

      <Input
        className={classes.inputStyle}
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        fullWidth
        error={error}
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
              {error ? (
                <Error style={{ color: '#ff0f44', marginLeft: '15px' }} />
              ) : null}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {error && (
        <ErrorMsg>
          Credenciais informadas são inválidas, tente novamente.
        </ErrorMsg>
      )}
      <Button
        className={classes.buttonStyle}
        fullWidth
        variant="contained"
        color="secondary"
        type="submit"
      >
        ENTRAR
      </Button>
    </LoginContainer>
  );
}

export default Login;
