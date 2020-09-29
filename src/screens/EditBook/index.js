import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, Linking, Picker, SafeAreaView } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api/index';

import styles from './styles';

import Logo from '../../assets/logo/book.me.svg';

export default function EditBook() {
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState();
  const [intention, setIntention] = useState(1);
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);
  const [book, setBook] = useState({ books: [] });
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params;

  useEffect(() => {
    if (intention === 3){
      setShow(true)
    } else {
      setShow(false)
    }

    async function loadBook() {
      setBook(routeParams.book);
    }

    loadBook();

    setName(book.name);
    setAuthor(book.author);
    setRating(book.rating);
    setDescription(book.description);
    setIntention(book.intention);
    if(book.value !== undefined)
      setValue(book.value.toString());
  }, [intention]);
  
  async function handleEdit() {
    const data = { name, author, rating, description, intention, value };
    try {
      const editedBook = await api.put(`/book/${routeParams.id}`, data);

    }catch(err) {
      console.log(err)
      alert('Erro ao editar livro, tente novamente.');
    }

    // navigation.navigate('MainScreen');
    navigation.goBack();

    setName('');
    setAuthor('');
    setRating(0);
    setDescription('');
    setIntention(1);
    setValue('');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.containerView}>
          <View style={styles.logo}>
            <Logo />
          </View>
      
          <TouchableOpacity onPress={() => ImagePicker.launchCamera}>
            <View style={styles.photograph}>
              <View source={{ uri: "https://jhowendoors.com/wp-content/uploads/2019/03/man-avatar-placeholder.png" }} style={styles.avatar}/> 
            </View>
          </TouchableOpacity>
          
          <View style={styles.formInput}>
            <Text style={styles.textTitle}>Nome </Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Insira o nome do livro"}
              value={name}
              onChangeText={setName}       
              autoCapitalize={"none"}
              returnKeyType={"next"}  
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.textTitle}>Autor </Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Insira o autor"}
              value={author}
              onChangeText={setAuthor}       
              autoCapitalize={"none"}
              returnKeyType={"next"}           
            />
          </View>

          <View style={styles.formInput}>
            <Text style={styles.textTitle}>Descrição </Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Insira uma breve descrição do livro"}
              value={description}
              onChangeText={setDescription}       
              autoCapitalize={"none"}
              returnKeyType={"next"}         
              multiline
              numberOfLines={5}  
              maxLength={220}
            />
          </View>

          <View style={styles.formInputIntentionContainer}>
            <View style={styles.formInputIntention}>
              <Text style={styles.textTitle}>Intenção </Text>
              <Picker
                selectedValue={intention}
                style={styles.picker}
                onValueChange={(itemValue) => setIntention(itemValue)}
                placeholderText={"Insira uma breve descrição do livro"}
              >
                <Picker.Item label="Empréstimo" value={1} />
                <Picker.Item label="Troca" value={2} />
                <Picker.Item label="Venda" value={3} />
              </Picker>
            </View>
            
            <View style={styles.formInputValue}>
              <Text style={styles.textTitle}>Valor </Text>
              <TextInput
                style={styles.textInput}
                placeholder={"9,99"}
                value={value}
                onChangeText={setValue}       
                autoCapitalize={"none"}
                keyboardType={"numeric"}
                returnKeyType={"next"}
                editable={show}   
                hide={show}
              />
            </View>
          </View>

          <View style={styles.formInputAvaliation}>
            <Text style={styles.textTitleAvaliation}>Avalie o Livro</Text>
            <AirbnbRating
              count={5}
              defaultRating={rating}
              onFinishRating={(itemValue) => setRating(itemValue)}
              size={30}
              showRating={false}
              selectedColor="#09A8FA"
            />
          </View>

          <View style={styles.formButtonRegister}>
            <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
              <View style={styles.actionRegisterCancel}> 
                <Text style={styles.actionTextRegister}>Voltar</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <View style={styles.actionRegister}> 
                <Text style={styles.actionTextRegister}>Concluir</Text>
              </View>
            </TouchableOpacity>
          </View> 
                   
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
