import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import { AirbnbRating } from 'react-native-ratings';
import { useAuth } from '../../contexts/auth';
import * as MailComposer from 'expo-mail-composer';

import Logo from '../../assets/logo/book-white-small.me.svg';

import api from '../../services/api';

import styles from './styles';

export default function BookDetails() {
  const {logout, user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [book, setBook] = useState({ books: [] });
  const [message, setMessage] = useState('');

  const routeParams = route.params;
  
  useEffect(() => {
    async function loadBook() {
      const response = await api.get(`/book/${routeParams.id}`);

      setBook(response.data);
    }

    loadBook();  

    if(book)
      setMessage(`Olá ${book.books.name}, estou interessado no livro ${book.name} Poderiamos conversar a respeito?`);
  }, []);


  function sendMail() {
    MailComposer.composeAsync({
        subject: `Book.me: ${book.books.name}`,
        recipients: [book.books.email],
        body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${book.books.phone}&text=${message}`);
  }

  // function navigateToEditBook(id, book) {
  //   navigation.navigate('EditBook', { id: id, book: book });
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" color="#fff" size={25} />
          </TouchableOpacity>
        </View>

        <View>
          <Logo />
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.photograph}>
              <View source={{ uri: "https://jhowendoors.com/wp-content/uploads/2019/03/man-avatar-placeholder.png" }} style={styles.avatar}/> 
            </View>
            {/* {user.id == book.books.id ? 
              <View>
                <TouchableOpacity style={styles.containerEdit} onPress={ () => navigateToEditBook(book.id, book) }>
                  <Text style={styles.textEdit}>Editar Livro</Text>
                  <Feather name="edit" color="gray" size={15} />
                </TouchableOpacity>
              </View>
            : 
             null } */}
            <View style={styles.containerNameBook}>
              <Text style={styles.textTitle}>{book.name}</Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.textContent}>{book.description}</Text>
            </View>
            <View style={styles.formInputAvaliation}>
              <AirbnbRating
                count={5}
                defaultRating={parseInt(book.rating)}
                size={30}
                showRating={false}
                selectedColor="#09A8FA"
                isDisabled={true}
              />
            </View>

            <View style={styles.separation}></View>

            <Text style={styles.textBookIntention}>
              {
                book.intention == 3 ? 'Valor' : book.intention == 2 ? 'Troca' : 'Empréstimo'
              }
            </Text>
            
            {book.intention == 3 ? <Text style={styles.bookValue}>R${book.value}</Text> : null }

            <View style={styles.formButton}>
              <View style={styles.formButtons}>
                <TouchableOpacity style={styles.button} onPress={ sendWhatsapp }>
                  <View style={styles.action}> 
                    <Text style={styles.actionText}>Whatsapp</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.formButtons}>
                <TouchableOpacity style={styles.button} onPress={ sendMail }>
                  <View style={styles.action}> 
                    <Text style={styles.actionText}>E-mail</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
