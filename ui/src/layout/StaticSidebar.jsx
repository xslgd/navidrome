import React from 'react'
import { useSelector } from 'react-redux'

const StaticSidebar = ({ children }) => {
  const open = useSelector((state) => state.admin.ui.sidebarOpen)

  return (
    <div
      style={{
        width: open ? 240 : 55,
        flexShrink: 0,
        margin: '0.8rem',
        marginRight: 0,
        padding: '16px 0',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 28,
        transition: 'width 0.2s ease',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  )
}

export default StaticSidebar
