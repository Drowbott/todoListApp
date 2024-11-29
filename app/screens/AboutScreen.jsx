import React from 'react';
import { Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toDateString();
  return (
    <MainLayout>
      <Text>App Name: My Awesome To-Do App</Text>
      <Text>Your Name: Daniel</Text>
      <Text>Date: {currentDate}</Text>
    </MainLayout>
  );
};

export default AboutScreen;