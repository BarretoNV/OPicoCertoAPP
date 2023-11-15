import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const citiesData = [
  { city: 'Rio de Janeiro', description: 'Praia de Copacabana' },
  { city: 'Florianópolis', description: 'Praia da Joaquina' },
  // Mais cidades...
];

const Home = () => {
  const navigation = useNavigation();

  const goToCityDetails = (city) => {
    navigation.navigate('CityDetails', { city });
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Olá</Text>
      <ScrollView horizontal>
        {citiesData.map((city, index) => (
          <TouchableOpacity key={index} onPress={() => goToCityDetails(city)}>
            <View style={{ padding: 16, alignItems: 'center', justifyContent: 'center' }}>
              <Text>{city.city}</Text>
              <Text>{city.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
