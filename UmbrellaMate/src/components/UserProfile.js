import React, { Component } from 'react';
import {  Button, Text, Form, Item, Input, Label, List, ListItem, Icon, Picker } from 'native-base';
import { styles } from '../styles/baseStyle';

/**
 * For complete profile
 */
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: undefined
    };

    this.changeSelectedGender = this.changeSelectedGender.bind(this);
  }

  changeSelectedGender(value) {
    this.setState({
      selectedGender: value
    });
  }

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Nick Name</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Phone Number</Label>
          <Input textContentType='emailAddress' />
        </Item>
        <Item picker style={{ marginTop: 20 }}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.selectedGender}
            onValueChange={this.changeSelectedGender}
            style={{ color: 'black' } /*change color of the picker*/}
          >
            <Picker.Item label="  Select Gender: " value="None" />
            <Picker.Item label="  Male" value="Male" />
            <Picker.Item label="  Female" value="Female" />
            <Picker.Item label="  Other" value="Other" />
          </Picker>
        </Item>
        <Button
          block
          rounded
          style={styles.logInButton}>
          <Text>Submit</Text>
        </Button>
        <List>
          <ListItem>
            <Icon name='information-circle' />
            <Input disabled placeholder='todo: verify phone number' />
          </ListItem>
          <ListItem>
            <Icon name='information-circle' />
            <Input disabled placeholder='todo: optize picker' />
          </ListItem>
        </List>
      </Form>
    );
  }
}

export default UserProfile;