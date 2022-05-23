import * as React from 'react';
import { Text, View, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import { gStyle } from '../constants';
import { useState, useEffect } from 'react';
import MovieDetail from './MovieDetail';


// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import { fetchMovies } from '../../servises/servises';
import MovieDetailApi from './MovieDetailApi';

const MyList = ({ navigation }) => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchNow, setSearchNow] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchMovies(searchTerm, movies).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [searchNow]);

  return(
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer12} />
    <ScrollView>
    <View style={gStyle.pHHalf}>
      <Text style={gStyle.heading}>My List</Text>
      <FlatList 
        data={movies}
        renderItem={({ item, index }) => {
          return (
            <View
            style={{  flex: 1, alignItems: 'center', justifyContent: 'center',
            paddingTop: 10, paddingBottom: 15}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MovieDetailApi', { movie: item })
                }>
                <Image
                  source={{
                    uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                  }}
                  resizeMode="stretch"
                  style={{
                     width: 350, 
                     height: 380, 
                     paddingTop: 10, 
                     paddingBottom: 20,
                     paddingVertical: 4,
                    
                    }}
                />

                <Text style={{ color: "white"}}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>

    <Cast />
    </ScrollView>
  </View>
  )
      };

export default MyList;
