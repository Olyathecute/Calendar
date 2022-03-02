import React, { useState } from 'react'
import { Box, InputLabel, MenuItem, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Select, Button, Typography } from '@mui/material'
import { TYPE, BATHROOM } from '../constants'

export default function AddItem() {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const [value, setValue] = useState('female')

  const handleChangeOn = (event) => {
    setValue(event.target.value)
  }

  return (
    <Box>
      <Typography variant="h6">Add a note</Typography>

      <FormControl fullWidth>
        <InputLabel>Cleaning type</InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Type" onChange={handleChange}>
          {TYPE.map((type, index) => (
            <MenuItem key={index} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Number of bathrooms</InputLabel>
        <Select labelId="demo-simple-select-label" value={age} label="Number" onChange={handleChange}>
          {BATHROOM.map((number, index) => (
            <MenuItem key={index} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <FormLabel id="demo-controlled-radio-buttons-group">Windows washing</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChangeOn}
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <Button variant="contained">Add</Button>
    </Box>
  )
}
