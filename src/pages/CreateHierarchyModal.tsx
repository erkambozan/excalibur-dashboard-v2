import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField } from "@mui/material";
import BasicModalDialogProps from "../app/BasicModalDialogProps";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../index";
import AlertMessage from "../app/Alert";
import ChooseHierarchy from "./ChooseHierarchy";
import { setName, setType } from "../core/hierarchy/hierarchySlice";
import { hierarchyCreate } from "../core/hierarchy/usecase/HierarchyCreate";

export default function CreateHierarchyModal({
  open,
  close,
}: BasicModalDialogProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [openHierarchy, setOpenHierarchy] = React.useState(false);
  const [status, setStatusBase] = React.useState({
    key: 0,
    message: "",
    severity: "",
  });
  const { selectedHierarchy, name, type } = useSelector(
    (state: RootState) => state.hierarchy
  );
  const handleOpenHierarchy = () => {
    setOpenHierarchy(true);
  };

  const handleCloseHierarchy = () => {
    setOpenHierarchy(false);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setType(event.target.value));
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      type: type,
      parentPath: selectedHierarchy.path,
      parentId: selectedHierarchy.id,
    };

    dispatch(hierarchyCreate(data))
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
            width: "100%",
            height: "100%",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Yeni Çalışan Ekle"}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            alignItems="center" // Center horizontally
            justifyContent="center" // Center vertically
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
              "& .MuiFormControl-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Button variant="text" color={"info"} onClick={handleOpenHierarchy}>
              İlişkili Birim Seç
            </Button>
            {selectedHierarchy != null ? (
              <TextField
                id="outlined-required"
                value={selectedHierarchy.name}
                disabled={true}
                required
              />
            ) : null}
            <ChooseHierarchy
              open={openHierarchy}
              close={handleCloseHierarchy}
            />
            <TextField
              id="outlined-required"
              label="Bölüm/Bölge/Şirket Adı"
              onChange={handleChangeName}
              required
            />
            <TextField
              id="outlined-required"
              label="Tipi"
              onChange={handleChangeType}
              required
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
