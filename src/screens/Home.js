import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';
import Popular from '../components/Popular';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../../servises/servises';

const Home = () => {
  // on active tab press, scroll to top
  const ref = React.useRef(null);
  useScrollToTop(ref);

  // local state
  const [showHeader, setShowHeader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchNow, setSearchNow] = useState(false);


  React.useEffect(() => {
    setLoading(true);
    fetchMovies(searchTerm, movies).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, [searchNow]);

  console.log(movies);


  const onScroll = (event) => {
    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < offset;

    if (show !== showHeader || offset <= 0) {
      // account for negative value with "bounce" offset
      if (offset <= 0) show = true;

      setShowHeader(show);
    }

    setOffset(currentOffset);
  };

  return (
    <View style={gStyle.container}>
      <HeaderHome show={showHeader} />

      <ScrollView
        ref={ref}
        bounces
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <PromotionBanner />

        <Text style={gStyle.heading}>Top 10 movies</Text>
        <ShowScroller dataset="myList" />

        <Text style={gStyle.heading}>Top 10 horror movies</Text>
        <ShowScroller dataset="myList" />

        <Text style={gStyle.heading}>Top 10 thriller movies</Text>
        <Popular dataset={movies}/>

        <Text style={gStyle.heading}>Top 10 actions movies</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Top 10 sci-fi movies</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Top 10 romance movies</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Top 10 documentaries </Text>
        <ShowScroller />

        <View style={gStyle.spacer3} />
      </ScrollView>

      <Cast />
    </View>
  );
};

export default Home;
