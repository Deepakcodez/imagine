import {   SafeAreaView } from 'react-native';
import React from 'react';
import Main from './src/screen/Main';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#212428'}}>
      <Main/>
    </SafeAreaView>
  );
};
export default App;