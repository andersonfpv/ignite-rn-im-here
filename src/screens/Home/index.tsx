import { Text, TextInput, View, TouchableOpacity, ScrollView  } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home(){

  const participants = ['Anderson', 'João', 'Maria', 'Cláudia', 'Luana', 'Sérgio', 'Rodrigo', 'Ivone'];

  function handleParticipanteAdd(){
    console.log("Adicionado");
  }

  function handleParticipanteRemove(){
    console.log("Removido");
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
              <Participant 
                key={participant}
                name={participant} 
                onRemove={handleParticipanteRemove}
              />
              ))
        }
      </ScrollView>

    </View>
  )
}