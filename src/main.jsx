import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterOutlet from './routes/RouterOutlet.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './data/apollo-client.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <RouterOutlet />
    </ApolloProvider>
  </BrowserRouter>,
)
