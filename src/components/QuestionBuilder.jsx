/* global CodeMirror */

import React, {
  useState,
  useCallback /*, useRef, useLayoutEffect */
} from 'react'

// const Code = () => {
//   const ref = useRef()

//   useLayoutEffect(() => {
//     const editor = CodeMirror.fromTextArea(ref.current, {
//       lineNumbers: true,
//       mode: 'javascript'
//     })
//     return () => editor.remove()
//   }, [])

//   return <textarea ref={ref}></textarea>
// }

const Comment = ({ agreed, onAgreed }) => {
  const handleChange = useCallback(
    event => {
      console.log('event.target.checked', event.target.checked)
      onAgreed(event.target.checked)
    },
    [onAgreed]
  )

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ fontWeight: 400, marginBottom: '0.5rem' }}>Ваш вопрос</div>
      <textarea
        rows={7}
        style={{
          display: 'block',
          boxSizing: 'border-box',
          width: '100%',
          border: '1px solid #9c9c9c',
          borderRadius: '7px',
          padding: '0.3rem',
          fontSize: '1rem'
        }}
      ></textarea>
      <div style={{ marginTop: '0.3rem', fontSize: '1rem' }}>
        <label>
          <input type='checkbox' checked={agreed} onChange={handleChange} />{' '}
          <span>Согласен с правилами</span>
        </label>
      </div>
    </div>
  )
}

export const QuestionBuilder = ({ open, onClose }) => {
  const [agreed, setAgreed] = useState(false)

  const handleAgreed = useCallback(newAgreed => {
    setAgreed(newAgreed)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        display: open ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000090',
        backdropFilter: 'blur(10px)'
      }}
    >
      <dialog
        open={open}
        style={{
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 5px 15px #000000ad',
          padding: '0px'
        }}
      >
        <div
          style={{
            fontWeight: '600',
            fontSize: '1.5rem',
            padding: '1rem'
          }}
        >
          Задать вопрос в группу
        </div>
        {/* <Code /> */}
        <Comment agreed={agreed} onAgreed={handleAgreed} />
        <div
          style={{
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <button
            onClick={onClose}
            style={{
              border: 'none',
              backgroundColor: 'black',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#ffffff',
              padding: '0.3rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Отмена
          </button>
          <button
            disabled={!agreed}
            style={{
              border: 'none',
              backgroundColor: agreed ? '#37ade2' : '#c5c5c5',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#ffffff',
              boxShadow: agreed ? '0 5px 10px #1bb4f9' : '0 0 0px #c5c5c5',
              padding: '0.6rem 1.8rem',
              marginLeft: '1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              transition:
                'background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out'
            }}
            onClick={onClose}
          >
            Задать
          </button>
        </div>
      </dialog>
    </div>
  )
}
