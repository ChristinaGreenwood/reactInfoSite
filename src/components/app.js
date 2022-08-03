import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import ContentList from './ContentList.js';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
            <Header />
            <ContentList />
            <Footer />
      </div>
    );
  }
}