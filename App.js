// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import {useForm, Controller} from 'react-hook-form'

const App = () => {
  const [create, setCreate] = useState(false)
  return (
    <View style={styles.container}>
     
      {/* //form to show new reminder */}
      {create ? 
        <NewForm />
      :
      <Button 
        title="Create new reminder?"
        onPress={()=> setCreate(true)}
      />
      }
    </View>
  )
}

const NewForm = () => {
   const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
   
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log(errors)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Reminder</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="reminder"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Date & Time</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="date"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Reset"
          onPress={() => {
            reset({
              reminder: 'reminder to pick up laundry detergent',
              date: 'date and time'
            })
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
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
   input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  label: {
   color: 'black',
   margin: 20,
   marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
});

// export default LotsofNames;
export default App;