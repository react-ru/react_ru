import { useState, useMemo } from 'react'

export const useStyle = (staticStyle, dynamicStyle = {}, deps = []) => {
  // eslint-disable-next-line
  let [finalStyle] = useState(staticStyle) // eslint-disable-line

  // eslint-disable-next-line
  finalStyle = useMemo(() => Object.assign(finalStyle, dynamicStyle), deps) // eslint-disable-line

  return finalStyle
}
