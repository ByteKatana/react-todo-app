import { Box, Typography } from '@mui/material'
import React, { FC, ReactElement } from 'react'
import { ITaskDescription } from './interfaces/ITaskDescription'
import PropTypes from 'prop-types'

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const { description = 'Lorem ipsum sit amet' } = props
  return (
    <Box>
      <Typography> {description} </Typography>
    </Box>
  )
}

TaskDescription.propTypes = {
  description: PropTypes.string,
}

export default TaskDescription
