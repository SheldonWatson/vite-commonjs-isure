import React, { Suspense, useState } from 'react'
import { img, test } from 'vite-dev-demo-sheldon'
import logo from './logo.svg'
import './App.css'
// import Search from '@material-ui/icons/Search'

// const Search =  React.lazy(() => import('@material-ui/icons/Search'))
const Child =  React.lazy(() => import('./child'))
function App() {
  const [count, setCount] = useState(0)
  // console.log(Search, 'Search')
  console.log(Child, 'Child')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <img src={img} />
      <Suspense fallback=''>
        {/* <Search /> */}
        <Child />
      </Suspense>
    </div>
  )
}

export default App
