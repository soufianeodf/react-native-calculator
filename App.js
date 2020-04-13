import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textinput}
            defaultValue="0"
            textAlign="right"
            showSoftInputOnFocus={false}
            onChangeText={text => console.log(text)}
            onSubmitEditing={() => console.log('on submit')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={[styles.button, {flex: 2}, styles.operand]} onPress={() => console.log('on press button')} >
              <Text style={styles.operandColor}>CLEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => console.log('on press button')} >
              <Text style={styles.operandColor}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => console.log('on press button')} >
              <Text style={styles.operandColor}>÷</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => console.log('on press button')} >
              <Text style={styles.operandColor}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => console.log('on press button')} >
              <Text style={styles.operandColor}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => console.log('on press button')} >
              <Text style={styles.operandColor}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log('on press button')} >
              <Text style={styles.numberColor}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => console.log('on press button')} >
              <Text style={styles.operandColor}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

}// class

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    height: '25%',
    justifyContent: "flex-end"
  },
  textinput: {
    marginTop: '10%',
    fontSize: 40,
    fontFamily: "sans-serif-light",
    color: "#303030"
  },
  buttonContainer: {
    flex: 1,
  },
  buttonLine: {
    flex:1,
    flexDirection: "row"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0.4,
  },
  operand: {
    backgroundColor: "#3D51B4",
  },
  operandColor: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "sans-serif-light"
  },
  numberColor: {
    fontSize: 30,
    fontFamily: "sans-serif-light",
    color: "#303030"
  }
})

export default App;