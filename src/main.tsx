import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Helmet } from 'react-helmet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Helmet>
      <meta charSet="utf-8" />
      <title>This is My Portfolio</title>
      <link rel="canonical" href="https://muhislah.netlify.app" />
      <meta name="description" content="This website contain Muhamad Islahuddin Portfolios" />
    </Helmet>
  </React.StrictMode>
)
