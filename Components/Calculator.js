import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Vibration } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { numberFormat } from '../helpers/helpers';

class Calculator extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      operand_1: "",
      operand_2: "",
      operation: "",
    }
  }

  _writeNumber(charNumber) {
    if(this.state.operation.length == 0){
      if(['', '0'].includes(this.state.operand_1) && ['0', '00'].includes(charNumber)){ // to begin always the number without a zero
        this.setState({
          operand_1: ""
        })
      }else if((this.state.operand_1 == "" && charNumber == ".") || (this.state.operand_1 == "0." && charNumber == ".")){ // for not begin the number with a point or 0...  
        this.setState({
          operand_1: "0."
        })
      }else if((this.state.operand_1.includes(".") && charNumber == ".") || this.state.operand_1.length == 13){

      }else{
        this.setState({
          operand_1: this.state.operand_1.concat(charNumber)
        })
      }
    }else if(this.state.operation.length == 1) {
      if(['', '0'].includes(this.state.operand_2) && ['0', '00'].includes(charNumber)){
        this.setState({
          operand_2: ""
        })
      }else if((this.state.operand_2 == "" && charNumber == ".") || (this.state.operand_2 == "0." && charNumber == ".")){
        this.setState({
          operand_2: "0."
        })
      }else if((this.state.operand_2.includes(".") && charNumber == ".") || this.state.operand_2.length == 13){
        
      }else{
        this.setState({
          operand_2: this.state.operand_2.concat(charNumber)
        })
      }
    }
  }

  _setOperation(theOperation) {
    if(this.state.operand_1 != ""){ // prevent the case when the user choose first an operation then a number and click equal
      this.setState({
        operation: theOperation == "=" ? this.state.operation : theOperation,
        operand_1: this.state.operand_2 != "" ? this._result(this.state.operand_1, this.state.operand_2) : this.state.operand_1,
        operand_2: ""
      })
    }
  }

  _removeTheLastNumber() {
    if(this.state.operand_1.length == 0){
      return
    }else{
      this.setState({
        operand_1: this.state.operand_1.slice(0, -1)
      })
    }
  }

  _clear() {
    this.setState({
      operand_1: "",
      operand_2: "",
      operation: "",
    })
  }

  _result(number1 , number2) {
    if(this.state.operation == "+"){
      return (parseFloat(number1) + parseFloat(number2)).toString().substring(0,13)
    }else if(this.state.operation == "-"){
      return (parseFloat(number1) - parseFloat(number2)).toString().substring(0,13)
    }else if(this.state.operation == "x"){
      return (parseFloat(number1) * parseFloat(number2)).toString().substring(0,13)
    }else if(this.state.operation == "/"){
      if(this.state.operand_2 == "0."){
        return "0"
      }
      return (parseFloat(number1) / parseFloat(number2)).toString().substring(0,13)
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              style={styles.textinput}
              value={ this.state.operand_2.length == 0 ? (this.state.operand_1.length == 0 ? "0" : numberFormat(this.state.operand_1, 3) ) : numberFormat(this.state.operand_2, 3) }
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
            <TouchableOpacity style={[styles.button, {flex: 2}, styles.operation]} onPress={() => {Vibration.vibrate(20), this._clear()} } >
              <Text style={styles.operationColor}>CLEAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operation]} onPress={() => Vibration.vibrate(20)} >
              <Text style={styles.operationColor}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operation]} onPress={() => {Vibration.vibrate(20), this._setOperation("/") } } >
              <Text style={styles.operationColor}>÷</Text>
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
            <TouchableOpacity style={[styles.button, styles.operation]} onPress={() => {Vibration.vibrate(20), this._setOperation("x") } } >
              <Text style={styles.operationColor}>x</Text>
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
            <TouchableOpacity style={[styles.button, styles.operation]} onPress={() => {Vibration.vibrate(20), this._setOperation("-") } } >
              <Text style={styles.operationColor}>-</Text>
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
            <TouchableOpacity style={[styles.button, styles.operation]} onPress={() => {Vibration.vibrate(20), this._setOperation("+") } } >
              <Text style={styles.operationColor}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonLine}>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("0")} } >
              <Text style={styles.numberColor}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber("00")} } >
              <Text style={styles.numberColor}>00</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {Vibration.vibrate(20); this._writeNumber(".")} } >
              <Text style={styles.numberColor}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.operation]} onPress={() => {Vibration.vibrate(20), this._setOperation("=")} } >
              <Text style={styles.operationColor}>=</Text>
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
  operation: {
    backgroundColor: "#3D51B4",
  },
  operationColor: {
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

export default Calculator;