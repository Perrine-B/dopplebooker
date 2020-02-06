import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
import Search from './Search';
export default class CardExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Just type a title of a book to see if you already have it
                </Text>
              </Body>
            </CardItem>
            <Search></Search>
          </Card>
        </Content>
      </Container>
    );
  }
}