import React, { Component } from 'react';
import { Container, Spinner, Card, CardItem, Body, Label, Button, Text } from 'native-base';
import { styles } from '../styles/baseStyle';

export default class FindMate extends Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Card style={{ alignItems:'center' }}>
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
              style={styles.logInButton}>
              <Text>Cancel</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}