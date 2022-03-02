import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import Filters from '../components/Filters'
import { Grid, Box } from '@mui/material'
import { EVENTS } from '../constants'

export default function Main() {
  const [filters, setFilters] = useState({})

  return (
    <Box sx={{ m: 2 }}>
      <Grid container>
        <Grid item xs={9}>
          <Calendar filters={filters} events={EVENTS} />
        </Grid>
        <Grid item xs={3}>
          <Filters applyFilters={setFilters} />
        </Grid>
      </Grid>
    </Box>
  )
}
