"use client"

import React, { createContext, useContext, useState } from "react"

type InitialStateType = {
    currentStage: number | null;
    isRotating: boolean
}

type GlobalStateProps = {
  state: InitialStateType
  setCurrentStage: (_newStage: number | null) => void
  setIsRotating: (_newStatus: boolean) => void
}

const initialState: InitialStateType = {
  currentStage: 0,
  isRotating: false
}

export const GlobalContext = createContext<GlobalStateProps>({
  state: initialState,
  setCurrentStage: (_newStage: number | null) => {},
  setIsRotating: (_newStatus: boolean) => {}
})

export const GlobalProvider = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const [globalState, setGlobalState] = useState<InitialStateType>(initialState)

  const setCurrentStage = (stage: number | null) => {
    setGlobalState({
      ...globalState,
      currentStage: stage
    })
  }

  const setIsRotating = (status: boolean) => {
    setGlobalState({
      ...globalState,
      isRotating: status
    })
  }


  return (
    <GlobalContext.Provider
      value={{
        state: globalState,
        setCurrentStage,
        setIsRotating,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
