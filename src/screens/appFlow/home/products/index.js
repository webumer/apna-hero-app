import React, {Component, useEffect, useRef} from 'react';
import {FlatList, Image, ScrollView, TextInput} from 'react-native';
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
import client from '../../../../services/api';
import AuthContext from '../../../../services/hooks/context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';
import OneSignal from 'react-native-onesignal';
import {useScrollToTop} from '@react-navigation/native';

function Products({navigation}) {
  /// other initialization
  const {navigate, openDrawer, push, replace} = navigation;
  const authContext = React.useContext(AuthContext);
  const scrollRef = useRef(null);
  //// state initialization
  const [suggetionData, setSuggetionData] = React.useState([
    'Iphone',
    'Iphone 13 pro',
    'android',
    'Laptop',
  ]);

  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [selectedShop, setSelectedShop] = React.useState();
  const [flyer, setFlyer] = React.useState([]);
  const [flyerAndCompanies, setFlyerAndCompanies] = React.useState([]);
  const [scrollViewOffSet, setScrollViewOffSet] = React.useState(0);
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
  ]);

  const [parentScroll, setParentScroll] = React.useState(true);

  /// initialize functions

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const getCategory = () => {
    client.getAllCategories().then(res => {
      if (res?.data?.status == 1) {
        res.data.payload.data[0].isSelect = true;
        setCategory(res.data.payload.data);
      }
    });
  };

  const getAllCompanies = () => {
    client.getAllCompanies().then(res => {
      if (res.data.status == 1) {
        setSubCategory(res.data.payload.data);
      }
    });
  };

  const getAllFlyers = () => {
    client.getFlyersAndCompanies().then(res => {
      if (res.data.status == 1) {
        setFlyerAndCompanies(res.data.payload.data);
      }
    });
  };

  useEffect(() => {
    getCategory();
    getAllCompanies();
    getAllFlyers();
    getDeviceInfo();
  }, []);

  const getDeviceInfo = async () => {
    let tempDevice = {
      page: 'Home',
      detail: null,
      company: null,
      ...authContext.deveInfo,
    };
    console.log('DevieINfo', tempDevice);
  };

  const handleCategory = (item, index) => {
    let tempCategory = categoryTitle;
    tempCategory.map((tempItem, tempIndex) => {
      if (tempIndex != index) {
        tempItem.isSelect = false;
      } else {
        tempCategory[index].isSelect = true;
      }
    });
    setCategoryTitle(prev => [...tempCategory]);
  };

  const handleScroll = event => {
    setScrollViewOffSet(event.nativeEvent.contentOffset.y);
  };
  /// render functinos

  // const _renderStoriesView = () => {

  // }

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

  const _renderSearch = () => {
    return (
      <Wrapper
        isBorderedWrapper
        flexDirectionRow
        alignItemsCenter
        style={{borderRadius: 10, paddingLeft: width(2), height: height(6)}}>
        <TextInput style={{flex: 0.85}} placeholder="Iphone" />
        <Wrapper
          isCenter
          style={{
            backgroundColor: colors.appColor1,
            flex: 0.15,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            height: height(6),
          }}>
          <Icons.Custom icon={appIcons.search} size={25} />
        </Wrapper>
      </Wrapper>
    );
  };

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
          marginTop: height(70),
          marginLeft: width(80),
        }}>
        <Icons.Custom icon={appIcons.arrowUP} />
      </Wrapper>
    );
  };

  return (
    <Wrapper isMain>
      <ScrollView
        nestedScrollEnabled={true}
        scrollEnabled={true}
        onScroll={handleScroll}
        ref={scrollRef}>
        <Wrapper style={{backgroundColor: colors.appBgColor2}}>
          <Spacer isTiny />
          <Wrapper paddingHorizontalBase>
            <_renderSearch />
          </Wrapper>
          <Spacer isSmall />

          <FlatList
            data={flyerAndCompanies}
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
                      index == subCategory.length - 1
                        ? sizes.marginHorizontal
                        : width(1),
                  }}
                />
              );
            }}
          />
          <Spacer isSmall />
          <FlatList
            data={flyerAndCompanies}
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
                      index == subCategory.length - 1
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
      </ScrollView>
      {scrollViewOffSet >= 390 ? <_renderScrollTotop /> : null}
    </Wrapper>
  );
}

export default Products;
