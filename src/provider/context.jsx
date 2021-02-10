import React, { createContext, useContext, useReducer } from 'react'
import { getST, setST } from '../dataprovider/Storage'

export const initialContext = getST('initialContext') || {
  workplanId: null,
  areaId: null,
  lineId: null,
  objectiveId: null,
  actionId: null,
  activityId: null
}

export const SelectionsContext = createContext()

export const SelectionsProvider = ({ reducer, initialSelections, children }) => {
  let values = useReducer(reducer, initialSelections)
  setST('initialContext', values[0])

  return <SelectionsContext.Provider value={values}>{children}</SelectionsContext.Provider>
}

export const useSelectedValues = () => useContext(SelectionsContext)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeSelection':
      return {
        ...state,
        ...action.newSelections
      }
    default:
      console.log('No action specified to operate on Selections context')
      break
  }
}
