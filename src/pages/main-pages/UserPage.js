import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
// @mui
import {
  Box,
  Button,
  Card,
  Container,
  MenuItem,
  Popover,
  Stack,
  TableContainer,
  TablePagination,
  Typography
} from "@mui/material";
// components
import Iconify from "../../components/iconify";
import Scrollbar from "../../components/scrollbar";
// sections
// mock
/*import USERLIST from "../../_mock/user";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { localeTableText } from "../../app/tableLocale";
import { userColumns } from "../../core/user/entity/User";*/
import {useDispatch, useSelector} from "react-redux";
import { userList } from "../../core/user/usecase/UserList";
import CreateUserModal from "../modals/CreateUserModal";
import DataGrid from "../../components/data-grid/DataGrid";


export default function UserPage() {
  const [open, setOpen] = useState(null);

    const [openModal, setOpenModal] = useState(false);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { users, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userList());
  }, [users <= 0]);

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  const handleFilterModel = (filterModel) => {
    console.log(filterModel.items.map((item) => item));
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  return (
    <>
      <Helmet>
        <title> Kullanıcı | Tommy Life </title>
      </Helmet>

     <Box>
       <Stack
         direction="row"
         alignItems="center"
         justifyContent="space-between"
         mb={5}
       >
         <Typography variant="h4" gutterBottom>
           Kullanıcı
         </Typography>
         <Button
           variant="contained"
           startIcon={<Iconify icon="eva:plus-fill" />}
           onClick={() => setOpenModal(true)}
         >
           Yeni Kullanıcı
         </Button>
         <CreateUserModal open={openModal} close={handleCloseModal}/>
       </Stack>
     </Box>
      <DataGrid/>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
