import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        {/* Your main content goes here */}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;