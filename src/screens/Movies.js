import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import { FlatList } from 'react-native-gesture-handler';


const movies = [
  {
    id: 1,
    poster: "https://images.unsplash.com/photo-1635805739892-ab7b431400f7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
  },
  {
    id: 2,
    poster: "https://images.unsplash.com/photo-1635805739892-ab7b431400f7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
  }, {
    id: 3,
    poster: "https://images.unsplash.com/photo-1635805739892-ab7b431400f7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774"
  }
]



const Movies = () => (

  
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer12} />

    <View style={gStyle.pHHalf}>
      <Text style={gStyle.heading}>Movies</Text>
      <FlatList 
        data={movies}
        renderItem={({ item, index }) => {
          return (
            <View
            style={{  flex: 1, alignItems: 'center', justifyContent: 'center',
            paddingTop: 10, paddingBottom: 15}}>
              {/* <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Movie', { movie: item })
                }> */}
                <Image
                  source={{
                    uri: `${item.poster}`,
                  }}
                  resizeMode="stretch"
                  style={{
                     width: 350, 
                     height: 250, 
                     paddingTop: 10, 
                     paddingBottom: 20,
                     paddingVertical: 4,
                    
                    }}
                />

                <Text style={{ color: "white"}}>{item.title}</Text>
              {/* </TouchableOpacity> */}
            </View>
          );
        }}
      />
    </View>

    <Cast />
  </View>
);

export default Movies;
