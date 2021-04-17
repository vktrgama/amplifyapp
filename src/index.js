import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// GraphQl services from Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

//AWS services for auth and GraphQl
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

// import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
