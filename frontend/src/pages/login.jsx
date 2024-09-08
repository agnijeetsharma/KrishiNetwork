
import LoginCard from '../components/loginCard';
import Box from '@mui/material/Box';

export default function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#c2deb6'
      }}>
      <LoginCard />
    </Box>
  );
}
