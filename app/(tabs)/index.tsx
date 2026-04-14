import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 لعبتي الأولى</Text>
      <Text style={styles.score}>النتيجة: {score}</Text>
      <Text style={styles.highScore}>🏆 أفضل نتيجة: {highScore}</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleScore}>
        <Text style={styles.buttonText}>➕ اضغط هنا</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.resetButton]} 
        onPress={resetScore}>
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
    marginBottom: 10,
    color: '#4CAF50',
  },
  highScore: {
    fontSize: 18,
    marginBottom: 30,
    color: '#888',
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
