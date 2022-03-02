import React, { useState } from 'react'
import { Box, InputLabel, MenuItem, FormControl, FormControlLabel, Radio, RadioGroup, Select, Button, Typography } from '@mui/material'
import { TYPE, BATHROOM } from '../constants'

export default function Filter({ applyFilters }) {
  const [filters, setFilters] = useState({
    cleaningType: '',
    bathNumber: '',
    windowWashing: ''
  })

  const { cleaningType, bathNumber, windowWashing } = filters

  const handleChange = (prop) => (event) => {
    setFilters({ ...filters, [prop]: event.target.value })
  }

  const handleClickApply = () => {
    applyFilters({ cleaningType, bathNumber, windowWashing })
  }

  const handleClickReset = () => {
    setFilters({
      cleaningType: '',
      bathNumber: '',
      windowWashing: ''
    })
    applyFilters({})
  }

  return (
    <Box sx={{}}>
      <Typography variant="h4" sx={{ m: 1, textAlign: 'center', color: '#E63946' }}>
        Filter
      </Typography>

      <FormControl
        sx={{
          m: 1,
          '& label.Mui-focused': {
            color: '#1D3557'
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#1D3557'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#1D3557'
            },
            '&:hover fieldset': {
              borderColor: '#1D3557'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1D3557'
            }
          }
        }}
        fullWidth
      >
        <InputLabel>Cleaning type</InputLabel>
        <Select value={cleaningType} label="Cleaning type" onChange={handleChange('cleaningType')}>
          {TYPE.map((type, index) => (
            <MenuItem key={index} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        sx={{
          m: 1,
          '& label.Mui-focused': {
            color: '#1D3557'
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#1D3557'
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#1D3557'
            },
            '&:hover fieldset': {
              borderColor: '#1D3557'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1D3557'
            }
          }
        }}
        fullWidth
      >
        <InputLabel>Number of bathrooms</InputLabel>
        <Select value={bathNumber} label="Number of bathrooms" onChange={handleChange('bathNumber')}>
          {BATHROOM.map((number, index) => (
            <MenuItem key={index} value={number}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <Typography>Windows washing</Typography>
        <RadioGroup value={windowWashing}>
          <FormControlLabel
            onChange={handleChange('windowWashing')}
            value="With"
            control={
              <Radio
                sx={{
                  color: '#1D3557',
                  '&.Mui-checked': {
                    color: '#1D3557'
                  }
                }}
              />
            }
            label="With"
          />
          <FormControlLabel
            onChange={handleChange('windowWashing')}
            value="Without"
            control={
              <Radio
                sx={{
                  color: '#1D3557',
                  '&.Mui-checked': {
                    color: '#1D3557'
                  }
                }}
              />
            }
            label="Without"
          />
        </RadioGroup>
      </FormControl>

      <Button
        onClick={handleClickApply}
        variant="contained"
        sx={{
          m: 1,
          backgroundColor: '#E63946',
          color: '#F1FAEE',
          '&:hover': {
            backgroundColor: '#BF1825',
            borderColor: '#E63946',
            boxShadow: 'none'
          }
        }}
        fullWidth
      >
        Apply
      </Button>

      <Button
        onClick={handleClickReset}
        variant="contained"
        sx={{
          m: 1,
          backgroundColor: '#1D3557',
          color: '#F1FAEE',
          '&:hover': {
            backgroundColor: '#14253E',
            borderColor: '#1D3557',
            boxShadow: 'none'
          }
        }}
        fullWidth
      >
        Reset
      </Button>
    </Box>
  )
}
