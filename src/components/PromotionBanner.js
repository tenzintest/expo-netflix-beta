import * as React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { gStyle, images } from '../constants';

// components
import PromotionPlay from './PromotionPlay';
import TouchTextIcon from './TouchTextIcon';

// icons
import SvgCheck from '../icons/Svg.Check';
import SvgInfo from '../icons/Svg.Info';
import SvgPlus from '../icons/Svg.Plus';

const PromotionBanner = () => {
  // local state
  const [added, setAdded] = React.useState(false);
  const icon = added ? <SvgCheck /> : <SvgPlus />;

  return (
    <ImageBackground
      source={images.bannerBander}
      style={styles.imageBackground}
    >
      <View style={styles.containerContent}>
        {/* <Image source={images.logoBander} style={styles.image} /> */}

        {/* <View style={gStyle.flexRowSpace}>
          <TouchTextIcon
            icon={icon}
            onPress={() => setAdded(!added)}
            text="My List"
          />

          <PromotionPlay onPress={() => null} />

          <TouchTextIcon icon={<SvgInfo />} onPress={() => null} text="Info" />
        </View> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    marginTop: 100,
    height: 450,
    top: 15
    // zIndex: 1
  },
  containerContent: {
    paddingTop: 30,
    bottom: 24,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  },
  image: {
    paddingTop: 30,
    alignSelf: 'center',
    height: 50,
    width: 291
  }
});

export default React.memo(PromotionBanner);
