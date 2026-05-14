import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import { render } from '@testing-library/react'
import { RecordContextProvider } from 'react-admin'
import { useMediaQuery } from '@material-ui/core'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import AlbumDetails from './AlbumDetails'

vi.mock('../common', async () => {
  const actual = await import('../common')
  return {
    ...actual,
    LoveButton: () => null,
  }
})

vi.mock('../subsonic', () => ({
  default: {
    getCoverArtUrl: () => '',
    getAlbumInfo: () => Promise.resolve({ json: { 'subsonic-response': { status: 'ok', albumInfo: {} } } }),
  },
}))

const store = createStore(combineReducers({}), {})

vi.mock('@material-ui/core', async () => {
  const actual = await import('@material-ui/core')
  return {
    ...actual,
    useMediaQuery: vi.fn(),
  }
})

vi.mock('../utils', async () => {
  const actual = await import('../utils')
  return {
    ...actual,
    formatFullDate: (date) => {
      if (!date) return ''
      return new Date(date).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      })
    },
  }
})

describe('Details component', () => {
  describe('Desktop view', () => {
    beforeEach(() => {
      vi.mocked(useMediaQuery).mockReturnValue(false)
    })

    test('renders correctly with just year range', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        year: 2020,
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with date', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        date: '2020-05-01',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with originalDate', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        originalDate: '2018-03-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with date and originalDate', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        date: '2020-05-01',
        originalDate: '2018-03-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with releaseDate', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        releaseDate: '2020-06-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with all date fields', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        date: '2020-05-01',
        originalDate: '2018-03-15',
        releaseDate: '2020-06-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })
  })

  describe('Mobile view', () => {
    beforeEach(() => {
      vi.mocked(useMediaQuery).mockReturnValue(true)
    })

    afterEach(() => {
      vi.clearAllMocks()
    })

    test('renders correctly with just year range', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        year: 2020,
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with date', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        date: '2020-05-01',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with originalDate', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        originalDate: '2018-03-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with date and originalDate', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        date: '2020-05-01',
        originalDate: '2018-03-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with releaseDate', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        releaseDate: '2020-06-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with all date fields', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        date: '2020-05-01',
        originalDate: '2018-03-15',
        releaseDate: '2020-06-15',
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with no date fields', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with year range (start and end years)', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        year: 2018,
        yearEnd: 2020,
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })

    test('renders correctly with originalYear range', () => {
      const record = {
        id: '123',
        name: 'Test Album',
        songCount: 12,
        duration: 3600,
        size: 102400,
        originalYear: 2015,
        originalYearEnd: 2016,
      }

      const { container } = render(
        <Provider store={store}>
          <MemoryRouter>
            <RecordContextProvider value={record}>
              <AlbumDetails />
            </RecordContextProvider>
          </MemoryRouter>
        </Provider>,
      )

      expect(container).toMatchSnapshot()
    })
  })
})
