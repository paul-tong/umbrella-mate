import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Left, Right, Body, Title, List, ListItem, Content, Form, Item, Input, Picker, Icon, Label, Badge, Footer, FooterTab, Button, Textarea, Text, Grid, Col, Row } from 'native-base';

const styles = StyleSheet.create({
  logInButton: {
    marginHorizontal: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  resetPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});


/**
 * Main page 
 */
class UI extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Umbrella Mate</Title>
          </Body>
          <Right>
            <Button transparent>
              <Badge style={{ position: 'absolute' }}><Text>2</Text></Badge>
              <Icon name='heart' />
            </Button>
          </Right>
        </Header>
        <Grid>
          <Row>
            <Button iconLeft style={{ width: '100%', height: '100%', backgroundColor: 'cornflowerblue', justifyContent: "center"}}>
              <Icon name='umbrella' />
              <Text uppercase={false}>Share Umbrella</Text>
            </Button>
          </Row>
          <Row>
            <Button iconLeft light style={{ width: '100%', height: '100%', justifyContent: "center"}}>
              <Icon name='hand' />
              <Text uppercase={false}>Request Umbrella</Text>
            </Button>
          </Row>
        </Grid>
        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

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
      <Container>
        <Header>
          <Body style={{ alignItems: 'center' }}>
            <Title>Please Complete Your Profile</Title>
          </Body>
        </Header>
        <Content>
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
        </Content>
      </Container>
    );
  }
}

/**
 * For Login, register and reset password
 */
class LogIn extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={{ alignItems: 'center' }}>
            <Title>Umbrella Mate</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input textContentType='emailAddress' />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Button
              block
              rounded
              style={styles.logInButton}>
              <Text>LogIn</Text>
            </Button>
            <Button
              block
              rounded
              style={styles.logInButton}>
              <Text>Register</Text>
            </Button>
            <Button
              transparent
              style={styles.resetPasswordButton}>
              <Text>Reset Password</Text>
            </Button>
            <List>
              <ListItem>
                <Icon name='information-circle' />
                <Input disabled placeholder='todo: show error message' />
              </ListItem>
              <ListItem>
                <Icon name='information-circle' />
                <Input disabled placeholder='todo: auto fill email' />
              </ListItem>
              <ListItem>
                <Icon name='information-circle' />
                <Input disabled placeholder='todo: auto login' />
              </ListItem>
            </List>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default UI;