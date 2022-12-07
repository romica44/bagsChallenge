import './App.css';
import Index from './Components/Index';
import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Index />
      </div>
    </ChakraProvider>
  );
}


