import { Text, TextInput, View, TouchableOpacity, FlatList  } from "react-native";

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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} 
            onRemove={handleParticipanteRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no envento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />  

    </View>
  )
}