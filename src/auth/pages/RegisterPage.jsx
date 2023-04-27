import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

export const RegisterPage = () => {
  const ini = {
    displayName: "mirge",
    email: "Mirgeserrano@gmail.com",
    password: "123456",
  };
  const [formSubmited, setformSubmited] = useState(false);

  const er =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const formValidations = {
    email: [(value) => er.test(value), "El correo es inválido"],
    password: [
      (value) => value.length >= 6,
      "La contraseñan necesita 6 digitos",
    ],
    displayName: [
      (value) => value.length >= 5,
      "El nombre es obligatorio, asegúrate de que tenga más de 5 caracteres",
    ],
  };

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    displayNameValid,
    emailValid,
    passwordValid,
    isFormValid,
  } = useForm(ini, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmited(true);
    if (!isFormValid) return;
    // dispatch(checkingCredentials());
  };

  return (
    <AuthLayout title="Registrate. ">
      {/* <h3>Form Valid</h3> {isFormValid ? "V" : "F"} */}
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Name"
              type="Name"
              placeholder="Complet Name"
              fullWidth
              value={displayName}
              name="displayName"
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              value={email}
              name="email"
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              value={password}
              name="password"
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid
            container
            justifyContent="center"
            spacing={1}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12} sm={6} sx={{ mt: 1 }}>
              <Button fullWidth variant="contained" type="submit">
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={LinkRouter} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
