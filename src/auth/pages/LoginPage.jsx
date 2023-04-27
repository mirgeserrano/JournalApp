import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { Google, Outbound, Outbox } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingCredentials } from "../../store/auth/authSlice";
import { startGoogleSignIn } from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: "Mirgeserrano@gmail.com",
    password: "123456",
  });

  const isAunthenticating = useMemo(() => status === "cheking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingCredentials());
  };
  console.log(status);
  const onGoogleSingIn = () => {
    console.log("onGoogleSingI");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              value={email}
              name="email"
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="password"
              fullWidth
              value={password}
              name="password"
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
              <Button
                type="submit"
                disabled={isAunthenticating}
                variant="contained"
                fullWidth
              >
                login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mb: 2 }}>
              <Button
                onClick={onGoogleSingIn}
                variant="contained"
                disabled={isAunthenticating}
                fullWidth
              >
                <Google>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Google>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={LinkRouter} color="inherit" to="/auth/registar">
              Crear un cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
