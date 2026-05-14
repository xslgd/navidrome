import React, { createElement, forwardRef, useState } from 'react'
import {
  MenuItemLink,
  useTranslate,
  usePermissions,
  getResources,
} from 'react-admin'
import { useToggleSidebar } from 'ra-ui-materialui'
import { MdInfo, MdPerson, MdSupervisorAccount } from 'react-icons/md'
import { useSelector } from 'react-redux'
import {
  makeStyles,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  AppBar as MuiAppBar,
  Toolbar,
  Menu,
  Tooltip,
} from '@material-ui/core'
import { Dialogs } from '../dialogs/Dialogs'
import { AboutDialog } from '../dialogs'
import PersonalMenu from './PersonalMenu'
import config from '../config'

const useStyles = makeStyles(
  (theme) => ({
    root: {
      color: theme.palette.text.secondary,
    },
    active: {
      color: theme.palette.text.primary,
    },
    icon: { minWidth: theme.spacing(5) },
    brand: {
      fontWeight: 700,
      fontSize: '1.1rem',
      marginRight: 'auto',
      color: theme.palette.text.primary,
    },
    rightIcons: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    },
  }),
  {
    name: 'NDAppBar',
  },
)

const AboutMenuItem = forwardRef(({ onClick, ...rest }, ref) => {
  const classes = useStyles(rest)
  const translate = useTranslate()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    onClick && onClick()
    setOpen(false)
  }
  const label = translate('menu.about')
  return (
    <>
      <MenuItem ref={ref} onClick={handleOpen} className={classes.root}>
        <ListItemIcon className={classes.icon}>
          <MdInfo title={label} size={24} />
        </ListItemIcon>
        {label}
      </MenuItem>
      <AboutDialog onClose={handleClose} open={open} />
    </>
  )
})

AboutMenuItem.displayName = 'AboutMenuItem'

const settingsResources = (resource) =>
  resource.name !== 'user' &&
  resource.hasList &&
  resource.options &&
  resource.options.subMenu === 'settings'

const CustomUserMenuItems = ({ onClick, ...rest }) => {
  const translate = useTranslate()
  const resources = useSelector(getResources)
  const classes = useStyles(rest)
  const { permissions } = usePermissions()

  const resourceDefinition = (resourceName) =>
    resources.find((r) => r?.name === resourceName)

  const renderUserMenuItemLink = () => {
    const userResource = resourceDefinition('user')
    if (!userResource) {
      return null
    }
    if (permissions !== 'admin') {
      if (!config.enableUserEditing) {
        return null
      }
      userResource.icon = MdPerson
    } else {
      userResource.icon = MdSupervisorAccount
    }
    return renderSettingsMenuItemLink(
      userResource,
      permissions !== 'admin' ? localStorage.getItem('userId') : null,
    )
  }

  const renderSettingsMenuItemLink = (resource, id) => {
    const label = translate(`resources.${resource.name}.name`, {
      smart_count: id ? 1 : 2,
    })
    const link = id ? `/${resource.name}/${id}` : `/${resource.name}`
    return (
      <MenuItemLink
        className={classes.root}
        activeClassName={classes.active}
        key={resource.name}
        to={link}
        primaryText={label}
        leftIcon={
          (resource.icon && createElement(resource.icon, { size: 24 })) || (
            <i className="fa-solid fa-link" style={{width:24,textAlign:'center',fontSize:'1.1rem'}}></i>
          )
        }
        onClick={onClick}
        sidebarIsOpen={true}
      />
    )
  }

  return (
    <>
      <PersonalMenu sidebarIsOpen={true} onClick={onClick} />
      <Divider />
      {renderUserMenuItemLink()}
      {resources
        .filter(settingsResources)
        .map((r) => renderSettingsMenuItemLink(r))}
      <Divider />
      <AboutMenuItem onClick={onClick} />
      <Dialogs />
    </>
  )
}

const AppBar = (props) => {
  const classes = useStyles()
  const translate = useTranslate()
  const [sidebarOpen, toggleSidebar] = useToggleSidebar()
  const [userAnchorEl, setUserAnchorEl] = useState(null)
  const userMenuOpen = Boolean(userAnchorEl)

  const handleUserMenuOpen = (event) => {
    setUserAnchorEl(event.currentTarget)
  }
  const handleUserMenuClose = () => {
    setUserAnchorEl(null)
  }

  return (
    <MuiAppBar position="fixed" color="secondary">
      <Toolbar disableGutters variant="dense" className={classes.root}>
        <Tooltip
          title={translate(
            sidebarOpen ? 'ra.action.close_menu' : 'ra.action.open_menu',
            { _: 'Open/Close menu' },
          )}
          enterDelay={500}
        >
          <IconButton color="inherit" onClick={() => toggleSidebar()}>
            <i className="fa-solid fa-bars"></i>
          </IconButton>
        </Tooltip>

        <span className={classes.brand}>Navidrome</span>

        <div className={classes.rightIcons}>
          <IconButton color="inherit" size="small">
            <i className="fa-solid fa-search"></i>
          </IconButton>
          <IconButton color="inherit" size="small" onClick={handleUserMenuOpen}>
            <i className="fa-regular fa-circle-user"></i>
          </IconButton>

          <IconButton color="inherit" size="small">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </IconButton>
        </div>

        <Menu
          id="user-menu"
          disableScrollLock
          anchorEl={userAnchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          getContentAnchorEl={null}
          open={userMenuOpen}
          onClose={handleUserMenuClose}
        >
          <CustomUserMenuItems onClick={handleUserMenuClose} />
        </Menu>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
