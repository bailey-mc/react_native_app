// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import {useForm, Controller} from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker';

const App = () => {
  // const [create, setCreate] = useState(false)
  // const [showReminders, setShowReminders] = useState(false)
  const [remind, onChangeRemind] = React.useState('')
  const [reminders, setReminders] = useState([{}])
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
     
      {/* //form to show new reminder */}
      {/* {create ? 
        <NewForm reminders={reminders} setReminders={setReminders}/>
      :
      <Button 
        title="Create new reminder?"
        onPress={()=> setCreate(true)}
      />
      } */}
      {/* {showReminders ?
        <RemindersList reminders={reminders}/>
      :
        <Button
          title="Show reminders?"
          onPress={()=> setShowReminders(true)}
        />
      } */}
      <Text style={styles.reminderLabel}>Reminders</Text>
      <TextInput
        value={remind}
        style={styles.input}
        onChangeText={onChangeRemind}
        />
        <Button
          title="Add Reminder"
          onPress={()=>{
            setReminders([
              ...reminders,
              {id: count, name: remind}
            ]);
            onChangeRemind('');
            setCount(count + 1);

          }}
        />
        {reminders.map((reminder)=> {
          return(
            <View>
              <Text>{reminder.name} reminder + id {reminder.id}</Text>
            </View>
          )
        })

        }
    </View>
  )
}

//default values for react hooks form
const defaultValues = {
  TextInput: 'reminder to...',
  DateTimePicker: new Date(),
}

const RemindersList = () => {
  return(
    <View style={styles.container}>
      <Text>Reminders List</Text>
    </View>
  )
}


const NewForm = (props) => {
  //react hook form
   const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm(defaultValues);
  const onSubmit = data => {
    console.log(data);
    props.setReminders(data)
  };

  //date time picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    // setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
   
  // const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
  //   return console.log(errors)
  // }


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


{/* <View> */}
      <Text style={styles.label}>Select Date & Time</Text>
      
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
        )}     
      <Text>selected: {date.toLocaleString()}</Text>

    {/* </View> */}

      {/* <Text style={styles.label}>Date & Time</Text>
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
      /> */}

      {/* <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Reset"
          onPress={() => {
            reset({
              reminder: 'reminder to pick up laundry detergent',
              // date: 'date and time'
            })
          }}
        />
      </View> */}
      
     

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Submit"
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
  reminderLabel:{
    textDecorationStyle: 'underline',
  }
});

// export default LotsofNames;
export default App;