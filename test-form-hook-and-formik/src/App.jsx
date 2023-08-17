import {graphUrl} from './api/index';
import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import GetUser from './components/GetUser';
const errorLink=onError(({graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      alert("Graphql error"+message);
    })
  }
})
const link=from([
  errorLink,
  new HttpLink({uri:"https://api.cartql.com/"}),
]);
const client=new ApolloClient({
  cache:new InMemoryCache(),
  link:link
})
const App = () => {
  return (
    <ApolloProvider client={client}>
      <GetUser />
    </ApolloProvider>
  )
}

export default App