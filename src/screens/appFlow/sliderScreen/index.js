import React, {Component, useEffect, useRef} from 'react';
import {FlatList, Image, ScrollView} from 'react-native';
import {
  Wrapper,
  Text,
  Spacer,
  Headers,
  Buttons,
  Icons,
  ScrollViews,
} from '../../../components';
import {height, totalSize, width} from 'react-native-dimension';
import {
  appIcons,
  appStyles,
  colors,
  appImages,
  routes,
} from '../../../services';
import {sizes} from '../../../services/utilities';
import AuthContext from '../../../services/hooks/context';
import {useIsFocused} from '@react-navigation/native';

function SliderScreen({navigation}) {
  /// other initialization

  const {navigate, goBack} = navigation;
  const authContext = React.useContext(AuthContext);
  const isFocused = useIsFocused();
  const ref = useRef(null);

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
  //   const [ref, setRef] = React.useState(null);
  const [gridView, setGridView] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  //// initilaze function

  useEffect(() => {
    if (authContext.gridViewIndex) {
      ref.current.scrollToIndex({
        animated: true,
        index: authContext.gridViewIndex,
        viewPosition: 0,
      });
      setIndexOnFocus(authContext.gridViewIndex);
    }
  }, [isFocused]);

  /// render Funtions

  const _renderSlider = ({item, index}) => {
    return (
      <Wrapper>
        <Image source={appImages.cover} style={{width: width(100)}} />
      </Wrapper>
    );
  };

  const _renderGridView = ({item, index}) => {
    return (
      <Wrapper
        isTouchable
        onPress={() => {
          setGridView(false);
          setIndexOnFocus(index);
          setScroll(!scroll);
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
      {!gridView ? (
        <>
          <Wrapper>
            <FlatList
              horizontal
              scrollEnabled={false}
              ref={ref}
              data={flayer}
              renderItem={_renderSlider}
            />
          </Wrapper>
          <Spacer isDoubleBase />

          <Wrapper alignItemsCenter flexDirectionRow paddingHorizontalBase>
            <Icons.Custom
              onPress={() => {
                navigate(routes.gridView);
              }}
              icon={appIcons.gridView}
              size={20}
              color={'#9f9f9f'}
            />
            <Wrapper
              alignItemsCenter
              flexDirectionRow
              style={{marginLeft: width(20)}}>
              <Icons.Custom
                onPress={() => {
                  if (indexOnFocus != 0) {
                    let tempIndex = indexOnFocus;
                    ref.current.scrollToIndex({
                      animated: true,
                      index: tempIndex - 1,
                      viewPosition: 0,
                    });
                    setIndexOnFocus(tempIndex - 1);
                  }
                }}
                icon={appIcons.backAngle}
                size={25}
                color={'#9f9f9f'}
              />
              <Wrapper
                isCenter
                flexDirectionRow
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#9f9f9f',
                  width: width(25),
                  marginHorizontal: width(5),
                }}>
                <Text isMedium style={{color: '#9a9930'}}>
                  {`${indexOnFocus + 1}/${flayer.length}`}
                </Text>
              </Wrapper>
              <Icons.Custom
                onPress={() => {
                  if (flayer.length - 1 != indexOnFocus) {
                    let tempIndex = indexOnFocus;
                    ref.current.scrollToIndex({
                      animated: true,
                      index: tempIndex + 1,
                      viewPosition: 0,
                    });
                    setIndexOnFocus(tempIndex + 1);
                  }
                }}
                icon={appIcons.forwardAngle}
                size={17}
                color={'#9f9f9f'}
              />
            </Wrapper>
          </Wrapper>
        </>
      ) : (
        <FlatList
          scrollEnabled={false}
          data={flayer}
          numColumns={3}
          renderItem={_renderGridView}
        />
      )}
    </Wrapper>
  );
}

export default SliderScreen;
