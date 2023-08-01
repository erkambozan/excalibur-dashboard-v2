import React, { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
import { Box } from "@mui/material";

interface AlertMassageProps {
  key: number;
  message: string;
  severity: string;
}

export const severityMapping: Record<string, any> = {
  success: "success",
  info: "info",
  warning: "warning",
  error: "error",
};

export default function AlertMessage({
  key,
  message,
  severity = "warning",
}: AlertMassageProps) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const alertSeverity = severityMapping[severity] || "warning";

  return (
    <Box>
      <Snackbar
        key={key}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity={alertSeverity} onClose={handleClose}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
