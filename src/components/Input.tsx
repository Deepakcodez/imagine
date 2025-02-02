import {StyleSheet, TextInput, View} from 'react-native';
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
      <TextInput
        style={styles.input}
        value={width.toString()}
        onChange={e => setWidth(parseInt(e.nativeEvent.text))}
      />
      <TextInput
        style={styles.input}
        value={height.toString()}
        onChange={e => setHeight(parseInt(e.nativeEvent.text))}
      />
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
