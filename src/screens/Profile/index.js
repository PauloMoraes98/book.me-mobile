import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback, ScrollView, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { AirbnbRating } from 'react-native-ratings';
import { useAuth } from '../../contexts/auth';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import Logo from '../../assets/logo/book-white-small.me.svg';

import api from '../../services/api';

import styles from './styles';

export default function Profile() {
  const {logout, user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedUser, setSelectedUser] = useState([]);
  const [books, setBooks] = useState([]);
  
  const routeParams = route.params;

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/user/${routeParams.id}`);
      setSelectedUser(response.data);
    }

    loadUser();
  }, []);
  
  useEffect(() => {
    async function loadBook() {
      const response = await api.get('/book');
      setBooks(response.data);
    }

    loadBook();
  }, []);

  const message = `Olá ${selectedUser.name}, estou interessado no livro... Poderiamos conversar a respeito?`;

  function sendMail() {
    MailComposer.composeAsync({
        subject: `Book.me: ${selectedUser.name}`,
        recipients: [selectedUser.email],
        body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${selectedUser.phone}&text=${message}`);
  }

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
              <Image source={{ uri: "https://jhowendoors.com/wp-content/uploads/2019/03/man-avatar-placeholder.png" }} style={styles.avatar}/> 
            </View>
            <View style={styles.containerNameUser}>
              <Text style={styles.textNameUser}>{selectedUser.name}</Text>
            </View>

            <View style={styles.separation}></View>

            <View style={styles.content}>
              <Text style={styles.textTitle}>Biografia</Text>
              <Text style={styles.textContent}>{selectedUser.bio}</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.textTitle}>Email</Text>
              <Text style={styles.textContent}>{selectedUser.email}</Text>
            </View>
            
            <View style={styles.content}>
              <Text style={styles.textTitle}>Celular</Text>
              <Text style={styles.textContent}>{selectedUser.phone}</Text>
            </View>

            <View style={styles.contentLocation}>
              <View style={styles.city}>
                <Text style={styles.textTitle}>Cidade</Text>
                <Text style={styles.textContent}>{selectedUser.city}</Text>
              </View>

              <View style={styles.uf}>
                <Text style={styles.textTitle}>UF</Text>
                <Text style={styles.textContent}>{selectedUser.uf}</Text>
              </View>
            </View>

            <View style={styles.formButton}>
              <View style={styles.formButtonWhats}>
                <TouchableOpacity style={styles.button} onPress={ sendWhatsapp }>
                  <View style={styles.actionWhats}> 
                    <Text style={styles.actionTextWhats}>Whatsapp</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.formButtonEmail}>
                <TouchableOpacity style={styles.button} onPress={ sendMail }>
                  <View style={styles.actionEmail}> 
                    <Text style={styles.actionTextEmail}>E-mail</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.separation}></View>

            {books.filter(idUser => ( idUser.id_user === selectedUser.id )).map(book => (
              <View style={styles.containerBook}>
                <View style={styles.bookInfo}>
                    <View style={styles.bookImage}></View>
                    <View style={styles.bookTextInfos}>
                      <TouchableWithoutFeedback onPress={() => navigateToBookDetails(book.id)}>
                        <Text style={styles.bookText}>{book.name}</Text>
                      </TouchableWithoutFeedback>
                      <Text style={styles.bookText}>Valor</Text>
                      <Text style={styles.bookValue}>R${book.value}</Text>
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

          </View>
        </ScrollView>
      </View>
    </View>
  )
}
