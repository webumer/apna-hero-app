import React, {Component, useEffect, useState} from 'react';
import {FlatList, Image} from 'react-native';
import {Wrapper, Text, Spacer, Icons, Loaders} from '../../../components';
import {height, totalSize, width} from 'react-native-dimension';
import {appImages, appStyles, colors, routes} from '../../../services';
import client from '../../../services/api';
import AuthContext from '../../../services/hooks/context';
import cache from '../../../services/utilities/cache';
import DeviceInfo from 'react-native-device-info';
import OneSignal from 'react-native-onesignal';

function SelectCity(props) {
  /// props
  const {replace} = props.navigation;
  const authContext = React.useContext(AuthContext);

  /// state
  const [city, setCity] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [deviceData, setDeviceData] = React.useState({});
  const [page, setPage] = React.useState();
  const [LoadMore, setLoadMore] = React.useState(false);

  const getAllCities = () => {
    setIsLoading(true);
    client.getAllCities(page).then(response => {
      console.log('response', response.data);
      if (response?.data?.status == 1) {
        authContext.setCity(city);
        setCity(response.data.payload.data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  };

  const HandleCities = item => {
    cache.store('city', item);
    authContext.setCity(item);
    replace(routes.drawer);
    let TempDevice = {
      selectedCity: item.name,
      ...deviceData,
    };
    authContext.setDeviceInfo(TempDevice);
  };

  const pagination = async () => {
    setLoadMore(true);
    setPage(page + 1);
    client.getAllCities(page).then(res => {
      if (res?.data?.status == 1) {
        let array = res?.data?.payload?.data;
        setCity(prev => [...prev, ...array]);
        setLoadMore(false);
      } else {
        setLoadMore(false);
      }
    });
  };
  useEffect(() => {
    getAllCities();
    getDeviceInfo();
  }, []);

  const getDeviceInfo = async () => {
    let uniqId = await DeviceInfo.getUniqueId();
    let manuFacturer = await DeviceInfo.getManufacturer();
    let deviceIp = await DeviceInfo.getIpAddress();
    let Carrier = await DeviceInfo.getCarrier();
    OneSignal.setAppId('cb90a842-4ccb-4407-a250-f02aa2b62704');
    const DeviceState = await OneSignal.getDeviceState();

    let tempDevice = {
      deviceUniqId: uniqId,
      manuFacturer: manuFacturer,
      deviceIp: deviceIp,
      carrier: Carrier,
      deviceToken: DeviceState?.userId,
    };
    setDeviceData(tempDevice);
  };

  return isLoading ? (
    <Loaders.Primary />
  ) : (
    <Wrapper isMain style={{backgroundColor: colors.appBgColor1}}>
      <Spacer isDoubleBase />
      <Wrapper isCenter flexDirectionRow>
        <Icons.Custom icon={appImages.cartoonWithText} size={totalSize(15)} />

        <Wrapper>
          <Text isMediumTitle isBoldFont>
            Hello
          </Text>
          <Image
            source={appImages.pakistan}
            resizeMode={'contain'}
            style={{height: height(4), width: width(45)}}
          />
        </Wrapper>
      </Wrapper>
      <Spacer isBasic />
      <Wrapper paddingHorizontalBase>
        <Text isLargeTitle isBoldFont>
          Your are from?
        </Text>
      </Wrapper>
      <FlatList
        data={city}
        numColumns={2}
        onEndReachedThreshold={0.3}
        onEndReached={pagination}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => {
          return (
            <Wrapper
              isCardView
              style={{
                height: height(12),
                width: width(42),
                marginBottom: height(2),
                marginRight: 0,
                marginHorizontal: width(5),
                borderRadius: 5,
                justifyContent: 'flex-end',
                // alignItems: 'center',
              }}>
              <Spacer isSmall />
              <Icons.WithText
                direction={'column'}
                // iconSize={35}
                resizeMode={'stretch'}
                width={width(42)}
                height={height(8.5)}
                onPress={() => {
                  HandleCities(item);
                }}
                containerStyle={{
                  height: height(10),
                  width: width(42),
                  justifyContent: 'flex-end',
                }}
                customIcon={{uri: client.displayImages(item.icon)}}
                textContainerStyle={{marginTop: height(0.5)}}
                numberOfLines={1}
                titleStyle={{
                  color: colors.black,
                  textAlign: 'center',
                  fontSize: 14,
                }}
                title={item.name}
              />
            </Wrapper>
          );
        }}
      />
      <Loaders.Secondary isVisible={LoadMore} />
    </Wrapper>
  );
}

export default SelectCity;
