import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, InputLabel } from "@mui/material";
 import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { trTR } from "@mui/material/locale";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { LeaveRequest } from "./LeaveRequest";

export default function LeaveModal({ open, close, }) {
  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, trTR),
    [trTR, theme]
  );
  const handleSubmit = () => {
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Yeni İzin Talebi"}</DialogTitle>
        <DialogContent>
          <LeaveRequest />
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
