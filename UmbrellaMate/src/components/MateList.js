import React, { Component } from 'react';
import { Grid, Col, Container, Content, Header, Left, Body, Icon, Title, List, ListItem, Thumbnail, Text, Right, Button } from 'native-base';
import { styles } from '../styles/baseStyle';
import AppFooter from './AppFooter';

export default class MateList extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Mates Found for You</Title>
          </Body>
        </Header>
        <Content>
          <Button
            danger
            style={styles.logInButton}
            onPress={() => this.props.navigation.navigate('HomePage')}>
            <Text>Stop</Text>
          </Button>
          <Button transparent style={{ alignSelf: 'flex-end' }}>
            <Icon name='refresh' />
          </Button>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png' }} />
              </Left>
              <Body>
                <Text>Peng Tong</Text>
                <Text note numberOfLines={1}>start 100m away | end 250m away</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ping</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png' }} />
              </Left>
              <Body>
                <Text>Duo Zhang</Text>
                <Text note numberOfLines={1}>start 120m away | end 250m away</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Ping</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}