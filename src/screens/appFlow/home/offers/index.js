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

function Offer({navigation}) {
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

  const [categoryTitle, setCategoryTitle] = React.useState([]);
  const [shop, setShop] = React.useState([]);
  const [selectedShop, setSelectedShop] = React.useState();
  const [flyer, setFlyer] = React.useState([]);
  const [flyerAndCompanies, setFlyerAndCompanies] = React.useState([]);
  const [scrollViewOffSet, setScrollViewOffSet] = React.useState(0);

  const [data, setData] = React.useState([
    {
      name: 'lulu',
    },
    {
      name: 'lulu',
    },
    {
      name: 'lulu',
    },
    {
      name: 'lulu',
    },
    {
      name: 'lulu',
    },
  ]);

  const [parentScroll, setParentScroll] = React.useState(true);

  const getAllShopButton = () => {
    client.getAllCategories().then(res => {
      if (res?.data?.status == 1) {
        res.data.payload.data[0].isSelect = true;
        setCategoryTitle(res.data.payload.data);
      }
    });
  };

  const getAllCompanies = () => {
    client.getAllCompanies().then(res => {
      if (res.data.status == 1) {
        setShop(res.data.payload.data);
        // console.log('getAllCompanies', res.data.payload.data);
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
    getAllShopButton();
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

    // cache.store('push_token', DeviceState?.userId);
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

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleShop = (item, index) => {
    let tempShop = flyerAndCompanies;
    tempShop.map((TempShopitem, TempShopindex) => {
      if (TempShopindex == index) {
        tempShop[TempShopindex].company.isSelect = true;
      } else {
        tempShop[TempShopindex].company.isSelect = false;
      }
    });
    setSelectedShop(item);
    setFlyerAndCompanies(data => [...tempShop]);
  };

  // render functions
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

  const _renderCategory = ({item, index}) => {
    return (
      <>
        <Wrapper style={{width: width(29)}}>
          <Buttons.ColoredSmall
            text={item.name}
            buttonStyle={[
              appStyles.shadow,
              {
                height: 35,
                width: width(27),
                paddingHorizontal: null,
                paddingVertical: null,
                marginLeft: width(1),
                marginBottom: height(2),
                marginRight:
                  index == categoryTitle.length - 1
                    ? sizes.marginHorizontal
                    : null,
              },
            ]}
            onPress={() => handleCategory(item, index)}
            backgroundColor={
              item.isSelect ? colors.appColor1 : colors.appBgColor1
            }
            textStyle={{
              color: item.isSelect ? colors.appBgColor1 : colors.appColor1,
            }}
          />
        </Wrapper>
      </>
    );
  };

  const _renderOffer = ({item, index}) => {
    return (
      <Wrapper
        isTouchable
        style={{
          height: height(35),
          width: width(44),
          borderRadius: 10,
          marginLeft:
            index != 0 && index % 2 != 0 ? width(2) : sizes.marginHorizontal,
          //   marginRight:
          //     index != 0 && index % 2 != 0 ? width(2) : sizes.marginHorizontal,
          marginBottom: height(1),
        }}
        onPress={() => {
          navigate(routes.flayerDetail);
        }}>
        <Image
          source={{uri: client.displayImages(item.flyer_image)}}
          resizeMode={'contain'}
          style={{
            height: height(30),
            width: width(44),
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Wrapper
          flexDirectionRow
          alignItemsCenter
          style={{
            height: height(5),
            width: width(44),
            backgroundColor: '#373737',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Wrapper
            isCenter
            flex={0.25}
            style={{
              borderRightWidth: 1,
              borderColor: '#ffff',
              height: height(4),
            }}>
            <Icons.Custom icon={appIcons.share} size={15} />
          </Wrapper>
          <Wrapper isCenter flex={0.5}>
            <Text isTiny isGray>
              725812
            </Text>
            <Text isTiny isGray>
              viewers
            </Text>
          </Wrapper>
          <Wrapper
            isCenter
            flex={0.25}
            style={{
              borderLeftWidth: 1,
              borderColor: '#ffff',
              height: height(4),
            }}>
            <Icons.Custom icon={appIcons.share} size={15} />
          </Wrapper>
        </Wrapper>

        <Wrapper
          isAbsolute
          isTransParent
          style={{
            height: height(8),
            width: width(44),
            marginTop: height(22),
          }}>
          <Wrapper alignItemsCenter flexDirectionRow>
            <Icons.Custom
              icon={{uri: client.displayImages(selectedShop.company.logo)}}
              color={'#000000'}
              size={20}
              containerStyle={{
                borderRadius: 100,
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                marginHorizontal: width(2),
              }}
            />
            <Wrapper>
              <Text
                numberOfLines={1}
                isWhite
                isMedium
                style={{width: width(31)}}>
                {selectedShop.company.name}
              </Text>
              <Text numberOfLines={1} isTiny isWhite style={{width: width(31)}}>
                {item.name}
              </Text>
            </Wrapper>
          </Wrapper>
          <Spacer isTiny />
          <Wrapper justifyContentSpaceBetween flexDirectionRow>
            <Text
              numberOfLines={1}
              isTiny
              isWhite
              style={{marginHorizontal: width(2)}}>
              29 Pages
            </Text>
            <Text numberOfLines={1} isTiny isWhite>
              7 Days Left
            </Text>
            <Icons.Custom
              containerStyle={{
                marginHorizontal: width(2),
              }}
              icon={appIcons.doubleTick}
              size={15}
              onPress={() => {}}
            />
          </Wrapper>
        </Wrapper>
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
          <FlatList
            data={flyerAndCompanies}
            horizontal
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => handleShop(item, index)}
                  style={{
                    marginLeft: index == 0 ? sizes.marginHorizontal : null,
                    marginRight:
                      index == flyerAndCompanies.length - 1
                        ? sizes.marginHorizontal
                        : width(1),
                  }}>
                  <Icons.Custom
                    icon={{uri: client.displayImages(item.company.logo)}}
                    size={totalSize(4.5)}
                    containerStyle={{
                      borderRadius: 100,
                      borderWidth: 1,
                      height: 55,
                      width: 55,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: item.company.isSelect
                        ? colors.appColor2
                        : colors.appColor1,
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
          <Spacer isBasic />
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
                      index == shop.length - 1
                        ? sizes.marginHorizontal
                        : width(1),
                  }}
                />
              );
            }}
          />
          <Spacer isSmall />
        </Wrapper>

        <Spacer isSmall />
        <Wrapper style={{}}>
          <FlatList
            numColumns={2}
            scrollEnabled={false}
            data={selectedShop?.products}
            renderItem={_renderOffer}
          />
        </Wrapper>
      </ScrollView>
      {scrollViewOffSet >= 390 ? <_renderScrollTotop /> : null}
    </Wrapper>
  );
}

export default Offer;
