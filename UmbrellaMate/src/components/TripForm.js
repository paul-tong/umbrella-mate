import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { styles } from '../styles/baseStyle';
import AppFooter from './AppFooter';

export default class TripForm extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.props.navigation.openDrawer}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Trip Details - {this.props.navigation.getParam('tripType', 'Share')}</Title>
          </Body>
        </Header>
        <Content>
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
              style={styles.logInButton}
              onPress={()=>this.props.navigation.navigate('MateList')}>
              <Text>Comfirm</Text>
            </Button>
            <Button
              danger
              block
              rounded
              style={styles.logInButton}
              onPress={()=>this.props.navigation.navigate('HomePage')}>
              <Text>Cancel</Text>
            </Button>
          </Form>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}