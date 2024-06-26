
"use client"
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function StackBars() {
  const maxCap = [360, 140, 200, 200]
  const data1 = [{ name: 'JCC', Taken: 80, Available: 20 }];

  const data2 = [{ name: 'CC', Taken: 60, Available: 40 }];

  const data3 = [{ name: 'SEC', Taken: 30, Available: 70 }];

  const data4 = [{ name: '574', Taken: 10, Available: 90 }];

  const barSize = 100;

  const [selectedButton, setSelectedButton] = useState('');

  const handleClick = (buttonName) => {
    localStorage.setItem('selectedButton', buttonName);
  };

  const formatPercentTick = (value) => `${value}%`;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ background: '#fff', border: '1px solid #ccc', padding: '10px' }}>
          <p>{`${label}`}</p>
          <p>{`Taken: ${payload[0].value}%`}</p>
          <p>{`Available: ${payload[1].value}%`}</p>
        </div>
      );
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 100px', padding: '10px', width: '100%'}}>
        <Button variant="outlined" href="/"  elevation={12} style={{ position: 'fixed', top: 0, left: 0, padding: '15px', margin: '10px', zIndex: 999, color: '#1976D2', backgroundColor: 'white' }}>
              HOME
        </Button>
        <Stack direction="column" spacing={5} style={{ marginTop: '5px' }}>
          <Stack direction="row" spacing={10}>
            <Button variant="outlined" href="/allBuilding"  onClick={() => handleClick('cum')} elevation={12} style={{ width: '100%', height: '50px', color: '#1976D2', backgroundColor: 'white' }}>
              Joyce Cummings Center
            </Button>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={data1} layout="vertical">
                <XAxis type="number" axisLine={false} tick={null} />
                <YAxis type="category" dataKey="name" axisLine={false} tick={null} tickFormatter={formatPercentTick}/>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Taken" stackId="stack" fill="#1976D2" barSize={barSize}/>
                <Bar dataKey="Available" stackId="stack" fill="#BDBDBD"  barSize={barSize}/>
              </BarChart>
            </ResponsiveContainer>
          </Stack>
          <Stack direction="row" spacing={10}>
            <Button variant="outlined" href="/allBuilding"  onClick={() => handleClick('cc')} elevation={12} style={{ width: '100%', height: '50px', color: '#1976D2', backgroundColor: 'white' }}>
              Campus Center
            </Button>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={data2} layout="vertical">
                <XAxis type="number" axisLine={false} tick={null} />
                <YAxis type="category" dataKey="name" axisLine={false} tick={null} tickFormatter={formatPercentTick}/>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Taken" stackId="stack" fill="#1976D2"  barSize={barSize}/>
                <Bar dataKey="Available" stackId="stack" fill="#BDBDBD"  barSize={barSize}/>
              </BarChart>
            </ResponsiveContainer>
          </Stack>
          <Stack direction="row" spacing={10}>
            <Button variant="outlined" href="/allBuilding" onClick={() => handleClick('sec')} elevation={12} style={{ width: '100%', height: '50px', color: '#1976D2', backgroundColor: 'white' }}>
              Science Engineering Complex
            </Button>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={data3} layout="vertical">
                <XAxis type="number" axisLine={false} tick={null} />
                <YAxis type="category" dataKey="name" axisLine={false} tick={null} tickFormatter={formatPercentTick}/>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Taken" stackId="stack" fill="#1976D2"  barSize={barSize}/>
                <Bar dataKey="Available" stackId="stack" fill="#BDBDBD"  barSize={barSize}/>
              </BarChart>
            </ResponsiveContainer>
          </Stack>
          <Stack direction="row" spacing={10}>
            <Button variant="outlined" href="/allBuilding"  onClick={() => handleClick('574')} elevation={12} style={{ width: '100%', height: '50px', color: '#1976D2', backgroundColor: 'white' }}>
              574 Boston Ave
            </Button>
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={data4} layout="vertical">
                <XAxis type="number" axisLine={false} tick={null} />
                <YAxis type="category" dataKey="name" axisLine={false} tick={null} tickFormatter={formatPercentTick}/>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="Taken" stackId="stack" fill="#1976D2"  barSize={barSize}/>
                <Bar dataKey="Available" stackId="stack" fill="#BDBDBD"  barSize={barSize}/>
              </BarChart>
            </ResponsiveContainer>
          </Stack>
          
          {/* Repeat the pattern for other buttons and charts */}
        </Stack>
      </div>
    </div>
  );
}
