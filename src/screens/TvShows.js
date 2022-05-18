import * as React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, View, Text, SectionList } from 'react-native';
import { colors, gStyle, images } from '../constants';
import { fetchMovies } from '../../servises/servises';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import { ScrollView } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';



const TvShows = () => {
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

  console.log(movies);

   return(
      <View style={gStyle.container}>
        <HeaderHome show />

        <View style={gStyle.spacer12} />

        <View style={gStyle.pHHalf}>
          <Text style={gStyle.heading}>TV Shows</Text>
          <Text style={gStyle.heading}></Text>
        </View>
        <ScrollView>
        <View style={gStyle.pHHalf}>
            <FlatList
              data={movies}
              numColumns={2}
              columnWrapperStyle={{justifyContent: 'space-between'}} 
              renderItem={({ item, index }) => {
                return (
                  <View
                  style={{  paddingTop: 10, paddingBottom: 15, paddingLeft: 10, paddingRight: 10 }}>
                    {/* <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Movie', { movie: item })
                      }> */}
                      <Image
                        source={{
                          uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
                        }}
                        resizeMode="cover"
                        style={{ width: 180, height: 180, paddingTop: 10, paddingBottom: 10 }}
                      />

                      <Text style={{ color: "white"}}>{item.title}</Text>
                    {/* </TouchableOpacity> */}
                  </View>
                );
              }}
            />      
           
        </View>
        </ScrollView>
      </View>
   );
   };


   const styles = StyleSheet.create({
    rectangle: {
      backgroundColor: colors.infoGrey,
      height: 131,
      marginRight: 8,
      width: 91
    },
    rectangleImage: {
      height: 131,
      marginRight: 8,
      resizeMode: 'contain',
      width: 91
    },
    round: {
      backgroundColor: colors.infoGrey,
      borderRadius: 48,
      height: 96,
      marginRight: 8,
      width: 96
    },
    roundImage: {
      height: 96,
      marginRight: 8,
      resizeMode: 'contain',
      width: 96
    }
  });
export default TvShows;
