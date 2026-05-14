import { useEffect, useState } from 'react'
import {
  Collapse,
  makeStyles,
  Typography,
  useMediaQuery,
  withWidth,
  Box,
  Button,
  Chip as MuiChip,
} from '@material-ui/core'
import {
  ArrayField,
  ChipField,
  Link,
  SingleFieldList,
  useRecordContext,
  useTranslate,
} from 'react-admin'
import Lightbox from 'react-image-lightbox'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import config from '../config'
import 'react-image-lightbox/style.css'
import subsonic from '../subsonic'
import {
  ArtistLinkField,
  CollapsibleComment,
  DurationField,
  formatRange,
  LoveButton,
  RatingField,
  SizeField,
  useAlbumsPerPage,
  useImageLoadingState,
} from '../common'
import { formatFullDate, intersperse, formatBytes } from '../utils'
import AlbumExternalLinks from './AlbumExternalLinks'
import { SafeHTML } from '../common/SafeHTML'

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    backLink: {
      marginBottom: 20,
    },
    albumHeader: {
      display: 'flex',
      gap: 32,
      marginBottom: 32,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 24,
      },
    },
    coverParent: {
      width: 240,
      height: 240,
      flexShrink: 0,
      borderRadius: 12,
      background: 'linear-gradient(135deg, #1e3a5f, #2d1b69)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.35), 0 0 40px rgba(59,130,246,0.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: 12,
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
        pointerEvents: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        width: 180,
        height: 180,
      },
    },
    cover: {
      objectFit: 'cover',
      cursor: 'pointer',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      borderRadius: 12,
      transition: 'opacity 0.3s ease-in-out',
    },
    coverLoading: {
      opacity: 0.5,
    },
    albumInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 4,
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
      },
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      marginBottom: 8,
      width: 'fit-content',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 999,
      background: 'rgba(255,255,255,0.04)',
      color: '#94a3b8',
      fontSize: '0.8rem',
      letterSpacing: '0.04em',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    recordName: {
      margin: 0,
      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    recordArtist: {
      fontSize: '1.4rem',
      fontWeight: 600,
      color: '#60a5fa',
      margin: '2px 0',
    },
    recordMeta: {
      fontSize: '0.85rem',
      color: '#94a3b8',
    },
    albumActions: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 20,
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
    infoRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 24,
      marginTop: 24,
    },
    chip: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 14px',
      height: 30,
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 999,
      background: 'transparent',
      color: '#94a3b8',
      fontSize: '0.8rem',
      lineHeight: 1,
    },
    loveButton: {
      top: theme.spacing(-0.2),
      left: theme.spacing(0.5),
    },
    notes: {
      display: 'inline-block',
      marginTop: '1em',
      float: 'left',
      wordBreak: 'break-word',
      cursor: 'pointer',
    },
    genreList: {
      marginTop: theme.spacing(0.5),
    },
    externalLinks: {
      marginTop: theme.spacing(1.5),
    },
  }),
  {
    name: 'NDAlbumDetails',
  },
)

const useGetHandleGenreClick = (width) => {
  const [perPage] = useAlbumsPerPage(width)

  return (id) => {
    return `/album?filter={"genre_id":["${id}"]}&order=ASC&sort=name&perPage=${perPage}`
  }
}

const GenreChipField = withWidth()(({ width, ...rest }) => {
  const record = useRecordContext(rest)
  const genreLink = useGetHandleGenreClick(width)

  return (
    <Link to={genreLink(record.id)} onClick={(e) => e.stopPropagation()}>
        <ChipField
          source="name"
          onClick={() => {}}
        />
    </Link>
  )
})

const GenreList = () => {
  const classes = useStyles()
  return (
    <ArrayField className={classes.genreList} source={'genres'}>
      <SingleFieldList linkType={false}>
        <GenreChipField />
      </SingleFieldList>
    </ArrayField>
  )
}

const AlbumDetails = (props) => {
  const record = useRecordContext(props)
  const isXsmall = useMediaQuery((theme) => theme.breakpoints.down('xs'))
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('lg'))
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const classes = useStyles()
  const translate = useTranslate()
  const [expanded, setExpanded] = useState(false)
  const [albumInfo, setAlbumInfo] = useState()
  const {
    imageLoading,
    imageError,
    isLightboxOpen,
    handleImageLoad,
    handleImageError,
    handleOpenLightbox,
    handleCloseLightbox,
  } = useImageLoadingState(record.id)

  let notes = albumInfo?.notes || record.notes

  if (notes) {
    notes += '..'
  }

  useEffect(() => {
    subsonic
      .getAlbumInfo(record.id)
      .then((resp) => resp.json['subsonic-response'])
      .then((data) => {
        if (data.status === 'ok') {
          setAlbumInfo(data.albumInfo)
        }
      })
      .catch((e) => {
        console.error('error on album page', e)
      })
  }, [record])

  const imageUrl = subsonic.getCoverArtUrl(record, config.uiCoverArtSize)
  const fullImageUrl = subsonic.getCoverArtUrl(record)

  const yearRange = formatRange(record, 'year')
  const date = record.date ? formatFullDate(record.date) : yearRange

  const metaParts = []
  if (record.genre) metaParts.push(record.genre)
  if (record.songCount) metaParts.push(`${record.songCount} ${translate('resources.song.name', { smart_count: record.songCount })}`)
  if (record.duration) metaParts.push(<DurationField key="duration" source="duration" />)

  return (
    <div className={classes.root}>
      <div className={classes.backLink}>
        <Link
          to="/album"
          style={{
            color: '#60a5fa',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 500,
          }}
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Albums
        </Link>
      </div>

      <div className={classes.albumHeader}>
        <div className={classes.coverParent}>
          {imageError || !imageUrl ? (
            <i className="fa-solid fa-music" style={{fontSize:'4rem', color:'rgba(255,255,255,0.2)'}}></i>
          ) : (
            <img
              key={record.id}
              src={imageUrl}
              width="400"
              height="400"
              className={`${classes.cover} ${imageLoading ? classes.coverLoading : ''}`}
              onClick={handleOpenLightbox}
              onLoad={handleImageLoad}
              onError={handleImageError}
              title={record.name}
              style={{
                cursor: imageError ? 'default' : 'pointer',
              }}
            />
          )}
        </div>

        <div className={classes.albumInfo}>
          <div className={classes.badge}>
            <i className="fa-regular fa-calendar" style={{fontSize:'0.75rem'}}></i>
            {date && <span>{date}</span>}
            <span>·</span>
            <span>{translate('resources.album.name', { smart_count: 1 })}</span>
          </div>

          <Typography className={classes.recordName} component="h1">
            {record.name}
            <LoveButton
              className={classes.loveButton}
              record={record}
              resource={'album'}
              size={isDesktop ? 'default' : 'small'}
              aria-label="love"
              color="primary"
            />
          </Typography>

          <div className={classes.recordArtist}>
            <ArtistLinkField record={record} />
          </div>

          <div className={classes.recordMeta}>
            {metaParts.length > 0 ? intersperse(metaParts, ' · ') : ''}
          </div>

        </div>
      </div>

      {!isMobile && (
        <div className={classes.infoRow}>
          {record.playCount !== undefined && (
            <span className={classes.chip}>
              <i className="fa-regular fa-circle-play"></i>
              {record.playCount} {record.playCount === 1 ? 'play' : 'plays'}
            </span>
          )}
          {config.enableStarRating && record.rating !== undefined && record.rating > 0 && (
            <span className={classes.chip}>
              <i className="fa-regular fa-star"></i>
              {record.rating.toFixed(1)}
            </span>
          )}
          {record.created && (
            <span className={classes.chip}>
              <i className="fa-regular fa-clock"></i>
              Added {formatFullDate(record.created)}
            </span>
          )}
          {record.quality && (
            <span className={classes.chip}>
              <i className="fa-solid fa-waveform"></i>
              {record.quality}
            </span>
          )}
        </div>
      )}

      {isDesktop && notes && (
        <Collapse
          collapsedHeight={'2.75em'}
          in={expanded}
          timeout={'auto'}
          className={classes.notes}
        >
          <Typography
            variant={'body1'}
            onClick={() => setExpanded(!expanded)}
          >
            <span>
              <SafeHTML>{notes}</SafeHTML>
            </span>
          </Typography>
        </Collapse>
      )}
      {isDesktop && record['comment'] && (
        <CollapsibleComment record={record} />
      )}

      {!isDesktop && record['comment'] && (
        <CollapsibleComment record={record} />
      )}
      {!isDesktop && notes && (
        <div className={classes.notes}>
          <Collapse collapsedHeight={'1.5em'} in={expanded} timeout={'auto'}>
            <Typography
              variant={'body1'}
              onClick={() => setExpanded(!expanded)}
            >
              <span>
                <SafeHTML>{notes}</SafeHTML>
              </span>
            </Typography>
          </Collapse>
        </div>
      )}

      {isLightboxOpen && !imageError && (
        <Lightbox
          imagePadding={50}
          animationDuration={200}
          imageTitle={record.name}
          mainSrc={fullImageUrl}
          onCloseRequest={handleCloseLightbox}
        />
      )}
    </div>
  )
}

export default AlbumDetails
