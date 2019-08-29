import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';

class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('HomePage')}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button
            badge
            vertical
            onPress={() => this.props.navigation.navigate('Invitations')}>
            <Badge><Text>2</Text></Badge>
            <Icon name="alarm" />
            <Text>Alerts</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;