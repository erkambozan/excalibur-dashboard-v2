import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import {
  Checkbox,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import Iconify from "../../../components/iconify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../index";
import { loginUser } from "../../../core/auth/usecase/loginUser";
import AlertMessage from "../../../app/Alert";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [status, setStatusBase] = React.useState({
    key: 0,
    message: "",
    severity: "",
  });

  const handleClick = async (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(loginUser({ userName, password }))
      .unwrap()
      .then(() => {
        setUserName("");
        setPassword("");
        navigate("/dashboard/app", { replace: true });
      })
      .catch(() => {
        setStatusBase({
          key: Math.random(),
          message: "Kullanıcı adı yada şifre hatalı",
          severity: "error",
        });
      });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="E-Posta"
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          name="password"
          label="Şifre"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Checkbox name="remember" />
        <Link variant="subtitle2" underline="hover">
          Şifreni mi unuttun?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
      {status.message ? <AlertMessage {...status} /> : null}
    </>
  );
}
