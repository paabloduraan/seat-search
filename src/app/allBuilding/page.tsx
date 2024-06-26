"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PieChart } from '@mui/x-charts/PieChart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { constants } from 'crypto';

function createData(
  floor: string,
  current_cap: number,
  max_cap: number,
) {
  return { floor, current_cap, max_cap };
}

function createNameData(
  name: string,
  floor: string,
) {
  return { name, floor};
}

const CUMCAPACITY = 360;
const CCCAPACITY = 140;
const SECCAPACITY = 200;

const selectedButton = localStorage.getItem('selectedButton');
const selectedBuilding = localStorage.getItem('selectedBuilding');
const selectedFloor = localStorage.getItem('selectedFloor');
const nameValue = localStorage.getItem('name');
const displayCheckbox = localStorage.getItem('displayCheckbox');

var cumPeople = [
  createNameData('Pablo Duran', 'First Floor'),
  createNameData('Emory Haines', 'First Floor'),
  createNameData('Georgia Power', 'Second Floor'),
  createNameData('Karen Edwards', 'Second Floor'),
  createNameData('Sunil Kumar', 'Third Floor'),
];


var ccPeople = [
  createNameData('Isabelle Bain', 'Hotung'),
  createNameData('Pablo Duran', 'Sink'),
  createNameData('Emory Haines', 'Commons'),
  createNameData('Georgia Power', 'Commons'),
  createNameData('Karen Edwards', 'Third Floor'),
  createNameData('Sunil Kumar', 'Second Floor Hotung'),
];

var secPeople = [
  createNameData('Isabelle Bain', 'Kindlevan'),
  createNameData('Pablo Duran', 'Kindlevan'),
  createNameData('Emory Haines', 'First Floor'),
  createNameData('Georgia Power', 'Second Floor'),
  createNameData('Karen Edwards', 'Third Floor'),
  createNameData('Sunil Kumar', 'Third Floor'),
];

var People574 = [
  createNameData('Isabelle Bain', 'Fourth Floor'),
  createNameData('Pablo Duran', 'Fourth Floor'),
  createNameData('Emory Haines', 'First Floor'),
  createNameData('Georgia Power', 'Second Floor'),
  createNameData('Karen Edwards', 'Third Floor'),
  createNameData('Sunil Kumar', 'Secon Floor'),
];


var cumInfo = [
  createData('First Floor', 50, 60),
  createData('Second Floor', 60, 60),
  createData('Third Floor', 30, 60),
  createData('Fourth Floor', 47, 60),
  createData('Fifth Floor', 51, 60),
  createData('Sixth Floor', 20, 60),
];

var ccInfo = [
  createData('Commons', 32, 50),
  createData('Hotung', 7, 30),
  createData('Second Floor Hotung', 10, 15),
  createData('Sink', 20, 20),
  createData('Third Floor', 15, 25),
];

var secInfo = [
  createData('Kindelvan', 30, 50),
  createData('First Floor', 19, 50),
  createData('Second Floor', 11, 50),
  createData('Third Floor', 0, 50),
];

var Info574 = [
  createData('First Floor', 5, 50),
  createData('Second Floor', 2, 50),
  createData('Third Floor', 8, 50),
  createData('Fourth Floor', 5, 50),

];

const building_info = {"cum": cumInfo, "cc": ccInfo, "sec": secInfo, "574": Info574};
const people_info = {"cum": cumPeople, "cc": ccPeople, "sec": secPeople, "574": People574};
const max_cap_info = {"cum": 360, "cc": 140, "sec": 200, "574": 200};


const selected_building = selectedButton;

if(displayCheckbox) {
  if (selectedBuilding == "Joyce Cummings Center") {
    cumPeople = cumPeople.push(createNameData(nameValue, selectedFloor));
}

  if (selectedBuilding == "Campus Center") {
    ccPeople = ccPeople.push(createNameData(nameValue, selectedFloor));
  }

  if (selectedBuilding == "Science and Engineering Complex") {
    secPeople = secPeople.push(createNameData(nameValue, selectedFloor));
  }

  if (selectedBuilding == "574 Boston Ave") {
    People574 = People574.push(createNameData(nameValue, selectedFloor));
  }
}

building_info[selected_building] = building_info[selected_building].map(item => item.floor === selectedFloor ? { ...item, current_cap: item.current_cap + 1 } : item);


export default function BasicTable() {
  return (
    <div className="flex min-h-screen flex-column items-left justify-between p-24">
    {/* //----------chart----------------- */}
    <div style={{ position: 'relative', width: '20%', height: '20%' }}>
      <PieChart
          series={[
          {
            data: [
              { id: "available_cap", value: max_cap_info[selected_building]-building_info[selected_building].reduce((sum, { current_cap }) => sum + current_cap, 0),label: 'available capacity', color: "#BDBDBD"},
              { id: "current_cap", value: building_info[selected_building].reduce((sum, { current_cap }) => sum + current_cap, 0), label: 'current capacity', color: "#1976D2"},

            ],
          },
        ]}
        width={400}
        height={300}
        slotProps={{
          legend: {
            direction: 'column',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding:-60,
          },
        }}
      />
    </div>


    {/* //----------Floors Info Table------------------ */}
    <TableContainer 
      component={Paper} 
      sx={{ 
        width: '300px', 
        marginRight: '50px', 
        marginTop: '45px',
        position: 'absolute', 
        top: 0, 
        right: 0 
      }}
    >
      <Table sx={{ minWidth: 300 }} aria-label="capcity_table">
        <TableHead>
          <TableRow>
            <TableCell><b>Floor</b></TableCell>
            <TableCell align="center"><b>Current Capacity</b></TableCell>
            <TableCell align="center"><b>Max Capacity</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {building_info[selected_building].map((row) => (
            <TableRow
              key={row.floor}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.floor}
              </TableCell>
              <TableCell align="center">{row.current_cap}</TableCell>
              <TableCell align="center">{row.max_cap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     {/* -------------------people table-------------- */}
     <TableContainer 
      component={Paper} 
      sx={{ 
        width: '300px', 
        marginRight: '50px', 
        marginTop: '45px',
        position: 'absolute', 
        top: 0, 
        right: 450, 
      }}
    >
      <Table sx={{ minWidth: 300 }} aria-label="people_table">
        <TableHead>
          <TableRow>
            <TableCell><b>People</b></TableCell>
            <TableCell align="center"><b>Floor</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people_info[selected_building].map((row) => (
            <TableRow
              key={row.floor}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.floor}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* -------------------home button-------------- */}
    <Stack direction="row" spacing={10} style={{position: 'fixed', top: 0, left: 0}}>
      <Button variant="outlined" href="/"  elevation={12} style={{ padding: '15px', margin: '15px', zIndex: 999, color: '#1976D2', backgroundColor: 'white' }}>
              HOME
      </Button>
      <Button variant="outlined" href="/stats"  elevation={12} style={{padding: '15px', margin: '15px', zIndex: 999, color: '#1976D2', backgroundColor: 'white' }}>
              BACK
      </Button>
    </Stack>
            
    </div>
  );
}
