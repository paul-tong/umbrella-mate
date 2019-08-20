import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {ButtonStyle} from '../styles/buttons'


/**
 * Test TextInput and event handle (function, arrow function)
 */
export class Study extends Component {
    constructor(props) {
      super(props); // need super, so that we can use this
      this.state = {text: ''}; // state of this component (is an object)
      this.addPizza = this.addPizza.bind(this)
    }
  
    // not arrow function, need to bind this, so that it can use this.setState
    addPizza(text) {
        this.setState({
            text: text
        })
    }

    // arrow function, don't need to bind this
    addPizza2 = (text) => {
        this.setState({
            text: text
        })
    }

    render() {
      return (
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={this.addPizza2}
            value={this.state.text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
      );
    }
  }

  /**
   * Test StyleSheet
   */
export class StyleTest extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Hello world!</Text>
                <Text style={ButtonStyle.normal}>Click Me </Text>
                <Button 
                    style={ButtonStyle.normal}
                    title="click me"
                />
            </View>
        );
    }
}

/**
 * test flex-box layout
 */
export class FlexTest2 extends Component {
    render() {
        return (
          // 尝试把`alignItems`改为`flex-start`看看
          // 尝试把`justifyContent`改为`flex-end`看看
          // 尝试把`flexDirection`改为`row`看看
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50,backgroundColor: 'steelblue'}} />
          </View>
        );
      }
}

export class FlexTest1 extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',}}>
                <View style={{flex: 0.5, backgroundColor: 'red'}} />
                <View style={{flex: 9, flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 3, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{flex: 0.5, backgroundColor: 'green'}} />
            </View>
        );
    }
}



