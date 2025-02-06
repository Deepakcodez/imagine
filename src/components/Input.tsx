import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

interface InputProps {
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}

const Input = ({width, height, setWidth, setHeight}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <View style={{width: '48%'}}>
        <Text style={{color: 'white', paddingVertical: 10}}>Width</Text>
        <TextInput
          style={[styles.input, {width: '100%'}]}
          value={width.toString()}
          onChange={e => setWidth(parseInt(e.nativeEvent.text))}
        />
      </View>
      <View style={{width: '48%'}}>
        <Text style={{color: 'white', paddingVertical: 10}}>Height</Text>
        <TextInput
          style={[styles.input, {width: '100%'}]}
          value={height.toString()}
          onChange={e => setHeight(parseInt(e.nativeEvent.text))}
        />
      </View>
    </View>
  );
};
export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    color: '#fff',
    borderColor: ' #6b6b6b',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});
