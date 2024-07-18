import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30
    },
    logoContainer: {
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formShow: {

    },
    formHide: {
        display: 'none'
    },
    button: {
        marginTop: 5,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#333333'
    },
    text: {
        fontSize: 24,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 2.25,
        color: '#FFFFFF'
    },
    formView: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    ico:{
        width:'100%',
    },
    label: {
        width:'100%',
        fontSize: 16,
        paddingLeft:30,
        paddingTop:10
    },
    inputView: {
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'left',
    },
    input: {
        width: '100%',
        color: 'black',
        fontSize: 15,
        height: 40,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        textAlign: 'left'
    },
    inputTextArea: {
        width: '100%',
        color: 'black',
        fontSize: 15,
        borderWidth: 2,
        borderRadius: 8,
        padding: 10,
        textAlign: 'left',
        textAlignVertical:'top'
    },
    hint: {
        width:'100%',
        fontSize: 15,
        paddingLeft:30,
        paddingTop:5,
        marginBottom:15
    },
});

export default styles