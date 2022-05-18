import * as React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { colors, gStyle, images } from '../constants';

import mockData from '../mockdata/data';

const Popular = ({ dataset, type }) => {
  const dataArray = Object.values(dataset);

  return (
    <FlatList
      contentContainerStyle={gStyle.pHHalf}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
      
        let renderItem = <View style={styles[type]} />;

        if (item.image) {
          renderItem = (
            // <Image source={images[item.image]} style={styles[`${type}Image`]} />
           <>
            <Image
            source={{
              uri: `http://image.tmdb.org/t/p/w780${item.poster_path}`,
            }}
            style={styles[`${type}Image`]}
          />
          <Text>{item.title}</Text>
          </>
            );
        }

        return renderItem;
      }}
    showsHorizontalScrollIndicator={false}
  />
  );
};


Popular.defaultProps = {
  dataset: 'dumbData',
  type: 'rectangle'
};


Popular.propTypes = {
  // optional
  // dataset: PropTypes.object,
  type: PropTypes.string
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

export default Popular;
