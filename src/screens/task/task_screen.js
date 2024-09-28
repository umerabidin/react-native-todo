import React, { useState, useRef, useEffect, Children } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Platform, TouchableNativeFeedback } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect hook
import { FontAwesome } from '@expo/vector-icons';
import BottomSheet from '../../components/BottomSheet';

const TaskScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const scrollViewRef = useRef(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);


  useFocusEffect(
    React.useCallback(() => {

      setSearchQuery('');
      setFilteredTasks(tasks);
      if (Platform.OS === 'ios') {
        Keyboard.dismiss();
      }
    }, [navigation, tasks])
  );

  const handleSearch = () => {
    const filteredTasks = tasks.filter(task =>
      task.taskName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filteredTasks);


  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredTasks(tasks);

  };

  const handleSaveTask = (task) => {
    const updatedTasks = [...tasks, task].sort((a, b) => new Date(b.date) - new Date(a.date));
    setTasks(updatedTasks);

    if (searchQuery !== '') {
      const updatedFilteredTasks = [...filteredTasks, task].sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredTasks(updatedFilteredTasks);
    } else {
      setFilteredTasks(updatedTasks);
    }
  };

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const DimissKeyboard =({children}) =>(
    <TouchableNativeFeedback onPress={()=>Keyboard.dismiss()}>
      {children}
    </TouchableNativeFeedback>
  )

  return (

    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
          <FontAwesome name="search" size={20} color="#CCCCCC" style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {filteredTasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          style={styles.taskCard}
          onPress={() => console.log('Task details:', task)}
        >
          <Text style={styles.taskTitle}>{task.taskName}</Text>
          <Text style={styles.taskDescription}>{task.description}</Text>
          <Text style={styles.taskDateTime}>Created at: {task.date.toLocaleString()}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.floatingButton} onPress={toggleBottomSheet}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>

      <BottomSheet visible={bottomSheetVisible} onClose={toggleBottomSheet} onSave={handleSaveTask} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIconContainer: {
    padding: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: '#000000',
    fontSize: 16,
  },
  clearButton: {
    marginLeft: 10,
    padding: 12,
  },
  clearButtonText: {
    color: '#63D9F3',
    fontWeight: 'bold',
  },
  taskCard: {
    backgroundColor: '#05243E',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  taskDescription: {
    fontSize: 16,
    marginTop: 5,
    color: 'white',
  },
  taskDateTime: {
    fontSize: 14,
    marginTop: 5,
    color: '#CCCCCC',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#63D9F3',
    padding: 15,
    borderRadius: 100,
    elevation: 3,
  },
});

export default TaskScreen;
