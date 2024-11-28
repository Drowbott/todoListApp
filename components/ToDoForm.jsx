import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#555"
        onChangeText={setTaskText}
        value={taskText}
        onSubmitEditing={handleSubmit}
      />
      <Button title="Add Task" color="#4A8C6F" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#C8E7D2',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#99C2A3',
    marginRight: 10,
    padding: 12,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default ToDoForm;