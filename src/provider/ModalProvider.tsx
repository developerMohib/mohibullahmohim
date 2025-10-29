// contexts/modal-context.tsx
'use client'

import React, { createContext, useContext, useState } from 'react'

interface ModalContextType {
  isBookFormOpen: boolean
  openBookForm: () => void
  closeBookForm: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isBookFormOpen, setIsBookFormOpen] = useState(false)

  const openBookForm = () => setIsBookFormOpen(true)
  const closeBookForm = () => setIsBookFormOpen(false)

  return (
    <ModalContext.Provider value={{ isBookFormOpen, openBookForm, closeBookForm }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}