import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');

  const handleAddTodo = () => {
    if (currentTodo !== '') {
      setTodos([...todos, currentTodo]);
      setCurrentTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={currentTodo}
          onChangeText={(text) => setCurrentTodo(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      {todos.map((todo, index) => (
        <TouchableOpacity
          key={index}
          style={styles.todoContainer}
          onPress={() => handleDeleteTodo(index)}
        >
          <Text style={styles.todoText}>{todo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#3f51b5',
    fontSize: 20,
    fontWeight: 'bold',
  },
  todoContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;

