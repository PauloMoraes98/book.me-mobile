import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, Text, Image, Linking, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/bigLogo.png';

import styles from './styles';

export default function Login() {
  //const [login, setLogin] = useState('');  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />    
      </View>

      <View style={styles.body}>

        <Text style={styles.textTitle}>Login </Text>
        <View style={styles.formLogin}>
          <TextInput
            style={styles.textInputUser}
            //value={login}
            onChangeText={e => setTitle(e.target.value)}
          />
          <Feather style={styles.iconLogin} name="user" size={28} color="#FFFFFF" />
        </View>

        <Text style={styles.textPassword}>Senha </Text>
        <View style={styles.formPassword}>
          <TextInput
            style={styles.textInputPassword}
            secureTextEntry={true}
            //value={login}
            onChangeText={e => setTitle(e.target.value)}
          />
          <Feather style={styles.iconLogin} name="lock" size={28} color="#FFFFFF" />
        </View>

        <View style={styles.RememberPassword}> 
          <Text style={styles.textRememberPassword} onPress={() => Linking.openURL('#')}>
            Esqueci minha senha 
          </Text>
        </View>
        
        <View style={styles.buttonEnter}> 
          <TouchableOpacity style={styles.action}>
            <Text style={styles.actionText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.register}> 
          <Feather style={styles.iconRegister} name="log-in" size={24} color="#FFFFFF" />
          <Text style={styles.textRegister} onPress={() => Linking.openURL('#')}>
            Não tenho cadastro
          </Text>
        </View>
      </View>
    </View>
  ) 
}
