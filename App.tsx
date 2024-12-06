import React from 'react';

import {client} from './src/apollo';
import {ApolloProvider} from '@apollo/client';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';

function App(): React.JSX.Element {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
