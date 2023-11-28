import {
   StyleSheet,
   Text,
   SafeAreaView,
   Platform,
   ScrollView,
   StatusBar
} from 'react-native';

import {
  PokemonCards
} from "./components";

import data from './data/data';

export default function App() {

  const newCards = data.map((p)=>{
    return <PokemonCards {...p} key={p.id}/>
  })

  return (
    <>
    <StatusBar
    backgroundColor="white"
    barStyle="dark-content"
    />
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {newCards}
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? 10 : 0
  },
});
