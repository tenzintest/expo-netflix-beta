import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from '../screens/Home';
import TvShowsScreen from '../screens/TvShows';
import MoviesScreen from '../screens/Movie';
import MyListScreen from '../screens/MyList';
import MovieDetail from '../screens/MovieDetail';
import MovieDetailApi from '../screens/MovieDetailApi';

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
    <Stack.Screen
      name="TvShows"
      component={TvShowsScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Movies"
      component={MoviesScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />

    <Stack.Screen
      name="MoviesDetail"
      component={MovieDetail}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
      />

    <Stack.Screen
      name="MoviesDetailApi"
      component={MovieDetailApi}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
      />
    <Stack.Screen
      name="MyList"
      component={MyListScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />

  </Stack.Navigator>
);
