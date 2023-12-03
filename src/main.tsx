import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <header className="App-header">
          <a className="text-h6" href="/">
              <img src='/assets/petit-logo-ecrit.svg' alt="logo"/>
              <br/>
              <span className="text-description">Annecy, France</span>
          </a>
          <nav>
              <a className="text-h6" href="/">CHIBRE.</a>
              <a className="text-h6" href="/">CHATTE.</a>
              <a className="text-h6" href="/">ABOUT.</a>
              <div className="mail">
                  <a href="mailto:dimitri.dechamp@gmail.com">
                      <img src="/assets/enveloppe.svg" alt="enveloppe"/>
                  </a>
              </div>
          </nav>
      </header>
    <App />
  </React.StrictMode>,
)
