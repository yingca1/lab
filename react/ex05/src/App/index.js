import React from 'react';
import './App.css';
import Header from './Header';
import { ResizableLogo as Logo } from './Logo';
import { ResizableGreeting as Greeting } from './Greeting';
import Link from './Link';
import ThemeProvider from './ThemeProvider'

const App = () => (
  <div className="App">
    <ThemeProvider theme={'colorful'} >
      <Header>
        <Logo />
        <Greeting>
         {'Welcom to '}
         <Link href={'https://facebook.github.io/react'}>
         {'React'}
         </Link>
        </Greeting>
      </Header>
    </ThemeProvider>
  </div>
)

export default App;
