import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, InputLabel } from "@mui/material";
import BasicModalDialogProps from "../app/BasicModalDialogProps";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { trTR } from "@mui/material/locale";
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

export default function RequestAnnualLeave({
  open,
  close,
}: BasicModalDialogProps) {
  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, trTR),
    [trTR, theme]
  );
  const handleSubmit = () => {};

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Yeni İzin Talebi"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            display={"flex"}
            flexDirection={"column"}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <InputLabel id="demo-simple-select-label">
              İzin Tarih Aralığı
            </InputLabel>
            <ThemeProvider theme={themeWithLocale}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  localeText={{ start: "Başlangıç", end: "Bitiş" }}
                />
              </DemoContainer>
            </LocalizationProvider>
            </ThemeProvider>
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
        {/*{status.message != "" ? <AlertMessage {...status} /> : null}*/}
      </Dialog>
    </React.Fragment>
  );
}
