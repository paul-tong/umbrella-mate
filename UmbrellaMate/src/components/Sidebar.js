import React from "react";
import { Image } from "react-native";
import {
  Grid,
  Row,
  Header,
  Left,
  Body,
  Right,
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
} from "native-base";

class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 120 }}>
          <Left>
            <Grid style={{ alignSelf: 'center', marginTop: 20 }}>
              <Row>
                <Image
                  square
                  style={{
                    height: 50,
                    width: 40,
                  }}
                  source={{
                    uri:
                      "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
                  }}
                />
              </Row>
              <Row>
                <Text>Peng</Text>
              </Row>
            </Grid>
          </Left>
          <Right>
            <Button icon transparent onPress={this.props.closeDrawer}>
              <Icon name='refresh' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem button>
              <Text>History Trips</Text>
            </ListItem>
            <ListItem button>
              <Text>Settings</Text>
            </ListItem>
            <ListItem button>
              <Text>New Version</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}



export default Sidebar;
