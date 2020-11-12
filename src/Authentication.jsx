import { useState, useMemo, useEffect } from 'react'

export const Authentication = ({
  provider: Provider,
  children: renderChildren
}) => {
  const manager = useMemo(() => new Provider({}), [Provider])
  const [isAuthenticated, setIsAuthenticated] = useState(
    manager.isAuthenticated
  )

  console.info('isAuthenticated =', isAuthenticated)

  useEffect(() => {
    manager.login().then(() => setIsAuthenticated(manager.isAuthenticated))
  }, [manager])

  return renderChildren(manager)
}
