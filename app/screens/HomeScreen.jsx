import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task && task.trim() !== '') {
     setTasks([...tasks, task]);
   }
  };

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#A7D1AB" />
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A7D1AB',
    padding: 20,
  },
});

export default HomeScreen;