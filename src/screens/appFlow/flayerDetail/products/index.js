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
} from '../../../../components';
import {height, width} from 'react-native-dimension';
import {appIcons, appStyles, colors, appImages} from '../../../../services';
import {sizes} from '../../../../services/utilities';
import client from '../../../../services/api';

function Products({navigation}) {
  /// other initialization

  const {navigate, goBack} = navigation;
  const scrollRef = useRef(null);

  //// state initialization

  const [data, setData] = React.useState([]);
  const [products, setProducts] = React.useState([
    {
      image: appImages.cover,
      discount: '60.00',
      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',
      icon: appIcons.grid,
    },
    {
      image: appImages.cover,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
    {
      image: appImages.painting,
      discount: '60.00',

      price: ' BD 1499.0',
      datysLeft: '2 Datys Left',
      name: 'NESTO',

      icon: appIcons.grid,
    },
  ]);
  const [scrollViewOffSet, setScrollViewOffSet] = React.useState(0);

  //// initialize function

  const getAllData = () => {
    client.getFlyersAndCompanies().then(res => {
      if (res.data.status == 1) {
        setData(res.data.payload.data);
      }
    });
  };
  const handleScroll = event => {
    setScrollViewOffSet(event.nativeEvent.contentOffset.y);
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  useEffect(() => {
    getAllData();
  }, []);

  /// render functions

  const _renderScrollTotop = () => {
    return (
      <Wrapper
        isCenter
        isAbsolute
        isTouchable
        onPress={() => {
          scrollToTop();
        }}
        style={{
          backgroundColor: colors.appColor1,
          height: 50,
          width: 50,
          borderRadius: 100,
          marginTop: height(90),
          marginLeft: width(80),
        }}>
        <Icons.Custom icon={appIcons.arrowUP} />
      </Wrapper>
    );
  };

  const _renderProducts = ({item, index}) => {
    return (
      <Wrapper
        isTouchable
        onPress={() => {}}
        style={{
          backgroundColor: '#ffffff',
          height: height(35),
          width: width(42),
          borderRadius: 10,
          marginLeft:
            index + (1 % 2) == 0
              ? sizes.marginHorizontal
              : sizes.marginHorizontal,
          marginBottom: height(1),
        }}>
        <Spacer isTiny />
        <Wrapper>
          <Icons.Custom
            icon={appIcons.bookMark}
            size={18}
            containerStyle={{alignSelf: 'flex-end'}}
          />
        </Wrapper>
        {/* <Spacer height={height(6)} /> */}

        <Wrapper>
          <Image
            source={item.image}
            resizeMode={'contain'}
            style={{
              height: height(20),
              width: width(41.5),
              borderRadius: 5,
            }}
          />
        </Wrapper>
        <Spacer isSmall />
        <Wrapper style={{alignSelf: 'flex-end'}}>
          <Text
            isSmall
            style={{
              paddingRight: width(2),
              textDecorationLine: 'line-through',
            }}>
            {item.discount}
          </Text>
        </Wrapper>
        <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Wrapper
            style={{backgroundColor: 'yellow', paddingHorizontal: width(2)}}>
            <Text isSmall> 8% OFF</Text>
          </Wrapper>
          <Text isBoldFont style={{color: colors.fire, paddingRight: width(2)}}>
            {item.price}
          </Text>
        </Wrapper>

        <Wrapper alignItemsCenter flexDirectionRow>
          <Icons.Custom
            icon={item.icon}
            color={'#000000'}
            size={20}
            containerStyle={{
              borderRadius: 100,
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              marginHorizontal: width(1),
              borderWidth: 0.5,
            }}
          />
          <Wrapper>
            <Text numberOfLines={1} isTiny style={{width: width(27)}}>
              {item.datysLeft}
            </Text>
            <Text
              numberOfLines={1}
              isBoldFont
              isMedium
              style={{width: width(27)}}>
              {item.name}
            </Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    );
  };

  return (
    <>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled={true}
        onScroll={handleScroll}
        ref={scrollRef}>
        <Wrapper style={{backgroundColor: colors.silver}}>
          <Wrapper style={{backgroundColor: colors.appBgColor2}}>
            {/* <Spacer isSmall /> */}

            <FlatList
              data={data}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <Buttons.Bordered
                    text={item.company.name}
                    backgroundColor={
                      item.company.isSelect ? colors.appColor2 : null
                    }
                    buttonStyle={{
                      marginLeft: index == 0 ? sizes.marginHorizontal : null,
                      marginRight:
                        index == data.length - 1
                          ? sizes.marginHorizontal
                          : width(1),
                    }}
                  />
                );
              }}
            />
            <Spacer isSmall />
            <FlatList
              data={data}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <Buttons.Bordered
                    text={item.company.name}
                    backgroundColor={
                      item.company.isSelect ? colors.appColor2 : null
                    }
                    buttonStyle={{
                      marginLeft: index == 0 ? sizes.marginHorizontal : null,
                      marginRight:
                        index == data.length - 1
                          ? sizes.marginHorizontal
                          : width(1),
                    }}
                  />
                );
              }}
            />
          </Wrapper>
          <Spacer isSmall />
          <Wrapper style={{}}>
            <FlatList
              numColumns={2}
              scrollEnabled={false}
              data={products}
              renderItem={_renderProducts}
            />
          </Wrapper>

          {products.length == 2 ? <Spacer height={height(38.5)} /> : null}
        </Wrapper>
      </ScrollView>
      {scrollViewOffSet >= 390 ? <_renderScrollTotop /> : null}
    </>
  );
}

export default Products;
