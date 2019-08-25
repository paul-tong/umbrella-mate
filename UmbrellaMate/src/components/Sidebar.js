import React, { Component } from 'react';
import { Content, Text, Button, Icon } from 'native-base';

class Sidebar extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: 'skyblue' }}>
        <Button transparent onPress={() => this.props.closeDrawer()}>
          <Icon name='arrow-left' />
        </Button>
      </Content>
    );
  }
}

export default Sidebar;
