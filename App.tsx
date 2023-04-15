import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Text pressed')

  return (
    <View style={styles.container}>
      <Text
          numberOfLines={1}
          style={styles.text}
          onPress={handleTextPress}>Hello{'\n'}World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'purple'
  },

});
