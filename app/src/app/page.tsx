'use client'

import { Button, Container } from '@mui/material'
import Box from '@mui/material/Box'
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Button 
          component={Link} 
          href="/auth/login" 
          variant="contained" 
          color="primary" 
          size="large"
        >
          Login
        </Button>
      </Box>
    </Container>
  )
}
