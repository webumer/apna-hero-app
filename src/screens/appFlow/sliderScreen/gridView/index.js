import React, {Component, useEffect} from 'react';
import {FlatList, Image, ScrollView} from 'react-native';
import {
  Wrapper,
  Text,
  Spacer,
  Headers,
  Buttons,
  Icons,
  ScrollViews,
} from '../../../../components';
import {height, totalSize, width} from 'react-native-dimension';
import {
  appIcons,
  appStyles,
  colors,
  appImages,
  routes,
} from '../../../../services';
import {sizes} from '../../../../services/utilities';
import AuthContext from '../../../../services/hooks/context';

function GridView({navigation}) {
  /// other initialization

  const {navigate, goBack} = navigation;
  const authContext = React.useContext(AuthContext);

  //// state initialization
  const [flayer, setFlayer] = React.useState([
    {
      image: appImages.cover,
    },
    {
      image: appImages.cover,
    },
    {
      image: appImages.painting,
    },
    {
      image: appImages.painting,
    },
  ]);

  const [indexOnFocus, setIndexOnFocus] = React.useState(0);
  const [ref, setRef] = React.useState(null);
  const [gridView, setGridView] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  //// initilaze function

  /// render Funtions

  const _renderGridView = ({item, index}) => {
    return (
      <Wrapper
        isTouchable
        onPress={() => {
          authContext.setGridViewIndex(index);
          navigate(routes.sliderScreen, {index: index});
          //   setGridView(false);
          //   setIndexOnFocus(index);
          //   setScroll(!scroll);
        }}
        style={{
          backgroundColor: '#ffffff',
          height: height(20),
          width: width(30),
          borderRadius: 5,
          marginLeft: index + (1 % 2) != 0 ? width(2) : null,
          marginBottom: height(1),
        }}>
        <Wrapper>
          <Image
            source={appImages.cover}
            //   resizeMode={'contain'}
            style={{
              height: height(20),
              width: width(30),
              borderRadius: 5,
            }}
          />
        </Wrapper>
        <Wrapper
          isAbsolute
          isCenter
          flexDirectionRow
          style={{
            height: 20,
            width: 20,
            borderRadius: 100,
            backgroundColor: '#000000',
            marginTop: height(0.3),
            marginLeft: width(22.5),
          }}>
          <Text isSmall isBoldFont style={{color: colors.selected}}>
            {index + 1}
          </Text>
        </Wrapper>
      </Wrapper>
    );
  };

  return (
    <Wrapper isMain style={{backgroundColor: colors.black}}>
      <Headers.Primary
        circleIcon={appIcons.grid}
        title={'carrefour'}
        leftIcon={appIcons.back}
        rightIcon={appIcons.heart}
        onPresLeftIcon={() => {
          if (gridView) {
            setGridView(false);
          } else {
            goBack();
          }
        }}
        secondary={true}
      />
      <Spacer isSmall />
      <Spacer isSmall />
      <FlatList
        scrollEnabled={false}
        data={flayer}
        numColumns={3}
        renderItem={_renderGridView}
      />
    </Wrapper>
  );
}

export default GridView;
