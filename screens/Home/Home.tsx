import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View, ScrollView } from 'react-native';
import styles from './Style';
import { BatLogo } from "../../src/components/BatLogo/BatLogo";
import { BatIco } from "../../src/components/BatIco/BatIco";

export default function Home() {

    const [isFormActive, setIsFormActivate] = useState(false)

    function handleForm() {
        setIsFormActivate((oldValue: boolean) => {
            return !oldValue
        })
    }

    return (
        <View style={styles.appContainer}>

            <ScrollView style={isFormActive ? styles.formShow : styles.formHide}>

                <View style={styles.formView}>
                    <View style={styles.ico}>
                        <BatIco />
                    </View>
                    <Text style={styles.label}>Nome</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome' >
                        </TextInput>
                    </View>
                    <Text style={styles.label}>Telefone</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            keyboardType="phone-pad"
                            textContentType="telephoneNumber"
                            style={styles.input}
                            placeholder='Telefone' >
                        </TextInput>
                    </View>
                    <Text style={styles.label}>Localização atual</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={styles.inputTextArea}
                            placeholder='Informe onde você está' >
                        </TextInput>
                    </View>
                    <Text style={styles.label}>Observação</Text>
                    <View style={styles.inputView}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            style={styles.inputTextArea}
                            placeholder='Utilize este campo para informações complementares' >
                        </TextInput>
                    </View>
                    <Text style={styles.hint}>Quanto melhor a informação mais eficiente o atendimento</Text>
                    
                    <View style={styles.inputView}>
                        <Pressable style={styles.button} onPress={handleForm}>
                            <Text style={styles.text}>Enviar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>

            <View style={isFormActive ? styles.formHide : styles.formShow}>
                <View style={styles.logoContainer}>
                    <BatLogo />
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={handleForm}>
                        <Text style={styles.text}>activate bat signal</Text>
                    </Pressable>
                </View>
            </View>

            <StatusBar style="dark" />
        </View>
    )
}