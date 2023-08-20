import { useCallback, useMemo, useState } from "react";
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
    value: "annual-leave",
    label: "Yıllık İzin"
  },
  {
    value: "military-leave",
    label: "Askerlik İzni"
  },
  {
    value: "maternity-leave",
    label: "Doğum İzni"
  },
  {
    value: "paternity-leave",
    label: "Babalık İzni"
  }
];
// eslint-disable-next-line react-hooks/rules-of-hooks

export const Leaves = () => {


  const theme = useTheme();
    const themeWithLocale = React.useMemo(
      () => createTheme(theme, trTR),
      [trTR, theme]
    );


    const [values, setValues] = useState({
      state: "los-angeles",
      day: "",
      date: []
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

        <CardContent sx={{ pt: 1.5 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="İzin Nedeni"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
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
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Gün"
                  name="day"
                  onChange={handleChange}
                  type={"number"}
                  required

                />
              </Grid>
              <Grid xs={12}
                    md={12}>
                <Box
                  component="form"
                  display={"flex"}
                  flexDirection={"column"}
                  noValidate
                  autoComplete="off"
                >
                  <InputLabel id="demo-simple-select-label" sx={{ p: 0.5 }}>
                    İzin Tarih Aralığı
                  </InputLabel>
                  <ThemeProvider theme={themeWithLocale}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="tr">
                      <DemoContainer components={["DateRangePicker"]}>
                        <DateRangePicker
                          startText="Check-in"
                          endText="Check-out"
                          name="date"
                          value={value}

                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  </ThemeProvider>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>

        <Divider />

      </>

    );
  }
;
