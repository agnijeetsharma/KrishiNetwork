import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const StyledCard = styled(Card)({
  maxWidth: 400,
  minWidth: 500,
  minHeight: 300,
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

const SignUpCard = () => {
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate(); 

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        { email, password, name, role }, 
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      navigate("/login");
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            required
            type="name"
            label="Name"
            variant="outlined"
            inputRef={nameRef}
            fullWidth
          />
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

          <FormControl component="fieldset">
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              name="role"
              value={role}
              onChange={handleRoleChange}
              row
            >
              <FormControlLabel
                value="farmer"
                control={<Radio color="success" />}
                label="Farmer"
              />
              <FormControlLabel
                value="buyer"
                control={<Radio color="success" />}
                label="Buyer"
              />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" color="success" type="submit" fullWidth>
            Sign Up
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default SignUpCard;
