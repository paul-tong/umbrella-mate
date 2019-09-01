import React, { Component } from 'react';
import { Container, Header, Left, Body, Title, Icon, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { styles } from '../styles/baseStyle';
import AppFooter from './AppFooter';
import { View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { requestLocationPermission } from '../utils/PermissionRequest';
import { getLocationAdress } from '../utils/APICalls';

export default class TripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startPosition: {
        latitude: null,
        longitute: null,
        timestamp: null,
        address: null,
      }
    }
  }

  // get current location
  componentDidMount() {
    requestLocationPermission();
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          startPosition: {
            latitude: position.coords.latitude,
            longitute: position.coords.longitude,
            timestamp: position.timestamp,
            address: getLocationAdress(position.coords.latitude, position.coords.longitude),
          },
        })

      },
      (error) => {
        alert("Cannot get location. Abort this operation.");
        this.props.navigation.navigate('HomePage');
      },
      { enableHighAccuracy: true, timeout: 15000}
    );
  }

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
            <Title>Trip Details - {this.props.navigation.getParam('tripType', 'Share')}</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Text> latitude: {this.state.startPosition.latitude}</Text>
            <Text> longitude:  {this.state.startPosition.longitute}</Text>
            <Text> timestamp:  {this.state.startPosition.timestamp}</Text>
          </Form>
          <Form>
            <Item inlineLabel>
              <Label>Start</Label>
              <Input editable={false} placeholder={this.state.startPosition.address} />
            </Item>
            <Item inlineLabel>
              <Label>Range</Label>
              <Input placeholder='m' />
            </Item>
            <Item inlineLabel>
              <Label>Destination</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Range</Label>
              <Input placeholder='m' />
            </Item>
            <Item inlineLabel last>
              <Label>Wait Time</Label>
              <Input placeholder='min' />
            </Item>
            <Button
              block
              rounded
              style={styles.logInButton}
              onPress={() => this.props.navigation.navigate('MateList')}>
              <Text>Comfirm</Text>
            </Button>
            <Button
              danger
              block
              rounded
              style={styles.logInButton}
              onPress={() => this.props.navigation.navigate('HomePage')}>
              <Text>Cancel</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}