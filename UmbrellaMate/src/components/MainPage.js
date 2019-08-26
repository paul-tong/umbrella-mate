import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Title, List, ListItem, Content, Form, Item, Input, Picker, Icon, Label, Badge, Footer, FooterTab, Button, Textarea, Text, Grid, Col, Row } from 'native-base';
import { Drawer } from 'native-base';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import LogIn from './LogIn';
import UserProfile from './UserProfile';
import { styles } from '../styles/baseStyle';
import TripHisory from './TripHistory';
import TripForm from './TripForm';
import FindMate from './FindMate';
import MateList from './MateList';
import Invitations from './Invitations';
import Review from './Review';

/**
 * Main page 
 */
class MainPage extends Component {
  constructor(props) {
    super(props);

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (
      <Container>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<Sidebar closeDrawer={this.closeDrawer}/>}
          onClose={() => this.closeDrawer()} >
          <AppHeader openDrawer={this.openDrawer}/>
          <Content contentContainerStyle={{ flexGrow: 1 }}>
            <Review />
          </Content>
          <AppFooter />
        </Drawer>
      </Container>
    );
  }
}

export default MainPage;