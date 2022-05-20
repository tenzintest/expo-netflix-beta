import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { colors, gStyle } from '../constants';
import { useState, useEffect } from 'react';
import { fetchCredits } from '../../servises/servises';
// components
import Header from '../components/Header';
import MyList from './MyList';

const MovieDetail = ({ navigation, route }) => {
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [director, setDirector] = useState('');
  const { movie } = route.params;

  useEffect(() => {
    setLoading(true);
    fetchCredits(movie.id).then((data) => {
      setCredits(data.credits);
      setDirector(data.director);
      setLoading(false);
    });
  }, []);


  return loading ?  (
   <MyList/>
  ) : (
    <View style={gStyle.container}>
      <Image
            source={{
                      uri: `${movie.backdrop_path}`
                    }}
                    resizeMode="stretch"
                    style={{
                      width: 350, 
                      height: 250, 
                      paddingTop: 10, 
                      paddingBottom: 20,
                      paddingVertical: 4,
                      alignSelf: 'center'
                      
                      }}
          />
          <View style={styles.credit}>
        <>
          <Text style={styles.title}>CAST</Text>
          
            <FlatList
              data={credits}
              renderItem={({ item }) => {
                return(
                  <View style={styles.container}>
                    <Text>{item.cast}</Text>
                  </View>
                )
              }}
              horizontal
            />
        </>
        <>
          <Text style={styles.title}>CREW</Text>
          {/* {credits && (
            <FlatList
              data={credits.crew}
              renderItem={({ item }) => <ProfileThumb item={item} />}
              horizontal
            />
          )} */}
        </>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  banner: { width: 150, height: 200 },

  credit: {
    flex: 1,
    padding: 10,
  },

  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#212121',
  },

  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default MovieDetail;
