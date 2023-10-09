import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react'

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
})
export const TaskStatusChangedContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [updated, setUpdated] = useState(false)

  const toggleHandler = () => {
    updated ? setUpdated(false) : setUpdated(true)
  }

  return (
    <TaskStatusChangedContext.Provider
      value={{
        updated: updated,
        toggle: toggleHandler,
      }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  )
}
const TaskStatusChangedContext = () => {
  return <div>TaskStatusChangedContext</div>
}

export default TaskStatusChangedContext
