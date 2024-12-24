import React from 'react';
import {View, Text, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = () => {
  return (
    <View style={styles.imageSlider}>
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
          <Image source={require('./image/img1.jpg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('./image/img2.jpg')} style={styles.image} />
        </View>
        {/* Add more slides as needed */}
      </Swiper>
    </View>
  );
};

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '20%',
  },
};

export default ImageSlider;
