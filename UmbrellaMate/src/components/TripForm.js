import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { styles } from '../styles/baseStyle';


export default class TripForm extends Component {
  render() {
    return (
      <Form>
        <Item inlineLabel>
          <Label>Start</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>Range</Label>
          <Input placeholder='m' />
        </Item>
        <Item inlineLabel>
          <Label>Destination</Label>
          <Input />
        </Item>
        <Item inlineLabel>
          <Label>Range</Label>
          <Input placeholder='m' />
        </Item>
        <Item inlineLabel last>
          <Label>Wait Time</Label>
          <Input placeholder='min' />
        </Item>
        <Button
          block
          rounded
          style={styles.logInButton}>
          <Text>Comfirm</Text>
        </Button>
        <Button
          danger
          block
          rounded
          style={styles.logInButton}>
          <Text>Cancel</Text>
        </Button>
      </Form>
    );
  }
}