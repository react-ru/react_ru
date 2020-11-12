import { useState, useCallback } from 'react'

export const useFocusState = () => {
  const [focus, setFocus] = useState(false)

  const handleMouseEnter = useCallback(() => setFocus(true), [])

  const handleMouseLeave = useCallback(() => setFocus(false), [])

  return [focus, handleMouseEnter, handleMouseLeave]
}
