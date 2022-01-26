import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0038A8" />
      <Routes />
    </>
  );
}
