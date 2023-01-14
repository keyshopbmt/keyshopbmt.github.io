import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default class Example extends Component {
  render() {
    return (
      <div>

      <FacebookProvider appId="123456789">
        <Page href="https://www.facebook.com/tienphatexpertkeyworld/" tabs="timeline" />
      </FacebookProvider>    
      </div>
    );
  }
}
