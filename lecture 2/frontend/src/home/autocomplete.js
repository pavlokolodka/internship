import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { heroes } from './heroes'
import {requestHero} from './request'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTableContainer-root": {
      with: "500%"
    }
  }
}));

function Home() {
  const [hero, setHero] = useState([])

  const handleOnSearch = (string, results) => {
  }

  const handleOnHover = (result) => {
  }

  const handleOnSelect = async (item) => {
    try {
      const hero = await requestHero(item.name);
      setHero(hero);
    } catch (error) {
     throw error;
    }   
  }

  const handleOnFocus = () => {
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }
 // table 
 function createData(name, attribute) {
  return { name, attribute };
 }
  const rows = [
    createData('Name', hero.name),
    createData('Height', hero.height),
    createData('Mass', hero.mass),
    createData('Hair color', hero.hair_colo),
    createData('Skin color', hero.skin_color),
    createData('Eye color', hero.eye_color),
    createData('Birth year', hero.birth_yea),
    createData('Gender', hero.gender),
    createData('Homeworld', hero.homeworld),
    createData('Created', hero.created),
    createData('Edited', hero.edited),
    createData('Url', hero.url),
  ];
  
  const vehicles = []
  // aggregate
  if (hero.vehicles && hero.vehicles.length !== 0) {
    for (let i = 0; i < hero.vehicles.length; i++) {
      for (const [key, value] of Object.entries(hero.vehicles[i])) {
        vehicles.push(createData(key, value))
      }
    }
  }
  
  return (
        <div style={{ width: 400, "margin-bottom": 300}}>
          <ReactSearchAutocomplete
            items={heroes}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          /> <br/>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Wanted Hero:</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.attribute}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> <br/>

    <TableContainer width = "500%" component={Paper}>
      <Table  sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell>Vehicles:</TableCell>
            <TableCell align="right">Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.map((row) => (
            <TableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.attribute}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          
        </div>
       
  )
}


export default Home
