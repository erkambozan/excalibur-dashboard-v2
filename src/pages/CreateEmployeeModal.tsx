import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Autocomplete,
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
import { AppDispatch, RootState } from "../index";
import { userList } from "../core/user/usecase/UserList";
import { selectUser } from "../core/user/userSlice";
import { employeeCreate } from "../core/employee/usecase/EmployeeCreate";
import AlertMessage, { severityMapping } from "../app/Alert";

export default function CreateEmployeeModal({
  open,
  close,
}: BasicModalDialogProps) {
  const [openHierarchy, setOpenHierarchy] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const selectedHierarchy = useSelector(
    (state: RootState) => state.hierarchy.selectedHierarchy
  );
  const { users, selectedUser } = useSelector((state: RootState) => state.user);
  const [status, setStatusBase] = React.useState({
    key: 0,
    message: "",
    severity: "",
  });
  useEffect(() => {
    dispatch(userList());
  }, [users.length <= 0]);

  const handleOpenHierarchy = () => {
    setOpenHierarchy(true);
  };

  const handleCloseHierarchy = () => {
    setOpenHierarchy(false);
  };

  const handleSelectedUser = (event: any, value: any) => {
    dispatch(selectUser(value));
  };

  const handleSubmit = () => {
    const data = {
      hierarchyId: selectedHierarchy.id,
      hierarchyPath: selectedHierarchy.path,
      workType: "Yönetici",
      userId: selectedUser.id,
    } as any;

    dispatch(employeeCreate(data))
      .unwrap()
      .then(() => {
        setStatusBase({
          key: Math.random(),
          message: "Çalışan Oluşturuldu",
          severity: severityMapping.success,
        });
      })
      .catch(() => {
        setStatusBase({
          key: Math.random(),
          message: "Çalışan Oluşturulamadı",
          severity: severityMapping.error,
        });
      });
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
              <Box>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={users}
                  sx={{ width: 300 }}
                  getOptionLabel={(option) => option.firstName}
                  onChange={(event, value) => handleSelectedUser(event, value)}
                  filterOptions={(options, { inputValue }) => {
                    return options.filter((option) =>
                      option.firstName
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                  }}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Box
                        sx={{
                          flexGrow: 1,
                        }}
                      >
                        {option.firstName}
                        <br />
                        <span>{option.email}</span>
                      </Box>
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField
                      ref={params.InputProps.ref}
                      inputProps={params.inputProps}
                      placeholder="Kullanıcı Tanımla"
                    />
                  )}
                />
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <TextField
                id="outlined-multiline-flexible"
                label="Çalışacağı bölüm"
                maxRows={4}
                InputLabelProps={{ shrink: true }}
                value={selectedHierarchy.name}
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
