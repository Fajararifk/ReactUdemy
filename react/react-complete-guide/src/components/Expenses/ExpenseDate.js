import React from 'react'
import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString('id-ID', {month: 'long'})
    const year = props.date.toLocaleString('id-ID', {year: 'numeric'})
    const day = props.date.toLocaleString('id-ID', {day: 'numeric'})
  return (
    <div className='expense-date'>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>
  )
}
