import React, { Component } from 'react';
import { Container, Header, Body, Title, Button, Text, Form, Item, Input, Label, List, ListItem, Icon, Picker } from 'native-base';
import { styles } from '../styles/baseStyle';

/**
 * For complete profile
 */
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      gender: undefined,
      errors: [], // erro infomations of the input
    };

    this.submitProfile = this.submitProfile.bind(this);
  }

  changeSelectedGender(value) {
    this.setState({
      selectedGender: value
    });
  }

  submitProfile() {
    // alert(this.state.name + " " + this.state.phone + " " + this.state.gender);

    // validation for the format of inputs
    // update error information
    this.setState({
      errors: [
        'phone number is not valid',
        'user name is already taken',
      ]
    });

    // call back-end function to insert info in DB

    // if success, mantian user info, and jump to home page
    // todo: varify phone by text message
    this.props.navigation.navigate('HomePage');
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title style={{ marginLeft: 20 }}>Complete Profile</Title>
          </Body>
        </Header>
        <Form>
          <Item floatingLabel>
            <Label>Nick Name</Label>
            <Input
              value={this.state.name}
              onChangeText={(text) => this.setState({ name: text })}
            />
          </Item>
          <Item floatingLabel>
            <Label>Phone Number</Label>
            <Input
              value={this.state.phone}
              onChangeText={(text) => this.setState({ phone: text })}
            />
          </Item>
          <Item picker style={{ marginTop: 20 }}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.gender}
              onValueChange={(value) => this.setState({ gender: value })}
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
            style={styles.logInButton}
            onPress={this.submitProfile}
          >
            <Text>Submit</Text>
          </Button>
          <List>
            {
              this.state.errors.map((message, index) => (
                <ListItem key={index}>
                  <Icon name='information-circle' />
                  <Input disabled placeholder={message} />
                </ListItem>
              ))
            }
          </List>
        </Form>
      </Container>
    );
  }
}


export default UserProfile;