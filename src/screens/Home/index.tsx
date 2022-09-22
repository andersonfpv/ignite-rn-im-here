import { Text, TextInput, View, TouchableOpacity  } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home(){

  function handleParticipanteAdd(){
    console.log("Botão clicado");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipanteAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Anderson"/>
      <Participant name="Cláudia"/>
      <Participant name="Maria"/>
    </View>
  )
}