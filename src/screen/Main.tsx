import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import Input from '../components/Input';

const Main = () => {
  const [userQuery, setUserQuery] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [width, setWidth] = React.useState<number>(200);
  const [height, setHeight] = React.useState<number>(200);
  let seed = 42;

  const imgURL = `https://pollinations.ai/p/${encodeURIComponent(
    userQuery,
  )}?width=${width}&height=${height}&seed=${seed}&model=flux&nologo=true`;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        {userQuery && (
          <Image
            source={{uri: imgURL}}
            style={styles.image}
            alt="image"
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
          />
        )}
        {isLoading && (
          <Image
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEX///8AAACenp61tbVRUVEaGhp3d3fMzMzy8vK4uLhNTU2ZmZmjo6PT09NeXl77+/tAQEASEhIvLy/l5eVHR0dxcXFkZGRYWFipqanGxsaRkZFpaWl+fn7r6+u+vr4iIiI5OTmJiYnc3NzoVm0XAAABbElEQVR4nO3UyXaCMABA0QgY5kEZRaGF///IJgrRhQuQ0k3f3SQqx7wDIUIAAAAAAAAAAAAAAAAAAF64tr+QvUXvrYmShzdOxtfZyIzAWas45x9GHY3C/JmMrEkTG146W7qKd9oelQWTQoazKHZnnTcjiqiFUWajB9L6lY2erosq3x0JzzPheRAUiVEacqHyuCqqj5aytmhWHZ7AP+XF09j703t8uZ9Hee8/Jq5+k9x0ujDt7XH/qFg+mrIhLO5Vl4Orh7BqpKMnjo5xWhHX+rJqiJJVh9CWqJutbkelZ8nleo+KhGjDOarKmlFHRe3uQS9RV/VQPEc9L5VUx1OUfzNRY23p5EG1t/FfROmtY1+99KZvTFneSt0SWiLP3Dkq6fJToEbX6YTjTjsxVrut22WHjd9VrdcO63pQQ1emIq07IZqiSmx9QaXXl53oE/3JrhOpWsZCf6l+6Yc9ogAAAAAAAAAAAAAAAADgcz/O7iOPmxM1iQAAAABJRU5ErkJggg==',
            }}
            style={styles.imageloader}
            alt="loader image"
          />
        )}
      </View>

      <View style={{backgroundColor: 'red', width: '100%', height: 'auto' }}>
        <Input
          width={width}
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here to generate an image!"
          onChangeText={setUserQuery}
          value={userQuery}
        />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#212428',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  textWhite: {
    color: 'white',
  },
  image: {
    width: '80%',
    borderRadius: 5,
    aspectRatio: 1,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  imageloader: {
    width: '80%',
    borderRadius: 5,
    aspectRatio: 1,
    resizeMode: 'cover',
    backgroundColor: 'white',
    position: 'absolute',
  },
  imageContainer: {
    backgroundColor: 'transparent',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  input: {
    height: 40,
    padding: 13,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
  },
  button: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
