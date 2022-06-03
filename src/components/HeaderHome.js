import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, device, fonts, gStyle, images } from '../constants';

// components
import TouchText from './TouchText';

const HeaderHome = ({ all, show }) => {
  const navigation = useNavigation();

  // local state
  const top = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (show) {
      Animated.timing(top, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(top, {
        duration: 200,
        toValue: -100,
        useNativeDriver: false
      }).start();
    }
  }, [show]);

  return (
    <Animated.View style={[styles.container, { top }]}>
      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => navigation.navigate('Home')}
      >
        <Image source={""} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.containerMenu}>
        {all && (
          <React.Fragment>
            <TouchText
              onPress={() => navigation.navigate('TvShows')}
              text="TV Shows"
              textStyle={styles.text}
            />
            <TouchText
              onPress={() => navigation.navigate('Movies')}
              text="Movies"
              textStyle={styles.text}
            />
            <TouchText
              onPress={() => navigation.navigate('MyList')}
              text="Animations"
              textStyle={styles.text}
            />
          </React.Fragment>
        )}
      </View>
    </Animated.View>
  );
};

HeaderHome.defaultProps = {
  all: true
};

HeaderHome.propTypes = {
  // required
  show: PropTypes.bool.isRequired,

  // optional
  all: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.black10,
    flexDirection: 'row',
    paddingBottom: 25,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 54 : 30,
    position: 'absolute',
    width: '100%',
    zIndex: 10
  },
  logo: {
    height: 15,
    marginRight: 50,
    width: 5
  },
  containerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    height: 35
  },
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
    marginRight: 24,
    fontSize: 16,
    letterSpacing: 0.4
  }
});

export default HeaderHome;
