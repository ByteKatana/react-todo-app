import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React, { FC, ReactElement } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IDateField } from './interfaces/IDateField'
import PropTypes from 'prop-types'
const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </LocalizationProvider>
    </>
  )
}

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
}

export default TaskDateField
