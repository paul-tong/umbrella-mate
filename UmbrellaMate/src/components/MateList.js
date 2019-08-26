import React, { Component } from 'react';
import { Container, Icon, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class MateList extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}