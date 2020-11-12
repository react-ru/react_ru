import React, { useMemo, useReducer, useCallback } from 'react'

import sourceSvg from '../icons/source.svg'
import browserSvg from '../icons/browser.svg'

const initial = {
  idGen: 0,
  assets: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-code':
      return {
        ...state,
        idGen: state.idGen + 1,
        assets: [
          ...state.assets,
          { id: state.idGen + 1, type: 'code', value: '' }
        ]
      }
    case 'add-image':
      return {
        ...state,
        idGen: state.idGen + 1,
        assets: [
          ...state.assets,
          { id: state.idGen + 1, type: 'image', value: '' }
        ]
      }
    case 'toggle-type':
      return {
        ...state,
        assets: state.assets.map((asset, i) => {
          if (i === action.index) {
            return {
              ...asset,
              type: action.newType
            }
          }
          return asset
        })
      }
    default:
      return state
  }
}

const GenericAsset = ({ first, children }) => {
  return (
    <div
      style={{
        border: '1px solid #d4d4d4',
        borderRadius: '6px',
        marginBottom: '0.2rem',
        minHeight: '2rem'
      }}
    >
      {children}
    </div>
  )
}

const CodeAsset = props => {
  return <GenericAsset {...props}>Code</GenericAsset>
}

const ImageAsset = props => {
  return <GenericAsset {...props}>Image</GenericAsset>
}

const AddButton = ({ icon, iconAlt, first, onClick, children: text }) => (
  <button
    onClick={onClick}
    style={{
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      cursor: 'pointer',
      marginRight: first ? '5px' : '0px',
      border: '1px solid #d4d4d4',
      backgroundColor: '#e4e4e4',
      padding: '0.3rem 0.6rem',
      borderRadius: '6px'
    }}
  >
    <img width={18} height={18} src={icon} alt={iconAlt} />
    &nbsp;
    <span>{text}</span>
  </button>
)

const AddAsset = ({ onAddCode, onAddImage }) => (
  <>
    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Добавить</div>
    <div style={{ display: 'flex', flexFlow: 'row' }}>
      <AddButton first icon={sourceSvg} iconAlt='Код' onClick={onAddCode}>
        Код
      </AddButton>
      <AddButton icon={browserSvg} iconAlt='Изображение' onClick={onAddImage}>
        Изображение
      </AddButton>
    </div>
  </>
)

export const useAssets = () => {
  const [state, dispatch] = useReducer(reducer, initial)

  const handleAddCode = useCallback(() => dispatch({ type: 'add-code' }), [
    dispatch
  ])

  const handleAddImage = useCallback(() => dispatch({ type: 'add-image' }), [
    dispatch
  ])

  const renderAsset = useCallback(
    (asset, i) => {
      const props = {
        ...asset,
        first: i === 0,
        key: asset.id,
        onChangeType (newType) {
          dispatch({
            type: 'toggle-type',
            index: i,
            value: newType
          })
        }
      }
      switch (asset.type) {
        case 'code':
          return <CodeAsset {...props} />
        case 'image':
          return <ImageAsset {...props} />
        default:
          return `Unknown asset type: "${asset.type}"`
      }
    },
    [dispatch]
  )

  const addAsset = useMemo(
    () => (
      <AddAsset
        onAddCode={handleAddCode}
        onAddImage={handleAddImage}
        key='add-asset'
      />
    ),
    [handleAddCode, handleAddImage]
  )

  const assets = useMemo(() => state.assets.map(renderAsset).concat(addAsset), [
    state,
    addAsset,
    renderAsset
  ])

  return assets
}

export const QuestionBuilder = ({ open, onClose }) => {
  const assets = useAssets()

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
        <div style={{ padding: '1rem' }}>{assets}</div>
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
            onClick={onClose}
            style={{
              border: 'none',
              backgroundColor: '#37ade2',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#ffffff',
              boxShadow: '0 5px 10px #1bb4f9',
              padding: '0.3rem 1rem',
              marginLeft: '1rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Задать
          </button>
        </div>
      </dialog>
    </div>
  )
}
