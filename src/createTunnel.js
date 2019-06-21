import React from 'react'

import TunnelBase from './Tunnel'
import TunnelPlaceholderBase from './TunnelPlaceholder'

let i = 0
const uniqueId = prefix => prefix + '-' + i++

const withProps = props => Component => {
  const WrappedComponent = otherProps => (
    <Component {...props} {...otherProps} />
  )

  return WrappedComponent
}

const createTunnel = () => {
  const id = uniqueId('createTunnel')
  const withId = withProps({ id })

  const Tunnel = withId(TunnelBase)
  const TunnelPlaceholder = withId(TunnelPlaceholderBase)

  return {
    Tunnel,
    TunnelPlaceholder,
  }
}

export default createTunnel
