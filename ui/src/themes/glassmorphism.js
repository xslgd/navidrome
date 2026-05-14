import stylesheet from './glassmorphism.css.js'

const c = {
  bg1: '#0f172a',
  bg2: '#111827',
  card: 'rgba(17,24,39,0.7)',
  cardGrad: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
  text: '#f8fafc',
  muted: '#94a3b8',
  border: 'rgba(255,255,255,0.08)',
  borderHover: 'rgba(255,255,255,0.18)',
  shadow: '0 10px 30px rgba(0,0,0,0.35), 0 0 60px rgba(59,130,246,0.08)',
  shadowHover: '0 16px 40px rgba(0,0,0,0.35), 0 0 30px rgba(255,255,255,0.05)',
  blue1: '#3b82f6',
  blue2: '#2563eb',
  accent: '#60a5fa',
  purple: '#a855f7',
  purple2: '#7c3aed',
  green: '#34d399',
  yellow: '#fbbf24',
  red: '#fb7185',
  white: '#fff',
}

const glassCard = {
  background: c.cardGrad,
  border: `1px solid ${c.border}`,
}

const glassContainer = {
  background: c.card,
  backdropFilter: 'blur(18px)',
  border: `1px solid ${c.border}`,
}

const hoverGlass = {
  transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: c.borderHover,
    boxShadow: c.shadowHover,
  },
}

export default {
  themeName: 'Glassmorphism',
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h6: { fontSize: '1rem' },
  },
  palette: {
    primary: { main: c.blue1, light: c.accent, dark: c.blue2 },
    secondary: { main: c.purple },
    background: { default: c.bg1, paper: c.bg2 },
    text: { primary: c.text, secondary: c.muted },
    type: 'dark',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        },
      },
    },
    MuiAppBar: {
      root: {
        background: 'rgba(255,255,255,0.03) !important',
        backdropFilter: 'blur(18px) !important',
        boxShadow: 'none !important',
        borderBottom: `1px solid ${c.border}`,
        zIndex: 1100,
      },
      positionFixed: {
        position: 'fixed',
      },
      colorSecondary: {
        backgroundColor: 'rgba(255,255,255,0.03) !important',
      },
    },
    MuiToolbar: {
      root: {
        height: 64,
        minHeight: 64,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '0 24px',
      },
      dense: {
        height: 64,
        minHeight: 64,
      },
      gutters: {
        color: c.text,
        paddingLeft: 24,
        paddingRight: 24,
      },
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: c.blue1,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 999,
        textTransform: 'none',
        fontWeight: 600,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
        '&:hover': {
          transform: 'translateY(-1px)',
        },
      },
      contained: {
        background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
        color: c.white,
        boxShadow: `0 10px 24px rgba(37, 99, 235, 0.18)`,
        '&:hover': {
          boxShadow: `0 10px 24px rgba(37, 99, 235, 0.18)`,
        },
      },
      outlined: {
        border: `1px solid ${c.border}`,
        color: c.text,
        '&:hover': {
          border: `1px solid ${c.borderHover}`,
          background: 'rgba(255,255,255,0.04)',
        },
      },
      text: {
        color: c.text,
        border: `1px solid ${c.border}`,
        '&:hover': {
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${c.borderHover}`,
        },
      },
      textPrimary: { color: c.text },
      label: {
        paddingRight: '1rem',
        paddingLeft: '0.7rem',
      },
    },
    MuiCard: {
      root: {
        ...glassCard,
        ...hoverGlass,
        borderRadius: 22,
      },
    },
    MuiCardMedia: {
      root: {
        borderRadius: 12,
      },
    },
    MuiCheckbox: {
      root: {
        color: c.muted,
        '&$checked': {
          color: c.accent,
        },
      },
    },
    MuiChip: {
      root: {
        backgroundColor: 'transparent',
        border: `1px solid ${c.border}`,
        color: c.muted,
        borderRadius: 999,
      },
      clickable: {
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: `1px solid ${c.borderHover}`,
        },
      },
      deletable: {
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.04)',
        },
      },
      label: { color: c.text },
      deleteIcon: {
        color: c.muted,
        '&:hover': { color: c.text },
      },
    },
    MuiDialog: {
      paper: {
        ...glassContainer,
        borderRadius: 28,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: c.border,
        margin: '.75rem 0',
      },
    },
    MuiDrawer: {
      root: { background: 'transparent' },
      paper: {
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(18px)',
        borderRight: `1px solid ${c.border}`,
        overflowY: 'auto',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      },
    },
    MuiFab: {
      root: {
        background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
        color: c.white,
        '&:hover': {
          background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
        },
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(15, 23, 42, 0.42)',
        borderRadius: 16,
        '&:hover': { backgroundColor: 'rgba(15, 23, 42, 0.52)' },
        '&$focused': { backgroundColor: 'rgba(15, 23, 42, 0.52)' },
      },
    },
    MuiFormGroup: { root: { color: c.text } },
    MuiFormLabel: {
      root: {
        color: c.muted,
        '&$focused': { color: c.accent },
      },
    },
    MuiIconButton: {
      root: {
        color: c.muted,
        transition: 'color 0.2s ease, transform 0.2s ease',
        '&:hover': {
          color: c.text,
          transform: 'translateY(-1px)',
        },
      },
    },
    MuiInputBase: { root: { color: c.text } },
    MuiInputAdornment: { root: { color: c.muted } },
    MuiLinearProgress: {
      root: {
        backgroundColor: c.border,
        borderRadius: 999,
      },
      bar: {
        borderRadius: 999,
        backgroundColor: c.accent,
      },
    },
    MuiList: { root: { color: c.text } },
    MuiListItem: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.04)',
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: c.muted,
        minWidth: 40,
      },
    },
    MuiListItemText: {
      root: { color: c.text },
      secondary: { color: c.muted },
    },
    MuiMenu: {
      paper: {
        ...glassContainer,
        borderRadius: 22,
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: '0.9rem',
        color: c.text,
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.04)',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 16,
        '& $notchedOutline': { borderColor: c.border },
        '&:hover $notchedOutline': { borderColor: c.borderHover },
        '&$focused $notchedOutline': { borderColor: c.accent },
      },
      input: { color: c.text },
    },
    MuiPaper: {
      root: {
        backgroundImage: 'none !important',
        '&.MuiPopover-paper': glassContainer,
      },
    },
    MuiPopover: { paper: glassContainer },
    MuiRating: {
      iconFilled: { color: c.accent },
      iconHover: { color: c.accent },
    },
    MuiSelect: { icon: { color: c.muted } },
    MuiSlider: {
      root: { color: c.accent },
      track: { backgroundColor: c.accent },
      rail: { backgroundColor: c.border },
      thumb: {
        backgroundColor: c.accent,
        '&:focus,&:hover,&$active': {
          boxShadow: `0 0 0 8px rgba(96, 165, 250, 0.16)`,
        },
      },
      active: {},
    },
    MuiSvgIcon: { root: { color: c.muted } },
    MuiSwitch: {
      switchBase: {
        color: c.muted,
        '&$checked': { color: c.accent },
        '&$checked + $track': { backgroundColor: 'rgba(96, 165, 250, 0.3)' },
      },
      track: {
        backgroundColor: c.border,
        borderRadius: 999,
      },
      checked: {},
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        color: c.muted,
        '&$selected': { color: c.accent },
      },
      textColorPrimary: {},
      selected: {},
    },
    MuiTabs: {
      indicator: { backgroundColor: c.accent },
    },
    MuiTableCell: {
      root: {
        borderBottom: `1px solid ${c.border}`,
        padding: '10px !important',
        color: `${c.text} !important`,
      },
      head: {
        borderBottom: `1px solid ${c.border}`,
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 1.2,
        color: `${c.muted} !important`,
      },
    },
    MuiTableHead: { root: { background: 'transparent' } },
    MuiTableRow: {
      root: {
        transition: 'background-color 0.2s ease',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.02) !important',
        },
      },
    },
    MuiTableSortLabel: {
      root: {
        color: `${c.muted} !important`,
        '&$active': { color: `${c.accent} !important` },
      },
      active: {},
      icon: { color: `${c.accent} !important` },
    },
    MuiTablePagination: { root: { color: c.muted } },
    MuiTooltip: {
      tooltip: {
        ...glassContainer,
        borderRadius: 12,
        fontSize: '0.8rem',
      },
    },
    MuiTypography: {
      root: { color: c.text },
      colorPrimary: { color: c.accent },
    },

    RaBulkActionsToolbar: {
      topToolbar: { gap: '8px' },
    },
    RaDatagrid: {
      root: {
        '& .MuiTableBody-root .MuiTableRow-root': {
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.02) !important',
          },
        },
        '@media (min-width: 960px)': {
          '& .MuiTableBody-root .MuiTableRow-root td:first-child': {
            width: 20,
            minWidth: 20,
            maxWidth: 20,
            padding: '0 0 0 10px !important',
          },
          '& .MuiTableBody-root .MuiTableRow-root td:nth-child(2)': {
            width: 40,
            minWidth: 40,
            maxWidth: 40,
            textAlign: 'right',
            paddingRight: '16px !important',
            color: `${c.muted} !important`,
          },
          '& .MuiTableBody-root .MuiTableRow-root td:nth-child(3)': {
            fontWeight: 400,
          },
          '& .MuiTableBody-root .MuiTableRow-root td:last-child': {
            width: 60,
            minWidth: 60,
            maxWidth: 60,
            textAlign: 'center',
          },
        },
        '& .MuiTableBody-root .MuiTableRow-root.nd-playing td:nth-child(2)': {
          fontSize: 0,
          '&::before': {
            fontFamily: '"Font Awesome 6 Free"',
            fontWeight: 900,
            content: '"\\f001"',
            fontSize: '0.75rem',
            color: c.accent,
          },
        },
        '& .MuiTableBody-root .MuiTableRow-root.nd-playing td:nth-child(3)': {
          fontWeight: 700,
        },
      },
    },
    RaDatagridHeaderCell: {
      header: {
        padding: '0 10px',
        background: 'transparent',
      },
    },
    RaFilter: {
      form: {
        '& .MuiOutlinedInput-input:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 100px ${c.bg1} inset`,
          WebkitTextFillColor: c.text,
        },
      },
    },
    RaFilterButton: {
      root: { marginRight: '1rem' },
    },
    RaLayout: {
      root: {
        backgroundColor: 'transparent !important',
      },
      appFrame: {
        marginTop: 0,
        '@media (min-width:0px)': { marginTop: 0 },
        '@media (max-width:599.95px)': { marginTop: 0 },
      },
      content: {
        backgroundColor: 'transparent !important',
        padding: '32px !important',
        borderRadius: 28,
        flex: 1,
        margin: '0.8rem 0.8rem 0.8rem 0',
        overflow: 'hidden',
        ...glassContainer,
      },
      contentWithSidebar: {
        marginTop: 64,
        gap: '0.75rem',
      },
    },
    RaLink: {
      root: {
        color: c.accent,
        '&:hover': { color: c.blue1 },
      },
    },
    RaLoadingIndicator: {
      loadedIcon: {
        display: 'none',
      },
      loader: {
        display: 'none',
      },
    },
    RaList: {
      content: { backgroundColor: 'transparent' },
      bulkActionsDisplayed: { marginTop: '-20px' },
    },
    RaListToolbar: {
      toolbar: { padding: '0 .55rem !important' },
    },
    RaLoading: {
      root: {
        '& .MuiCircularProgress-root': { color: c.accent },
      },
    },
    RaLogout: {
      root: {
        '& .MuiListItemIcon-root': { color: c.muted },
      },
    },
    RaMenuItemLink: {
      root: {
        color: c.muted,
        borderLeft: '2px solid transparent',
        borderRadius: '0 999px 999px 0',
        margin: '2px 8px 2px 0',
        transition: 'all 0.2s ease',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.04)',
          color: c.text,
        },
      },
      active: {
        borderLeft: `2px solid ${c.accent}`,
        color: c.accent,
        backgroundColor: 'rgba(96, 165, 250, 0.08)',
        '&:hover': {
          backgroundColor: 'rgba(96, 165, 250, 0.12)',
        },
      },
    },
    RaPaginationActions: {
      currentPageButton: {
        border: `1px solid ${c.accent}`,
        background: `rgba(96, 165, 250, 0.15)`,
        borderRadius: 12,
        minWidth: 44,
        height: 44,
        fontWeight: 600,
      },
      button: {
        backgroundColor: 'transparent',
        minWidth: 44,
        height: 44,
        margin: '0 4px',
        border: `1px solid ${c.border}`,
        borderRadius: 12,
        color: c.text,
        fontWeight: 600,
        transition: 'all 0.2s ease',
        '&:hover': {
          borderColor: `rgba(96, 165, 250, 0.28)`,
          backgroundColor: `rgba(96, 165, 250, 0.08)`,
          transform: 'translateY(-1px)',
        },
      },
      actions: {
        '@global': {
          '.next-page': { marginLeft: 8, marginRight: 8 },
          '.previous-page': { marginRight: 8 },
        },
      },
    },
    RaSearchInput: {
      input: {
        paddingLeft: '.9rem',
        border: 0,
        '& .MuiInputBase-root': {
          backgroundColor: `rgba(15, 23, 42, 0.42)`,
          borderRadius: '22px !important',
          color: c.text,
          border: `1px solid ${c.border}`,
          '& fieldset': { borderColor: 'transparent' },
          '&:hover fieldset': { borderColor: c.borderHover },
          '&.Mui-focused fieldset': { borderColor: c.accent },
          '& svg': { color: `${c.muted} !important` },
          '& .MuiOutlinedInput-input:-webkit-autofill': {
            borderRadius: '22px 0 0 22px',
            WebkitBoxShadow: `0 0 0 100px ${c.bg1} inset`,
            WebkitTextFillColor: c.text,
          },
        },
      },
    },
    RaSingleFieldList: {
      root: {
        '& a > .MuiChip-root': {
          backgroundColor: 'transparent',
          border: `1px solid ${c.border}`,
          color: c.muted,
          fontSize: '0.8rem',
          height: '28px',
          '& .MuiChip-label': {
            paddingLeft: '8px',
            paddingRight: '8px',
          },
        },
      },
    },
    RaSidebar: {
      root: {
        height: 'initial',
        borderTopRightRadius: 28,
        borderTopLeftRadius: 28,
        marginTop: '0.6rem',
        marginBottom: '0.6rem',
        marginLeft: '0.6rem',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(18px)',
        border: `1px solid ${c.border}`,
      },
    },
    RaTopToolbar: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '.55rem 0',
      },
    },
    RaToolbar: {
      root: {
        backgroundColor: 'transparent',
      },
    },

    NDAlbumDetails: {
      root: {
        position: 'relative',
      },
      backLink: {
        marginBottom: 20,
        '& a': {
          color: c.accent,
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 500,
        },
      },
      albumHeader: {
        display: 'flex',
        gap: 32,
        marginBottom: 32,
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
      },
      cover: {
        objectFit: 'contain',
        cursor: 'pointer',
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        transition: 'opacity 0.3s ease-in-out',
      },
      coverLoading: {
        opacity: 0.5,
      },
      coverIcon: {
        fontSize: '4rem',
        color: 'rgba(255,255,255,0.2)',
      },
      albumInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 4,
      },
      badge: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 12px',
        marginBottom: 8,
        width: 'fit-content',
        border: `1px solid ${c.border}`,
        borderRadius: 999,
        background: 'rgba(255,255,255,0.04)',
        color: c.muted,
        fontSize: '0.8rem',
        letterSpacing: '0.04em',
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
        color: c.accent,
        margin: '2px 0',
      },
      recordMeta: {
        fontSize: '0.85rem',
        color: c.muted,
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
        border: `1px solid ${c.border}`,
        borderRadius: 999,
        background: 'transparent',
        color: c.muted,
        fontSize: '0.8rem',
        lineHeight: 1,
        '& i': {
          fontSize: '0.75rem',
        },
      },
      notes: {
        display: 'inline-block',
        marginTop: '1em',
        float: 'left',
        wordBreak: 'break-word',
        cursor: 'pointer',
      },
    },
    NDAlbumGridView: {
      tileBar: {
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)',
        marginBottom: '2px',
      },
      albumName: {
        marginTop: '0.5rem',
        fontWeight: 700,
        textTransform: 'none',
        color: c.text,
      },
      albumSubtitle: { color: c.muted },
      albumContainer: {
        ...glassCard,
        ...hoverGlass,
        borderRadius: 22,
        padding: '.75rem',
      },
      albumPlayButton: {
        color: c.black,
        background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
        borderRadius: '50%',
        boxShadow: `0 10px 24px rgba(37, 99, 235, 0.18)`,
        padding: '0.35rem',
        transition: 'padding .3s ease',
        '&:hover': { padding: '0.45rem' },
      },
    },
    NDAlbumShow: {
      contentCard: {
        ...glassContainer,
        borderRadius: 28,
        padding: 32,
        boxShadow: c.shadow,
        position: 'relative',
      },
      albumActions: {
        padding: '1rem 0',
        alignItems: 'center',
        display: 'flex',
        gap: '12px',
        '& .MuiButton-root:first-child': {
          background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
          color: `${c.white} !important`,
          borderRadius: 999,
          border: 0,
          boxShadow: `0 10px 24px rgba(37, 99, 235, 0.18)`,
          padding: '8px 24px',
          fontWeight: 600,
          fontSize: '0.9rem',
          minHeight: 40,
          '&:hover': {
            transform: 'translateY(-1px)',
            background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
          },
          '& .MuiButton-startIcon': {
            marginRight: 8,
          },
          '& .MuiButton-startIcon > *': {
            color: `${c.white} !important`,
          },
        },
        '& .MuiButton-root:not(:first-child)': {
          minWidth: 40,
          width: 40,
          height: 40,
          borderRadius: '50%',
          padding: 0,
          border: `1px solid ${c.border}`,
          color: c.muted,
          '&:hover': {
            border: `1px solid ${c.borderHover}`,
            backgroundColor: 'rgba(255,255,255,0.04)',
            color: c.text,
          },
          '& .MuiButton-label': {
            padding: 0,
            fontSize: 0,
          },
          '& .MuiButton-startIcon': {
            margin: 0,
          },
          '& .MuiButton-startIcon > *': {
            fontSize: '1.25rem !important',
          },
        },
      },
    },
    NDAppBar: {
      root: {
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(18px)',
        borderBottom: `1px solid ${c.border}`,
      },
    },
    NDArtistShow: {
      actions: {
        padding: '2rem 0',
        alignItems: 'center',
        overflow: 'visible',
        minHeight: '120px',
        '@global': {
          button: {
            border: `1px solid ${c.border}`,
            backgroundColor: 'inherit',
            color: c.muted,
            margin: '0 0.5rem',
            '&:hover': {
              border: `1px solid ${c.borderHover}`,
              backgroundColor: 'rgba(255,255,255,0.04) !important',
            },
          },
          'button:first-child>span:first-child>span': { display: 'none' },
          'button:first-child': {
            transform: 'scale(2)',
            margin: '1.5rem',
            minWidth: 0,
            padding: 5,
            transition: 'transform .3s ease',
            background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
            color: c.white,
            borderRadius: 500,
            border: 0,
            '&:hover': {
              transform: 'scale(2.1)',
              backgroundColor: 'inherit !important',
              border: 0,
            },
          },
          'button:first-child>span:first-child': {
            padding: 0,
            color: `${c.white} !important`,
          },
          'button>span:first-child>span, button:not(:first-child)>span:first-child>svg': {
            color: c.muted,
          },
        },
      },
      actionsContainer: { overflow: 'visible' },
    },
    NDAudioPlayer: {
      audioTitle: {
        color: c.text,
        fontSize: '1.5rem',
        '& span:nth-child(3)': { fontSize: '0.8rem' },
      },
      songTitle: { fontWeight: 900 },
      songInfo: { fontSize: '0.9rem', color: c.muted },
    },
    NDCollapsibleComment: {
      commentBlock: { fontSize: '.875rem', color: c.muted },
    },
    NDDesktopArtistDetails: {
      root: {
        ...glassContainer,
        borderRadius: 22,
      },
    },
    NDLogin: {
      main: {},
      systemNameLink: {
        color: c.accent,
        '&:hover': { color: c.blue1 },
      },
      icon: {},
      welcome: { color: c.text },
      card: {
        minWidth: 300,
        ...glassContainer,
        borderRadius: 28,
        boxShadow: c.shadow,
      },
      avatar: { marginBottom: 0 },
      button: {
        boxShadow: `0 10px 24px rgba(37, 99, 235, 0.18)`,
        borderRadius: 999,
        background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
      },
    },
    NDMobileArtistDetails: {
      bgContainer: {
        background: `linear-gradient(to bottom, rgba(15, 23, 42, 0.9), ${c.bg2}) !important`,
      },
    },
    NDPlaylistDetails: {
      container: {
        ...glassContainer,
        borderRadius: 22,
        paddingTop: '2.5rem !important',
      },
      title: {
        fontSize: 'calc(1.5rem + 1.5vw)',
        fontWeight: 700,
        color: c.text,
      },
      details: { fontSize: '.875rem', color: c.muted },
    },
    NDPlaylistShow: {
      playlistActions: {
        padding: '1rem 0',
        alignItems: 'center',
        '@global': {
          button: {
            border: `1px solid ${c.border}`,
            backgroundColor: 'inherit',
            color: c.muted,
            '&:hover': {
              border: `1px solid ${c.borderHover}`,
              backgroundColor: 'rgba(255,255,255,0.04) !important',
            },
          },
          'button:first-child:not(:only-child)': {
            transform: 'scale(1.3)',
            margin: '1em',
            minWidth: 0,
            padding: 5,
            transition: 'transform .3s ease',
            background: `linear-gradient(135deg, ${c.blue1}, ${c.blue2})`,
            color: `${c.white} !important`,
            borderRadius: 500,
            border: 0,
            boxShadow: `0 10px 24px rgba(37, 99, 235, 0.18)`,
            '&:hover': {
              transform: 'scale(1.2)',
              backgroundColor: 'inherit !important',
              border: 0,
            },
          },
          'button:first-child>span:first-child': {
            padding: 0,
            color: `${c.white} !important`,
          },
          'button:first-child>span:first-child>span': { display: 'none' },
          'button>span:first-child>span, button:not(:first-child)>span:first-child>svg': {
            color: c.muted,
          },
        },
      },
    },
    NDSubMenu: {
      root: { color: c.muted },
    },
    MuiGridListTile: {
      tile: {
        '&:hover': {
          boxShadow: `0 2px 32px rgba(0,0,0,0.5), 0px 1px 5px rgba(0,0,0,0.1)`,
        },
      },
    },
    MuiGridListTileBar: {
      root: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, transparent 100%)',
      },
    },
  },
  player: {
    theme: 'dark',
    stylesheet,
  },
}
