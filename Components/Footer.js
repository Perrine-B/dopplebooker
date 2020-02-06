import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class Foot extends Component {
  render() {
    return (
      <Container>

        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="ios-journal" />
              <Text>Ma bibliothèque</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}