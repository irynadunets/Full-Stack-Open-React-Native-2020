import  Main  from './src/components/Main';
import React from 'react';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}
