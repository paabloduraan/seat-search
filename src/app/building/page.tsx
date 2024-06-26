"use client"

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function valuetext(value: number) {
    return `${value}°C`;
  }

const marks = [
    {
      value: 0,
      label: '0 hours',
    },
    {
      value: 7,
      label: '7 hours',
    },
];



export default function Hello() {
    const [selectedBuilding, setSelectedBuilding] = React.useState(null);
    const [selectedFloor, setSelectedFloor] = React.useState(null);
    const [floorOptions, setFloorOptions] = React.useState([]);
    const [nameValue, setName] = React.useState(false);
    const [displayCheckbox, setDisplayCheckbox] = React.useState(true);

    const sendData = () => {
          // Extract the label values from selectedBuilding and selectedFloor
      const buildingLabel = selectedBuilding ? selectedBuilding.label : null;
      const floorLabel = selectedFloor ? selectedFloor.label : null;

      // Log the extracted values along with the nameValue

      localStorage.setItem('selectedBuilding', buildingLabel);
      localStorage.setItem('selectedFloor', floorLabel);
      localStorage.setItem('name', nameValue);
      localStorage.setItem('displayCheckbox', displayCheckbox);

      console.log({ 
        selectedBuilding: buildingLabel, 
        selectedFloor: floorLabel,
        nameValue,
        displayCheckbox: displayCheckbox, });
    };

    const handleDisplayCheckboxChange = (event) => {
      setDisplayCheckbox(event.target.checked);
    };

    const handleBuildingChange = (event, newValue) => {
        setSelectedBuilding(newValue);
    
        // You can set the floorOptions based on the selected building
        // For simplicity, I'm providing a static list as an example.
        if (newValue) {
            if (newValue.label === 'Joyce Cummings Center') {
              setFloorOptions(cumFloors); // show cumFloors options
            } else if (newValue.label === 'Campus Center') {
              setFloorOptions(ccFloors); // show ccFloors options
            } else if (newValue.label == 'Science and Engineering Complex'){
              setFloorOptions(secFloors); // for other buildings, no floor options
            }
            else if (newValue.label == '574 Boston Ave'){
                setFloorOptions(fivesevenfourFloors); // for other buildings, no floor options
            }
            else {
                setFloorOptions([]);
              }
          } else {
            setFloorOptions([]);
          }
        };

        const handleFloorChange = (event, newValue) => {
            setSelectedFloor(newValue);
          };

          const handleNameChange = (event) => {
            setName(event.target.value);
          };


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={buildings}
      sx={{ width: 300 }}
      onChange={handleBuildingChange}
      renderInput={(params) => <TextField {...params} label="Building" />}
    />
     <Button variant="outlined" href="/"  elevation={12} style={{ position: 'fixed', top: 0, left: 0, padding: '15px', margin: '10px', zIndex: 999, color: '#1976D2', backgroundColor: 'white' }}>
              HOME
        </Button>
    {selectedBuilding && (
        <Autocomplete
          disablePortal
          id="combo-box-floors"
          options={floorOptions}
          onChange={handleFloorChange}
          sx={{ width: 300, marginTop: 2 }}  // Adjust styling as needed
          renderInput={(params) => <TextField {...params} label="Floor" />}
        />
      )}

    {selectedFloor && (
            <>
            <TextField
              required
              id="outlined-required-1"
              label="Name"
              sx={{ width: 300, marginTop: 8 }}
              onChange={handleNameChange}
            />
            <TextField
              required
              id="outlined-required-2"
              label="Student ID"
              sx={{ width: 300, marginTop: 2 }}
            />
            <FormControlLabel control={<Checkbox defaultChecked onChange={handleDisplayCheckboxChange} />} label="Do you wish to display your name?" /> 
            <Box sx={{ width: 300, marginTop: 8 }}>
                <Typography id="input-slider" gutterBottom>
                    How many hours do you wish to stay?
                </Typography>
                <Slider
                    aria-label="Hours"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={0.5}
                    marks={marks}
                    min={0.5}
                    max={7}
                />
            </Box>
            <Button variant="contained" onClick={sendData} href="/">Confirm CheckIn</Button>
          </>
    )}
</main>
  );
}

const buildings = [
  { label: 'Joyce Cummings Center'},
  { label: 'Campus Center'},
  { label: '574 Boston Ave'},
  { label: 'Science and Engineering Complex'},
];

const cumFloors = [
    { label: 'First Floor'},
    { label: 'Second Floor'},
    { label: 'Third Floor'},
    { label: 'Fourth Floor'},
    { label: 'Fifth Floor'},
    { label: 'Sixth Floor'},
  ];

const ccFloors = [
    { label: 'Commons'},
    { label: 'Hotung'},
    { label: 'Sink'},
    { label: 'Second Floor Hotung'},
    { label: 'Third Floor'},
  ];

const secFloors = [
    { label: 'Kindlevan'},
    { label: 'First Floor'},
    { label: 'Second Floor'},
    { label: 'Third Floor'},
  ];

const fivesevenfourFloors = [
    { label: 'First Floor'},
    { label: 'Second Floor'},
    { label: 'Third Floor'},
    { label: 'Fourth Floor'},
];