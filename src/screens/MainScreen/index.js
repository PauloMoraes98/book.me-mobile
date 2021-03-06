import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableWithoutFeedback } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Logo from '../../assets/logo/book.me.svg';

export default function MainScreen() {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);
  const [loading, setLoaging] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  function ratingCompleted(newrating) {
    setRating(newrating)
  }

  function navigateToProfile(id) {
    navigation.navigate('Profile', { id: id });
  }

  function navigateToBookDetails(id) {
    navigation.navigate('BookDetails', { id: id });
  }
  
  async function loadBooks() {
    if(loading) {
      return;
    }

    if(total > 0 && books.length === total) {
      return;
    }

    setLoaging(true);

    const response = await api.get('book', {
      params: { page: page }
    });

    setBooks([...books, ...response.data]);

    setTotal(response.headers['x-total-count']);

    setPage(page + 1);

    setLoaging(false);
  }

  useEffect(() => {
    loadBooks(); 
  }, []);


  return (
    <View>
      <View style={styles.header}>
        <Logo />
      </View>
        <FlatList
          style={styles.booksList}
          contentContainerStyle={{ paddingBottom: 70 }}
          data={books}
          keyExtractor={book => String(book.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadBooks}
          onEndReachedThreshold={0.2}
          refreshing={loading}
          onRefresh={loadBooks}
          renderItem={({ item: book }) => (
            <View style={styles.container}>
              <View style={styles.userInfo}>
                <View style={styles.userImage}></View>
                <TouchableWithoutFeedback onPress={() => navigateToProfile(book.books.id)}>
                  <Text style={styles.userName}>{book.books.name}</Text>
                </TouchableWithoutFeedback>
              </View>
              <TouchableWithoutFeedback onPress={() => navigateToBookDetails(book.id)}>
                <View>
                  <View style={styles.separation}></View>
                  <View style={styles.bookInfo}>
                    <View style={styles.bookImage}></View>
                    <View style={styles.bookTextInfos}>
                        <Text style={styles.bookText}>{book.name}</Text>
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
              </TouchableWithoutFeedback>
            </View>
          )}
        />
    </View>
  );
}
