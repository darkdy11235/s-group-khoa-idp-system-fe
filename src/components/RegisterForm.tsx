// components/RegistrationForm.tsx
import React from 'react';
import { Box, Typography, Avatar, TextField, Button, Grid, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

interface RegistrationFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ handleSubmit }) => {
  return (
    <Box sx={{ my: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required fullWidth id="name" label="Name" name="name" autoFocus />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth id="phone" label="Phone Number" name="phone" autoComplete="phone" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth name="username" label="Username" id="username" autoComplete="username" />
          </Grid>
          <Grid item xs={12}>
            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
