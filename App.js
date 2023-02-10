import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation/Navigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import {AuthProvider, useAuthContext} from './src/context/AuthContext';
import {LoaderProvider} from './src/context/LoaderContext';
import LoaderLayout from './src/layout/LoaderLayout';

function MainApp() {
  const {user} = useAuthContext();
  if (user) {
    return <Navigation />;
  }
  return <AuthNavigation />;
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <LoaderProvider>
      <LoaderLayout>
        <AuthProvider>
          <NavigationContainer>
            <MainApp />
          </NavigationContainer>
        </AuthProvider>
      </LoaderLayout>
    </LoaderProvider>
  );
}
