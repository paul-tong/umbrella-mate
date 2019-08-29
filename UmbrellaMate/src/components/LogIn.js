import React, { Component } from 'react';
import { Container, Header, Left, Title, Body, Right, Badge, Button, Text, Form, Item, Input, Label, List, ListItem, Icon } from 'native-base';
import { styles } from '../styles/baseStyle';

/**
 * For Login, register and reset password
 */
class LogIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errors: [], // erro infomations of the input
		};

		this.submitLogIn = this.submitLogIn.bind(this)
	}

	// log in operation
	submitLogIn() {
		// hard cord log in  credential
		email = '1';
		password = '1';

		// validation for the format of email and password (eg, not valid email, password too short)
		// update error information
		this.setState({
			errors: [
				'email has wrong format',
				'password length should > 3',
				'password should contain number and letter',
			]
		});

		// call back-end function to do validation in DB


		// if logIn success, mantian user info, and jump to home page
		// todo: if is a new user, need to fill the profile first
		if (this.state.email == email && this.state.password == password) {
			this.props.navigation.navigate('HomePage');
		}
		this.props.navigation.navigate('HomePage');
	}

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
						<Input
							textContentType='emailAddress'
							value={this.state.email}
							onChangeText={(text) => this.setState({ email: text })}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Password</Label>
						<Input
							secureTextEntry={true}
							value={this.state.password}
							onChangeText={(text) => this.setState({ password: text })}
						/>
					</Item>
					<Button
						block
						rounded
						style={styles.logInButton}
						onPress={this.submitLogIn}
					>
						<Text>LogIn</Text>
					</Button>
					<Button
						block
						rounded
						style={styles.logInButton}
						onPress={this.checkLogIn}
					>
						<Text>Register</Text>
					</Button>
					<Button
						transparent
						style={styles.resetPasswordButton}>
						<Text>Reset Password</Text>
					</Button>
					<List>
						{
							this.state.errors.map((message, index) => (
								<ListItem key={index}>
									<Icon name='information-circle' />
									<Input disabled placeholder={message} />
								</ListItem>
							))
						}
					</List>
				</Form>
			</Container>
		);
	}
}

export default LogIn;