'use client'

import { useUser } from '@auth0/nextjs-auth0'
import { Box, Container, Typography } from '@mui/material'

export default function Home() {
  const { user, isLoading } = useUser()

  if (isLoading) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    )
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Shelfie
      </Typography>
      {user && (
        <Box mt={2}>
          <Typography variant="h6" gutterBottom>
            Hello, {user.name}!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            You are logged in as {user.email}
          </Typography>
        </Box>
      )}
    </Container>
  )
}
