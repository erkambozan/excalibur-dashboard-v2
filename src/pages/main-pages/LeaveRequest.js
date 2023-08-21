import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider, InputLabel, Stack,
  TextField,
  Unstable_Grid2 as Grid
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import * as React from "react";
import { trTR } from "@mui/material/locale";
import { localeTableText } from "../../app/tableLocale";
import dayjs from "dayjs";


const states = [
  {
    value: "success",
    label: "Onaylandı"
  },
  {
    value: "rejection",
    label: "Red Edildi"
  },
];
// eslint-disable-next-line react-hooks/rules-of-hooks

export const LeaveRequest = () => {

    const theme = useTheme();
    const themeWithLocale = React.useMemo(
      () => createTheme(theme, trTR),
      [trTR, theme]
    );

    const [values, setValues] = useState({
      leaveStatus: "annual-leave",

    });

    const handleChange = useCallback(
      (event) => {
        setValues((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      },
      []
    );

    const [value, setValue] = React.useState([null, null]);
    return (
      <>
        <CardContent sx={{ pt: 1.5}}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={12}
              >
                <TextField
                  fullWidth
                  label="İzin Onay"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  style={{width: "300px"}}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />

      </>

    );
  }
;
