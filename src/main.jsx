import ReactDOM from 'react-dom/client'
import RouterOutlet from './routes/RouterOutlet.jsx'
import { ApolloProvider } from '@apollo/client'
import client from './data/apollo-client.js'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ApolloProvider client={client}>
      <RouterOutlet />
    </ApolloProvider>
  </HashRouter>,
)
