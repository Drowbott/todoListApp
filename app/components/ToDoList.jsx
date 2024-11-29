import React from 'react';
import { Pressable, View, Text, ScrollView, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  const safeTasks = tasks || [];

  return (
    <ScrollView style={styles.scrollView}>
      {safeTasks.map((task, index) => (
        <Pressable key={index} style={({ pressed }) => [
          styles.task,
          { backgroundColor: pressed ? '#B5D8C3' : '#D0F0E0' },
        ]}>
          <Text style={styles.taskText}>{task}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 20,
  },
  task: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#A7D1AB',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  taskText: {
    fontSize: 18,
  },
});

export default ToDoList;