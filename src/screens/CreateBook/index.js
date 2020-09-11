import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, Linking, Picker, SafeAreaView } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import api from '../../services/api/index';

import styles from './styles';

import Logo from '../../assets/logo/book.me.svg';

export default function Register() {
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState();
  const [intention, setIntention] = useState(1);
  const [value, setValue] = useState();
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (intention === 3){
      setShow(true)
    } else {
      setShow(false)
    }
  }, [intention])
  
  async function handleNewRegister() {
    const data = { name, author, rating, description, intention, value };

    try {
      const newBook = await api.post('/book', data);

    }catch(err) {
      console.log(err)
      alert('Erro ao cadastrar livro, tente novamente.');
    }
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
              numberOfLines={4}  
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
              defaultRating={3}
              onFinishRating={(itemValue) => setRating(itemValue)}
              size={30}
              showRating={false}
              selectedColor="#09A8FA"
            />
          </View>

          <View style={styles.formButton}>
            <View style={styles.formButtonBack}>
              <TouchableOpacity style={styles.button} onPress={() => Linking('#')}>
                <View style={styles.actionBack}> 
                  <Text style={styles.actionTextBack}>Voltar</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.formButtonRegister}>
              <TouchableOpacity style={styles.button} onPress={handleNewRegister}>
                <View style={styles.actionRegister}> 
                  <Text style={styles.actionTextRegister}>Registrar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
