import React, { Component } from 'react';
import { Grid, Row, Col, Button, Icon, Text } from 'native-base';
import { styles } from '../styles/baseStyle';

class StartPage extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Button iconLeft style={{ ...styles.startPageButton, backgroundColor: 'cornflowerblue', }}>
            <Icon name='umbrella' />
            <Text uppercase={false}>Share Umbrella</Text>
          </Button>
        </Row>
        <Row>
          <Button iconLeft light style={{ ...styles.startPageButton, }}>
            <Icon name='hand' />
            <Text uppercase={false}>Request Umbrella</Text>
          </Button>
        </Row>
      </Grid>
    );
  }
}

export default StartPage;