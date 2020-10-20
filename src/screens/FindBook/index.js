import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AirbnbRating } from 'react-native-ratings';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import Logo from '../../assets/logo/book.me.svg';

import styles from './styles';

export default function FindBook() {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState([]);
  
  function navigateToBookDetails(id) {
    navigation.navigate('BookDetails', { id: id });
  }

  async function loadBooks() {
    const name = bookName.toUpperCase();

    const response = await api.post('/booklike', {
      name
    });

    setBooks(response.data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.textContainer}>
          <TextInput 
            style={styles.textInputCity}
            value={bookName}
            onChangeText={setBookName}
            autoCapitalize={"characters"}
            placeholder={"Pesquise pelo nome do livro"}
            placeholderTextColor="#09A8FA"
            returnKeyType={"send"}
            onSubmitEditing={loadBooks}
            maxLength={50}
          />

          <TouchableOpacity style={styles.buttonEnter} onPress={loadBooks}>
            <View style={styles.action}> 
              <Feather style={styles.iconSearch} name="search" size={28} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <ScrollView>
            {books.map(book => (
              <View 
                style={styles.containerBook}
                key={book.id}
              >
                <View style={styles.bookInfo}>
                  <View style={styles.bookImage}></View>
                  <View style={styles.bookTextInfos}>
                    <TouchableWithoutFeedback onPress={() => navigateToBookDetails(book.id)}>
                      <Text style={styles.bookText}>{book.name}</Text>
                    </TouchableWithoutFeedback>
                    <Text style={styles.bookText}>
                      {
                        book.intention == 3 ? 'Valor' : book.intention == 2 ? 'Troca' : 'Empréstimo'
                      }
                    </Text>
                    {book.intention == 3 ? <Text style={styles.bookValue}>R${book.value}</Text> : null }
                    <AirbnbRating
                      count={5}
                      defaultRating={parseInt(book.rating)}
                      size={20}
                      showRating={false}
                      selectedColor="#09A8FA"
                      isDisabled={true}
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
