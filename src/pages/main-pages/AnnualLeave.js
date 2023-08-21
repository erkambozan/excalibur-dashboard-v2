import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
// @mui
import {
  Box,
  Button,
  Card,
  Container, Divider,
  MenuItem,
  Popover,
  Stack,
  TableContainer,
  TablePagination,
  Typography,
  Tab, Tabs
} from "@mui/material";
// components
import Iconify from "../../components/iconify";
import Scrollbar from "../../components/scrollbar";
// sections
// mock
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDispatch, useSelector } from "react-redux";
import { employeeList } from "../../core/employee/usecase/EmployeeList";
import { employeeColumns } from "../../core/employee/entity/Employee";
import { localeTableText } from "../../app/tableLocale";
import CreateEmployeeModal from "../modals/CreateEmployeeModal";
import RequestAnnualLeave from "../RequestAnnualLeave";
import DataGrid from "../../components/data-grid/DataGrid";
import LeaveGrid from "../../components/leave-grid/LeaveGrid";


export default function AnnualLeave() {
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
  const [value, setValue] = useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const role = "admin";
  return (
    <>
      <Helmet>
        <title> Yıllık İzin Taleplerim | Tommy Life </title>
      </Helmet>

      <>
        <Stack
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Yıllık İzin Taleplerim
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleOpen}
          >
            Yeni İzin Talebi
          </Button>
          <RequestAnnualLeave  open={openModal} close={handleClose} />
        </Stack>

        {role === "admin" ?
          (
            <Box>
              <Tabs sx={{ mb: 5 }} value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                <Tab value="one" label="İzin Taleplerim" wrapped />
                <Tab value="two" label="Çalışan İzinleri" />

              </Tabs>
              {value === "one" &&
                <LeaveGrid />
              }
              {value === "two" &&
                <DataGrid />
              }
              <Divider />
            </Box>
          ) : (<Box>
            <LeaveGrid />
          </Box>)

        }
      </>
    </>
  );
}
