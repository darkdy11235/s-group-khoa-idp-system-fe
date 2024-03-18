import React, { useState } from 'react';
import { Box, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { login } from '../api/auth';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const router = useRouter();
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const accessToken = await login(formData);
        // Handle successful login
        router.push('/');
      } catch (error) {
        // Handle login error
        console.error('Login error:', error);
      }
    };
  

  return (
    <Box sx={{ my: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">{"Don't have an account? Sign Up"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginForm;
