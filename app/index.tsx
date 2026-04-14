import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [score, setScore] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 لعبتي الأولى</Text>
      <Text style={styles.score}>النتيجة: {score}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setScore(score + 1)}
      >
        <Text style={styles.buttonText}>➕ اضغط هنا</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, styles.resetButton]} 
        onPress={() => setScore(0)}
      >
        <Text style={styles.buttonText}>🔄 إعادة تعيين</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4CAF50',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
