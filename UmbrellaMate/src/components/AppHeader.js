import React, { Component } from 'react';
import { Header, Left, Button, Right, Icon, Body, Title, Badge, Text } from 'native-base';

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.props.navigation.openDrawer}>
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
    );
  }
}

export default AppHeader;