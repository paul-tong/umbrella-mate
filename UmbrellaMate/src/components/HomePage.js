import React, { Component } from 'react';
import { Container, Header, Left, Title, Body, Right, Badge, Grid, Row, Col, Button, Icon, Text } from 'native-base';
import { styles } from '../styles/baseStyle';
import AppFooter from './AppFooter';

class HomePage extends Component {
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
            <Title>Umbrella Mate</Title>
          </Body>
        </Header>
        <Grid>
          <Row>
            <Button
              iconLeft
              style={{ ...styles.startPageButton, backgroundColor: 'cornflowerblue', }}
              onPress={() => this.props.navigation.navigate('TripForm', {tripType: 'Share'})}>
              <Icon name='umbrella' />
              <Text uppercase={false}>Share Umbrella</Text>
            </Button>
          </Row>
          <Row>
            <Button
              iconLeft
              light
              style={{ ...styles.startPageButton, }}
              onPress={() => this.props.navigation.navigate('TripForm', {tripType: 'Request'})}>
              <Icon name='hand' />
              <Text uppercase={false}>Request Umbrella</Text>
            </Button>
          </Row>
        </Grid>
        <AppFooter />
      </Container>
    );
  }
}

export default HomePage;