import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';


export default class Head extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Dopplebooker</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}