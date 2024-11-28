import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
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
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
                onSubmitEditing={handleSubmit}
            />
            <Button title="Add Task" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
        padding: 8,
        borderRadius: 5
    }
})

export default ToDoForm;
