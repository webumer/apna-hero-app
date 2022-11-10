import React, {Component, useEffect} from 'react';
import {FlatList, Image} from 'react-native';
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
import client from '../../../services/api';
import AuthContext from '../../../services/hooks/context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DeviceInfo from 'react-native-device-info';
import OneSignal from 'react-native-onesignal';
import Offer from './offers';
import Products from './products';

function Home({navigation}) {
  /// other initialization
  const {navigate, openDrawer, push, replace} = navigation;
  const authContext = React.useContext(AuthContext);

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
  const [selectOffer, setSelectOffer] = React.useState(true);
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

  /// initialize functions

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

  const handleShop = (item, index) => {
    let tempShop = flyerAndCompanies;
    tempShop.map((TempShopitem, TempShopindex) => {
      if (TempShopindex == index) {
        tempShop[TempShopindex].company.isSelect = true;
      } else {
        tempShop[TempShopindex].company.isSelect = false;
      }
    });
    setFlyerAndCompanies(data => [...tempShop]);
  };

  /// initialize render function

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

  const _renderShopButton = ({isSelect, onPress, icon, marginRight}) => {
    return (
      <Wrapper
        isTouchable
        onPress={onPress}
        style={{
          backgroundColor: isSelect ? colors.silver : colors.appBgColor1,
          width: isSelect ? width(16) : width(14),
          height: height(7),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          marginRight: marginRight ? sizes.marginHorizontal : width(1),
        }}>
        <Icons.Custom
          icon={icon}
          color={'#000000'}
          size={25}
          onPress={onPress}
          containerStyle={{
            borderRadius: 100,
            borderWidth: 0.5,
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </Wrapper>
    );
  };

  const _renderOffer = ({item, index}) => {
    return (
      <Wrapper
        isTouchable
        style={{
          height: height(37),
          width: width(47),
          borderRadius: 10,
          marginLeft: index != 0 && index % 2 != 0 ? width(2) : null,
          marginBottom: height(1),
        }}
        onPress={() => {
          navigate(routes.flayerDetail);
        }}>
        <Image
          source={{uri: client.displayImages(item.flyer_image)}}
          resizeMode={'contain'}
          style={{
            height: height(32),
            width: width(47),
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Wrapper
          flexDirectionRow
          alignItemsCenter
          style={{
            height: height(5),
            width: width(47),
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
            height: height(10),
            width: width(47),
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
          <Spacer isBasic />
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
      <Wrapper style={{backgroundColor: colors.silver}}>
        <Headers.Primary
          leftIcon={appIcons.humBurger}
          rightIcon={appIcons.search}
          down={appIcons.down}
          location={authContext.city.name}
          onPressLoction={() => {
            navigate(routes.auth);
          }}
          onPresLeftIcon={() => {
            openDrawer();
          }}
        />
      </Wrapper>
      <Spacer isSmall />
      <Wrapper
        paddingHorizontalBase
        style={{backgroundColor: colors.appBgColor2, height: height(7.5)}}>
        <Wrapper flexDirectionRow>
          <Buttons.Colored
            customIcon={appIcons.offerIcon}
            tintColor={selectOffer ? colors.appColor2 : colors.appColor1}
            buttonColor={selectOffer ? colors.appColor1 : colors.appBgColor1}
            text={'offers'}
            onPress={() => {
              setSelectOffer(true);
            }}
          />
          <Buttons.Colored
            customIcon={appIcons.products}
            tintColor={selectOffer ? colors.appColor1 : colors.appColor2}
            text={'Products'}
            onPress={() => {
              setSelectOffer(false);
            }}
            buttonStyle={{
              marginLeft: width(2),
              backgroundColor: selectOffer
                ? colors.appBgColor1
                : colors.appColor1,
            }}
          />
        </Wrapper>
      </Wrapper>
      {selectOffer ? (
        <Offer navigation={navigation} />
      ) : (
        <Products navigation={navigation} />
      )}
    </Wrapper>
  );
}

export default Home;
