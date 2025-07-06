import { Container, Button } from '@mui/material';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Button 
          variant="contained" 
          color="primary"
          size="large"
        >
          Click Me
        </Button>
      </Box>
    </Container>
  );
}