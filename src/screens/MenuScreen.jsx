import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuScreen = () => {
  const navigation = useNavigation();
  const menuItems = [
    { label: 'Graduação', screen: 'Graduation' },
    { label: 'Katas', screen: 'Katas' }, 
    // { label: 'Bases', screen: 'Bases' }, 
    // { label: 'Ataques', screen: 'Attacks' }, 
    // { label: 'Defesas', screen: 'Defenses' }, 
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item.screen)} 
        >
          <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#C7C8C9',
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  menuText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
