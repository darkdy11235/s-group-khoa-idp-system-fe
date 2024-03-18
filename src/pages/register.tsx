// pages/register.tsx
import React from 'react';
import RegistrationForm from '../components/RegisterForm';

const Register: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Handle form submission logic here, e.g., making an API request to register the user
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      username: formData.get('username'),
      password: formData.get('password'),
    });
  };

  return <RegistrationForm handleSubmit={handleSubmit} />;
};

export default Register;
