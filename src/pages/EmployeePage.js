import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
// @mui
import {
  Button,
  Card,
  Container,
  MenuItem,
  Popover,
  Stack,
  TableContainer,
  TablePagination,
  Typography,
} from "@mui/material";
// components
import Iconify from "../components/iconify";
import Scrollbar from "../components/scrollbar";
// sections
// mock
import USERLIST from "../_mock/user";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDispatch, useSelector } from "react-redux";
import { employeeList } from "../core/employee/usecase/EmployeeList";
import { employeeColumns } from "../core/employee/entity/Employee";
import { localeTableText } from "../app/tableLocale";
import CreateEmployeeModal from "./CreateEmployeeModal";

export default function EmployeePage() {
  const [open, setOpen] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [employeeState, setEmployeeState] = useState([]);

  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector((state) => state.employee);

  useEffect(() => {
    dispatch(employeeList());
    setEmployeeState(employees);
  }, [employees.length <= 0]);

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

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Helmet>
        <title> Çalışan | Tommy Life </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Çalışanlar
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleOpen}
          >
            Yeni Çalışan
          </Button>
          <CreateEmployeeModal open={openModal} close={handleClose} />
        </Stack>

        <Card>
          <Scrollbar>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={5}
            >
              <TableContainer sx={{ minWidth: 800 }}>
                <DataGridPro
                  rows={employeeState}
                  columns={employeeColumns}
                  localeText={{
                    ...localeTableText,
                  }}
                  loading={loading}
                  unstable_headerFilters
                  onFilterModelChange={handleFilterModel}
                  sx={{ padding: "10px" }}
                />
              </TableContainer>
            </Stack>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

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
