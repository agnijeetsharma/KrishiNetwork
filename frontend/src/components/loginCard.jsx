import { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginUser } from '../utils/userSlice';

const StyledCard = styled(Card)({
  maxWidth: 400,
  minWidth: 500,
  minHeight: 300,
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  margin: 'auto',
  marginTop: '100px',
});

const LoginCard = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/login", {
        email,
        password,
      });

      console.log(response);
      dispatch(loginUser(response?.data?.data));
      navigate("/farmer-details")
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            required
            type="email"
            label="Email"
            variant="outlined"
            inputRef={emailRef}
            fullWidth
          />
          <TextField
            required
            type="password"
            label="Password"
            variant="outlined"
            inputRef={passwordRef}
            fullWidth
          />

          <Button variant="contained" color="success" type="submit" fullWidth>
            Login
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default LoginCard;
