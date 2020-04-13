import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Vibration } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  _writeNumber(charNumber) {
    this.setState({
      text: this.state.text.concat(charNumber)
    })
  }

  _removeTheLastNumber() {
    if(this.state.text.length == 0){
      return
    }else{
      this.setState({
        text: this.state.text.slice(0, -1)
      })
    }
  }

  _clear() {
    this.setState({
      text: ""
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              style={styles.textinput}
              value={this.state.text.length == 0 ? "0" : this.state.text}
              textAlign="right"
              showSoftInputOnFocus={false}
              onChangeText={text => console.log(text)}
              onSubmitEditing={() => console.log('on submit')}
            />
          </View>
          <TouchableOpacity onPress={() => {Vibration.vibrate(20), this._removeTheLastNumber()} } >
            <Icon name="delete" size={25} style={{marginBottom: 12,marginHorizontal: 6}} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={[styles.button, {flex: 2}, styles.operand]} onPress={() => {Vibration.vibrate(20), this._clear()} } >
              <Text style={styles.operandColor}>CLEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => Vibration.vibrate(20)} >
              <Text style={styles.operandColor}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => Vibration.vibrate(20)} >
              <Text style={styles.operandColor}>÷</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("7")} } >
              <Text style={styles.numberColor}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("8")} } >
              <Text style={styles.numberColor}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("9")} } >
              <Text style={styles.numberColor}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => Vibration.vibrate(20)} >
              <Text style={styles.operandColor}>x</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("4")} } >
              <Text style={styles.numberColor}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("5")} } >
              <Text style={styles.numberColor}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("6")} } >
              <Text style={styles.numberColor}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => Vibration.vibrate(20)} >
              <Text style={styles.operandColor}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("1")} } >
              <Text style={styles.numberColor}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("2")} } >
              <Text style={styles.numberColor}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("3")} } >
              <Text style={styles.numberColor}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => Vibration.vibrate(20)} >
              <Text style={styles.operandColor}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("0")} } >
              <Text style={styles.numberColor}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("00")} } >
              <Text style={styles.numberColor}>00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber(",")} } >
              <Text style={styles.numberColor}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operand]} onPress={() => Vibration.vibrate(20)} >
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
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  textinput: {
    fontSize: 40,
    fontFamily: "sans-serif-light",
    color: "#303030"
  },
  buttonContainer: {
    flex: 6,
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