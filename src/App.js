import React from 'react'
import './App.css'
import Router from './common/Router/Router.jsx'
import StoreProvider from './common/store/StoreProvider'

function App() {
  return (
    <div className='App'>
      <StoreProvider>
        <header className='App-header'>
          block.one
        </header>

        <Router />

      </StoreProvider>
    </div>
  )
}

export default App
