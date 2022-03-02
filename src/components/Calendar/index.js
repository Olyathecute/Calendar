import React from 'react'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './Calendar.css'

const localizer = momentLocalizer(moment)

function filterBy(arr, { cleaningType, bathNumber, windowWashing }) {
  return arr.filter((item) => {
    if (
      (cleaningType && item.cleaningType !== cleaningType) ||
      (bathNumber && item.bathNumber !== bathNumber) ||
      (windowWashing && item.windowWashing !== windowWashing)
    )
      return false
    else return true
  })
}

export default function Calendar({ filters, events }) {
  return (
    <>
      <BigCalendar
        localizer={localizer}
        events={filterBy(events, filters)}
        views={['month', 'day']}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '95vh' }}
      />
    </>
  )
}
