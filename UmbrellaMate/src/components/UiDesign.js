import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Body, Title, List, ListItem, Content, Form, Item, Input, Icon, Label, Footer, Button, Textarea, Text, Grid, Col } from 'native-base';

class UI extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Body style={{alignItems: 'center'}}>
                <Title>Umbrella Mate</Title>
            </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input textContentType = 'emailAddress' />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Button 
                block
                rounded
                style={{marginHorizontal: 5, marginTop: 10, alignItems: 'center'}}>
                <Text>Register</Text>
            </Button>
            <Button 
                block
                rounded
                style={{marginHorizontal: 5, marginTop: 10, alignItems: 'center'}}>
                <Text>LogIn</Text>
            </Button>     
            <Button 
                transparent
                style={{marginTop: 10, alignItems: 'center', alignSelf: 'flex-end'}}>
                <Text>Reset Password</Text>
            </Button>  
            <List>
                <ListItem>
                    <Icon name='close-circle' />
                    <Input disabled placeholder='todo: show error message'/>
                </ListItem>
                <ListItem>
                    <Icon name='close-circle' />
                    <Input disabled placeholder='todo: auto fill email'/>
                </ListItem>    
                <ListItem>
                    <Icon name='close-circle' />
                    <Input disabled placeholder='todo: auto login'/>
                </ListItem>                           
            </List> 
          </Form>
        </Content>
        <Footer></Footer>
      </Container>
    );
  }
}

export default UI;