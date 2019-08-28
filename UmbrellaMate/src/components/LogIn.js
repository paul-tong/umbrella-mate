import React, { Component } from 'react';
import { Container, Header, Left, Title, Body, Right, Badge, Button, Text, Form, Item, Input, Label, List, ListItem, Icon } from 'native-base';
import { styles } from '../styles/baseStyle';

/**
 * For Login, register and reset password
 */
class LogIn extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title style={{ marginLeft: 20 }}>Umbrella Mate</Title>
					</Body>
				</Header>
				<Form>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input textContentType='emailAddress' />
					</Item>
					<Item floatingLabel last>
						<Label>Password</Label>
						<Input secureTextEntry={true} />
					</Item>
					<Button
						block
						rounded
						style={styles.logInButton}
						onPress={() => this.props.navigation.navigate("HomePage")}>
						<Text>LogIn</Text>
					</Button>
					<Button
						block
						rounded
						style={styles.logInButton}>
						<Text>Register</Text>
					</Button>
					<Button
						transparent
						style={styles.resetPasswordButton}>
						<Text>Reset Password</Text>
					</Button>
					<List>
						<ListItem>
							<Icon name='information-circle' />
							<Input disabled placeholder='todo: show error message' />
						</ListItem>
						<ListItem>
							<Icon name='information-circle' />
							<Input disabled placeholder='todo: auto fill email' />
						</ListItem>
						<ListItem>
							<Icon name='information-circle' />
							<Input disabled placeholder='todo: auto login' />
						</ListItem>
					</List>
				</Form>
			</Container>
		);
	}
}

export default LogIn;