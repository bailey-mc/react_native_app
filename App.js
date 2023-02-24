// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

// type AppProps = {
//   name: string;
// };

// const App = (props: AppProps) => {
//   return (
//     <View style={styles.container}>
//       <Text>hewwo {props.name}</Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const LotsofNames = () => {
//   return(
//     <View style={styles.container}>
//       <App name="Sally" />
//       <App name="Bailey" />
//     </View>
//   )
// }

const App = () => {
  const [create, setCreate] = useState(false)
  return (
    <View style={styles.container}>
     
      {/* //form to show new reminder */}
      {create ? 
        <Text> create is true</Text>
      :
      <Button 
        title="Create new reminder?"
        onPress={()=> setCreate(true)}
      />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default LotsofNames;
export default App;