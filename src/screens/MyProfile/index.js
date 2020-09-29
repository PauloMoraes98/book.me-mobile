import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, TouchableWithoutFeedback, ScrollView, Image, Linking, Button } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { AirbnbRating } from 'react-native-ratings';
import { useAuth } from '../../contexts/auth';
import { Feather } from '@expo/vector-icons';

import Logo from '../../assets/logo/book-white-small.me.svg';

import api from '../../services/api';

import styles from './styles';

export default function MyProfile() {
  const {logout, user } = useAuth();
  const navigation = useNavigation();
  const [selectedUser, setSelectedUser] = useState({});
  const [books, setBooks] = useState([]);

  async function handleLogout() {
    logout();
  }

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/user/${user.id}`);
      setSelectedUser(response.data);
    }
    
    loadUser();

    setBooks(selectedUser.books);
  }, [selectedUser]);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" color="#fff" size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Logo />
        </View>

        <View style={styles.logout}>
          <TouchableOpacity onPress={handleLogout}>
            <Feather name="power" color="#fff" size={25} />
          </TouchableOpacity>
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

            <TouchableOpacity style={styles.containerEditProfile}>
              <Text style={styles.textEditProfile}>Editar Perfil</Text>
              <Feather name="edit" color="gray" size={15} />
            </TouchableOpacity>

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

            <View style={styles.separation}></View>

            {books && books.map(book => (
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
                  <View style={styles.bookIcon}>
                    <TouchableOpacity onPress={handleLogout} style={styles.iconEdit}>
                      <Feather name="edit" color="gray" size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogout} style={styles.iconDelete}>
                      <Feather name="trash-2" color="gray" size={25} />
                    </TouchableOpacity>
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
