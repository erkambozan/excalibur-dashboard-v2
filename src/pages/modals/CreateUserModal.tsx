import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import BasicModalDialogProps from "../../app/BasicModalDialogProps";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../index";
import AlertMessage from "../../app/Alert";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  setUserCreateEmail,
  setUserCreateFirstName,
  setUserCreateLastName,
  setUserCreatePassword,
  setUserCreatePhone,
  setUserCreateUserName,
} from "../../core/user/userSlice";
import { userCreate } from "../../core/user/usecase/UserCreate";

export default function CreateUserModal({
  open,
  close,
}: BasicModalDialogProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [status, setStatusBase] = React.useState({
    key: 0,
    message: "",
    severity: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const { userCreateProps } = useSelector((state: RootState) => state.user);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserCreateUserName(event.target.value));
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserCreatePassword(event.target.value));
  };

  const handleChangePasswordAgain = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setUserCreatePassword(event.target.value));
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserCreateEmail(event.target.value));
  };

  const handleChangeFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setUserCreateFirstName(event.target.value));
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserCreateLastName(event.target.value));
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserCreatePhone(event.target.value));
  };

  const handleSubmit = () => {
    const data = {
      userName: userCreateProps.userName,
      password: userCreateProps.password,
      email: userCreateProps.email,
      firstName: userCreateProps.firstName,
      lastName: userCreateProps.lastName,
      phone: userCreateProps.phone,
      role: "admin",
    } as any;

    dispatch(userCreate(data));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
          textAlign:"center"
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Yeni Kullanıcı Ekle"}
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center" // Center horizontally
            justifyContent="center" // Center vertically
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
              "& .MuiFormControl-root": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
              {/*<InputLabel id="demo-simple-select-label">
                Kullanıcı Adı
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                size="small"
                required
                onChange={handleChangeUserName}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />*/}

            </FormControl>
            <TextField
              id="outlined-required"
              label="Kullanıcı Adı"
              required
              onChange={handleChangeUserName}
            />
            <TextField
              id="outlined-required"
              label="Adı"
              required
              onChange={handleChangeFirstName}
            />
            <TextField
              id="outlined-required"
              label="Soyadı"
              required
              onChange={handleChangeLastName}
            />
            <Box>
              <TextField
                id="outlined-required"
                label="Telefon Numarası"
                required
                onChange={handleChangePhone}
              />
            </Box>
            <TextField
              id="outlined-required"
              label="E-Posta"
              required
              onChange={handleChangeEmail}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">@</InputAdornment>
                ),
              }}
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">Şifre</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                required
                onChange={handleChangePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Şifre Tekrar
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                required
                onChange={handleChangePasswordAgain}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color={"error"} onClick={() => close()}>
            Kapat
          </Button>
          <Button
            variant="outlined"
            color={"primary"}
            onClick={() => handleSubmit()}
          >
            Kaydet
          </Button>
        </DialogActions>
        {status.message != "" ? <AlertMessage {...status} /> : null}
      </Dialog>
    </React.Fragment>
  );
}
