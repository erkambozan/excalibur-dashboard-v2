import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField } from "@mui/material";
import ChooseHierarchy from "./ChooseHierarchy";
import BasicModalDialogProps from "../app/BasicModalDialogProps";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewEmployeeModalDialog({
  open,
  close,
}: BasicModalDialogProps) {
  const [openHierarchy, setOpenHierarchy] = React.useState(false);

  const handleOpenHierarchy = () => {
    setOpenHierarchy(true);
  };

  const handleCloseHierarchy = () => {
    setOpenHierarchy(false);
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
            width: "40%",
            height: "40%",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Yeni Çalışan Ekle"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Çalışan Kullanıcı ID"
              maxRows={4}
            />
            <Box display="flex" alignItems="center">
              <TextField
                id="outlined-multiline-flexible"
                label="Çalışacağı bölüm"
                maxRows={4}
              />
              <Button
                variant="text"
                color={"info"}
                onClick={handleOpenHierarchy}
              >
                Bölüm Seç
              </Button>
              <ChooseHierarchy open={openHierarchy} close={handleCloseHierarchy}/>
            </Box>
            <TextField
              id="outlined-multiline-flexible"
              label="Çalışan Tipi"
              maxRows={4}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color={"error"} onClick={() => close()}>
            Kapat
          </Button>
          <Button
            variant="outlined"
            color={"primary"}
            onClick={() => close()}
          >
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
