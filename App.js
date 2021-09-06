import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  label,
  TouchableOpacity
} from 'react-native';

const SettingsOption = ({label}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.text, styles.header]}>
          Settings
        </Text>
      </View>
      <SettingsOption label={'Upadte Profile'} />
      <SettingsOption label={'Upadte Address'} />
      <SettingsOption label={'Upadte Notifications Preferences'} />
      <SettingsOption label={'Sign Out'} />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102D66',
  },
  content: {
  paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  }
})

export default App;
