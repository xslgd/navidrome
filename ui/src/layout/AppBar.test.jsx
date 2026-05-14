import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, beforeEach, vi } from 'vitest'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { activityReducer } from '../reducers'
import AppBar from './AppBar'
import config from '../config'

let store

vi.mock('ra-ui-materialui', () => ({
  useToggleSidebar: () => [false, () => {}],
}))

vi.mock('react-admin', () => ({
  MenuItemLink: ({ primaryText }) => <div>{primaryText}</div>,
  useTranslate: () => (x) => x,
  usePermissions: () => ({ permissions: 'admin' }),
  getResources: () => [],
}))

vi.mock('./PersonalMenu', () => ({
  default: () => <div />,
}))
vi.mock('../dialogs/Dialogs', () => ({
  Dialogs: () => <div />,
}))
vi.mock('../dialogs', () => ({
  AboutDialog: () => <div />,
}))

describe('<AppBar />', () => {
  beforeEach(() => {
    store = createStore(combineReducers({ activity: activityReducer }), {
      activity: { nowPlayingCount: 0 },
    })
  })

  it('renders the brand text', () => {
    render(
      <Provider store={store}>
        <AppBar />
      </Provider>,
    )
    expect(screen.getByText('Navidrome')).toBeInTheDocument()
  })
})
