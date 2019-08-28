import React, { Component } from 'react';
import { Container, Header, Left, Icon, Body, Title, Content, Spinner, Card, CardItem, Label, Button, Text } from 'native-base';
import { styles } from '../styles/baseStyle';
import AppFooter from './AppFooter';

export default class FindMate extends Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Header>
          <Body>
            <Title>Find Mate</Title>
          </Body>
        </Header>
        <Content>
          <Card style={{ alignItems: 'center' }}>
            <CardItem header bordered>
              <Text>Finding Mate for Umbralle Sharing...</Text>
            </CardItem>
            <CardItem bordered>
              <Spinner color='blue' />
            </CardItem>
            <CardItem footer bordered>
              <Button
                danger
                block
                rounded
                style={styles.logInButton}
                onPress={()=>this.props.navigation.navigate('HomePage')}>
                <Text>Cancel</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
        <AppFooter />
      </Container>
    );
  }
}