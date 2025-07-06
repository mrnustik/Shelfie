'use client'

import { useUser } from '@auth0/nextjs-auth0'
import { AppBar, Avatar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const { user, isLoading } = useUser()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" elevation={0} sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Shelfie
          </Link>
        </Typography>

        {!isLoading && user && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              onClick={handleClick}
              size="small"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'white' }}
              aria-controls={open ? 'user-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                alt={user.name || 'User'}
                src={user.picture || ''}
                sx={{ width: 32, height: 32 }}
              />
              <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                {user.name}
              </Typography>
            </Button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem component={Link} href="/auth/logout">
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}

        {!isLoading && !user && (
          <Button
            component={Link}
            href="/auth/login"
            variant="contained"
            color="secondary"
            size="small"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
