import React, { useState, useMemo, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useFocusState } from '../hooks/useFocusState'
import { QuestionBuilder } from './QuestionBuilder'

export const AskQuestion = () => {
  const [focus, handleMouseEnter, handleMouseLeave] = useFocusState()
  const [showModal, toggleModal] = useState(false /* false */)

  const handleClick = useCallback(() => toggleModal(true), [])

  const handleCloseModal = useCallback(() => toggleModal(false), [])

  const modal = useMemo(
    () => <QuestionBuilder open={showModal} onClose={handleCloseModal} />,
    [showModal, handleCloseModal]
  )
  const portal = useMemo(() => ReactDOM.createPortal(modal, document.body), [
    modal
  ])

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'initial'
    return () => {
      document.body.style.overflow = 'initial'
    }
  }, [showModal])

  return (
    <>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.3rem',
          cursor: 'pointer',
          padding: '0.5rem 1.5rem',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: focus ? '#98deff' : '#3aafe3',
          color: '#ffffff',
          fontWeight: 'bold',
          boxShadow: `0 10px 30px ${focus ? '#77d3ffad' : '#1fb8ffad'}`,
          transition:
            'background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out'
        }}
      >
        Задать вопрос
      </button>
      {portal}
    </>
  )
}
