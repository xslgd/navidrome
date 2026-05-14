import React from 'react'
import { useDispatch } from 'react-redux'
import { useRecordContext, useTranslate, useDataProvider } from 'react-admin'
import { makeStyles } from '@material-ui/core'
import { playTracks, shuffleTracks } from '../actions'
import { useToggleLove } from '../common'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
  },
  playAll: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 24px',
    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    color: '#fff',
    border: 'none',
    borderRadius: 999,
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    boxShadow: '0 10px 24px rgba(37,99,235,0.18)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    textTransform: 'none',
    minHeight: 40,
    '&:hover': {
      transform: 'translateY(-1px)',
      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    },
  },
  iconBtn: {
    width: 40,
    height: 40,
    minWidth: 40,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '50%',
    background: 'transparent',
    color: '#94a3b8',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    padding: 0,
    '&:hover': {
      color: '#f8fafc',
      borderColor: 'rgba(255,255,255,0.18)',
      background: 'rgba(255,255,255,0.04)',
    },
  },
  iconBtnActive: {
    color: '#60a5fa',
    borderColor: 'rgba(96,165,250,0.3)',
  },
})

const AlbumActions = ({ record: propRecord, ...rest }) => {
  const dispatch = useDispatch()
  const translate = useTranslate()
  const classes = useStyles()
  const record = useRecordContext(rest) || propRecord || {}
  const [toggleLove, loadingLove] = useToggleLove('album', record)
  const dataProvider = useDataProvider()

  const handlePlay = React.useCallback(async () => {
    if (!record.id) return
    const { data } = await dataProvider.getList('song', {
      filter: { album_id: record.id },
      sort: { field: 'trackNumber', order: 'ASC' },
      pagination: { page: 1, perPage: 1000 },
    })
    const ids = Object.keys(data)
    dispatch(playTracks(data, ids))
  }, [dispatch, dataProvider, record.id])

  const handleShuffle = React.useCallback(async () => {
    if (!record.id) return
    const { data } = await dataProvider.getList('song', {
      filter: { album_id: record.id },
      sort: { field: 'trackNumber', order: 'ASC' },
      pagination: { page: 1, perPage: 1000 },
    })
    const ids = Object.keys(data)
    dispatch(shuffleTracks(data, ids))
  }, [dispatch, dataProvider, record.id])

  const handleToggleLove = React.useCallback((e) => {
    e.preventDefault()
    toggleLove()
    e.stopPropagation()
  }, [toggleLove])

  if (!record.id) return null

  return (
    <div className={classes.root}>
      <button className={classes.playAll} onClick={handlePlay}>
        <i className="fa-solid fa-play" style={{ fontSize: 16 }}></i>
        {translate('resources.album.actions.playAll')}
      </button>
      <button
        className={`${classes.iconBtn} ${record.starred ? classes.iconBtnActive : ''}`}
        onClick={handleToggleLove}
        disabled={loadingLove}
        title={translate(record.starred ? 'ra.action.unlove' : 'ra.action.love')}
      >
        {record.starred ? (
          <i className="fa-solid fa-heart" style={{ fontSize: 16 }}></i>
        ) : (
          <i className="fa-regular fa-heart" style={{ fontSize: 16 }}></i>
        )}
      </button>
      <button
        className={classes.iconBtn}
        onClick={handleShuffle}
        title={translate('resources.album.actions.shuffle')}
      >
        <i className="fa-solid fa-shuffle" style={{ fontSize: 16 }}></i>
      </button>
      <button
        className={classes.iconBtn}
        title={translate('ra.action.more')}
      >
        <i className="fa-solid fa-ellipsis" style={{ fontSize: 16 }}></i>
      </button>
    </div>
  )
}

export default AlbumActions
