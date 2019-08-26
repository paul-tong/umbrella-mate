import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
import { Container, Spinner, Card, CardItem, Body, Label, Button, Text } from 'native-base';
import { styles } from '../styles/baseStyle';

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        <Card style={{ alignItems: 'center' }}>
          <CardItem header bordered>
            <Text>Please Rate Your Sharing Experience</Text>
          </CardItem>
          <CardItem bordered>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'gold'}
            />
          </CardItem>
          <CardItem footer bordered>
            <Button
              block
              rounded
              style={styles.logInButton}
              onPress={()=>alert("Confirm")}>
              <Text>Confirm</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
