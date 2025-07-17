import { Image } from 'expo-image';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';

export default function App() {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  return (
    <SafeAreaView className="flex-1 ">
      <Image
        style={styles.backgroundImage}
        source="https://media.istockphoto.com/id/1269169056/vector/abstract-dark-blue-background.jpg?s=612x612&w=0&k=20&c=edCJyoOZDc4sOhffzcSNw2ffk8sq6jFiSe_4Uw80HLk="
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      {/* image section */}
      <View className="w-full  bg-violet-300 p-2 px-4">
        <Image
          style={styles.mainImageBG}
          source="https://static.wikia.nocookie.net/dcstudios/images/e/e8/Krypto_First_look_4k.png/revision/latest?cb=20250603163041"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          blurRadius={8}
        />
        <Image
          style={styles.image}
          source="https://static.wikia.nocookie.net/dcstudios/images/e/e8/Krypto_First_look_4k.png/revision/latest?cb=20250603163041"
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
      </View>

      {/* Searchbar */}
      <View className="  px-4">
        <BlurView 
        intensity={30} 
        style={styles.blurContainer} 
        experimentalBlurMethod="dimezisBlurView" 
        
        >
          <TextInput
            editable
            numberOfLines={4}
            maxLength={360}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            className=" left-0  right-0 w-full rounded-full   px-5 py-5 text-white  "
          />
          
        </BlurView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    height: 450,
    width: '100%',
    borderRadius: 16,
  },
  mainImageBG: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  blurContainer: {
    display : "flex",
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 50,
    top: -28,
  },
});
