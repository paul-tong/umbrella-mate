import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export class UIStudy extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button>
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}