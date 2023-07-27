import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ChooseHierarchy from "./ChooseHierarchy";
import BasicModalDialogProps from "../app/BasicModalDialogProps";
import { useDispatch, useSelector } from "react-redux";
import { findHierarchyByPath, hierarchyReducer, hierarchySlice } from "../core/hierarchy/hierarchySlice";
import { AppDispatch, RootState } from "../index";
import { hierarchyList } from "../core/hierarchy/usecase/HierarchyList";

export default function NewEmployeeModalDialog({
  open,
  close,
}: BasicModalDialogProps) {
  const [openHierarchy, setOpenHierarchy] = React.useState(false);
  const [selectedHierarchyPath, setSelectedHierarchyPath] = React.useState("");
  const [selectedHierarchyName, setSelectedHierarchyName] = React.useState("");
  const dispatch = useDispatch<AppDispatch>();
  const selectedHierarchy = useSelector((state:RootState) => state.hierarchy.selectedHierarchy);

  useEffect(() => {
    if (selectedHierarchyPath !== "") {
      // dispatch(findHierarchyByPath(selectedHierarchyPath));
      // setSelectedHierarchyName(selectedHierarchy.getProps.name)
    }
  }, [selectedHierarchyPath]);
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
            width: "100%",
            height: "100%",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Yeni Çalışan Ekle"}</DialogTitle>
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
            <Box>
              <TextField
                id="outlined-multiline-flexible"
                label="Çalışan Kullanıcı ID"
                maxRows={4}
              />
            </Box>
            <Box display="flex" alignItems="center">
              <TextField
                id="outlined-multiline-flexible"
                label="Çalışacağı bölüm"
                maxRows={4}
                value={selectedHierarchyName}
              />
              <Button
                variant="text"
                color={"info"}
                onClick={handleOpenHierarchy}
              >
                Bölüm Seç
              </Button>
              <ChooseHierarchy
                open={openHierarchy}
                close={handleCloseHierarchy}
                selectedNode={selectedHierarchyPath}
                setSelectedNode={setSelectedHierarchyPath}
              />
            </Box>
            <Box>
              <FormControl fullWidth style={{ margin: "8px" }}>
                <InputLabel id="demo-simple-select-label">
                  Çalışan Türü
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Çalışan Türü"
                >
                  <MenuItem value={10}>Yönetici</MenuItem>
                  <MenuItem value={20}>İşçi</MenuItem>
                  <MenuItem value={30}>Şoför</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color={"error"} onClick={() => close()}>
            Kapat
          </Button>
          <Button variant="outlined" color={"primary"} onClick={() => close()}>
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
