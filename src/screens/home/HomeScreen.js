import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = () => {
  const incompleteTasks = [
    { id: 1, title: 'Incomplete Task 1', description: 'Content for Incomplete Task 1 goes here.' },
    { id: 2, title: 'Incomplete Task 2', description: 'Content for Incomplete Task 2 goes here.' },
    { id: 3, title: 'Incomplete Task 3', description: 'Content for Incomplete Task 3 goes here.' },
    { id: 4, title: 'Incomplete Task 4', description: 'Content for Incomplete Task 4 goes here.' },
    { id: 5, title: 'Incomplete Task 5', description: 'Content for Incomplete Task 5 goes here.' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../../assets/imgess.png')}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>oussama chahidi</Text>
          <Text style={styles.emailText}>oussamachahidi@gmail.com</Text>
        </View>
      </View>
      
      <Text style={styles.groupText}>Group tasks</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 1</Text>
            <Text style={styles.cardText}>Content for Card 1 goes here.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 2</Text>
            <Text style={styles.cardText}>Content for Card 2 goes here.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 3</Text>
            <Text style={styles.cardText}>Content for Card 3 goes here.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 4</Text>
            <Text style={styles.cardText}>Content for Card 4 goes here.</Text>
          </View>
        </View>
      </ScrollView>
      
      <Text style={styles.groupText}>Incomplete Tasks</Text>
      <ScrollView contentContainerStyle={styles.taskCardsContainer}>
        {incompleteTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <Text style={styles.cardTitle}>{task.title}</Text>
            <Text style={styles.cardText}>{task.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    color: 'gray',
  },
  groupText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  taskCardsContainer: {
    paddingVertical: 10,
  },
  taskCard: {
    width: 390,
    backgroundColor: '#05243E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    height: 70,
  },
  card: {
    width: 290,
    backgroundColor: '#05243E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginLeft: 5,
    marginBottom: 10,
    height: 150,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
  },
});

export default HomeScreen;
