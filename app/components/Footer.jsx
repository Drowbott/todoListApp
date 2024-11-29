import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();

    const handleAboutPress = () => {
        navigation.navigate('About');
    };

  return (
    <Pressable onPress={handleAboutPress} style={styles.footer}>
        <Text style={styles.footerText}>Go to About</Text>
    </Pressable>

  );
};



const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#2196F3',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
  },
});




export default Footer;
