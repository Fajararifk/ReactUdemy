import React from 'react'

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString('id-ID', {month: 'long'})
    const year = props.date.toLocaleString('id-ID', {year: 'numeric'})
    const day = props.date.toLocaleString('id-ID', {day: 'numeric'})
  return (
    <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>
  )
}