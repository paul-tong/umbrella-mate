import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Badge, Icon, Title, List, ListItem, Thumbnail, Text, Right, Button } from 'native-base';
import { styles } from '../styles/baseStyle';

export default class Invitations extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('MateList')}>
              <Icon name='refresh' />
            </Button>
          </Left>
          <Body>
            <Title>Invitations</Title>
          </Body>
        </Header>
        <Content>
          <Button
            warning
            block
            rounded
            style={styles.logInButton}
            onPress={() => this.props.navigation.navigate('Invitations')}>
            <Text>Refresh</Text>
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
                  <Text>Accept</Text>
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
                  <Text>Accept</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}