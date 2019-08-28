import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Icon, Title, Card, CardItem, Spinner, Text, Button } from 'native-base';
import { styles } from '../styles/baseStyle';

export default class CurrentSharing extends Component {
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
            <Title>Sharing Umbrella</Title>
          </Body>
        </Header>
        <Content>
          <Card style={{ alignItems: 'center' }}>
            <CardItem header bordered>
              <Text>Sharing with Peng Tong...</Text>
            </CardItem>
            <CardItem bordered>
              <Spinner color='blue' />
            </CardItem>
          </Card>
          <Button
            success
            block
            rounded
            style={styles.logInButton}
            onPress={() => this.props.navigation.navigate('Review')}>
            <Text>Arrive</Text>
          </Button>
          <Button
            danger
            block
            rounded
            style={styles.logInButton}
            onPress={() => this.props.navigation.navigate('Review')}>
            <Text>Interrupt Sharing</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}