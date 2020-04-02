import React, { createContext, useContext, useReducer } from 'react'

export const initialContext = {
  workplanId: null,
  areaId: null,
  lineId: null,
  objectiveId: null,
  actionId: null,
  activityId: null
}

export const SelectionsContext = createContext()

export const SelectionsProvider = ({ reducer, initialSelections, children }) => (
  <SelectionsContext.Provider value={useReducer(reducer, initialSelections)}>
    {children}
  </SelectionsContext.Provider>
)

export const useSelectedValues = () => useContext(SelectionsContext)

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeSelection':
      console.log('ACTION:', action)
      return {
        ...state,
        ...action.newSelections
      }
    default:
      console.log('No action specified to operate on Selections context')
      break
  }
}
