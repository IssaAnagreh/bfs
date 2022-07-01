/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {LocalizationProvider} from './lib/contexts/localization/localization.provider';
import {Home} from './screens/home/home';

const App = () => {
  return (
    <SafeAreaProvider>
      <LocalizationProvider>
        <Home />
      </LocalizationProvider>
    </SafeAreaProvider>
  );
};

export default App;
