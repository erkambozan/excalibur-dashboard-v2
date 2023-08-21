import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const rows = [
  {
    id: 1,
    name: 'Ahmet Kara',
    department: 'Yazılım',
    date: '12.10.2019',
    day: '14',
    leave:'Yıllık İzin',
    status: 'Onaylandı',
    isCompleted: true
  },
  {
    id: 2,
    name: 'Ahmet Kara',
    department: 'Yazılım',
    date: '06.08.2021',
    day: '8',
    leave:'Yıllık İzin',
    status: 'Onaylandı',
    isCompleted: true
  },
  {
    id: 3,
    name: 'Ahmet Kara',
    department: 'Yazılım',
    date: '07.13.2022',
    day: '10',
    leave:'Yıllık İzin',
    status: 'Onaylandı',
    isCompleted: true
  }
]
function createData(name, department, date, day, status) {
  return { name, department, date, day, status };
}



export default function LeaveGrid() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell >ID</TableCell>
            <TableCell align="left">Adı Soyadı</TableCell>
            <TableCell align="left">Departman</TableCell>
            <TableCell align="left">Tarih</TableCell>
            <TableCell align="left">Gün</TableCell>
            <TableCell align="left">İzin Nedeni</TableCell>
            <TableCell align="left">Durum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.department}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.day}</TableCell>
              <TableCell align="left">{row.leave}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
