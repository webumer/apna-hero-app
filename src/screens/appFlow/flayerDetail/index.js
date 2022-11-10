import React, {Component} from 'react';
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
import {appIcons, appStyles, colors, appImages} from '../../../services';
import {sizes} from '../../../services/utilities';
import Offers from './offers';
import Products from './products';
import ContactInfo from './contactInfo';
function FlayerDetail({navigation}) {
  /// other initialization

  const {navigate, goBack} = navigation;

  //// state initialization
  const [isSelect, setIsSelect] = React.useState('offers');
  const [offerData, setOfferData] = React.useState([
    {
      image: appImages.cover,
      description: 'Anniversary Bonanza',
      isSelect: true,
    },
    {
      image: appImages.cover,
      description: 'Anniversary Bonanza',
      isSelect: false,
    },
    {
      image: appImages.cover,
      description: 'Anniversary Bonanza',
      isSelect: false,
    },
    {
      image: appImages.cover,
      description: 'Anniversary Bonanza',
      isSelect: false,
    },
    {
      image: appImages.cover,
      description: 'Anniversary Bonanza',
      isSelect: false,
    },
  ]);
  return (
    <Wrapper isMain style={{backgroundColor: colors.silver}}>
      <Headers.Primary
        // isSelectePrimery={isSelect}
        // onPressOffers={() => {
        //   setIsSelect('offers');
        // }}
        // onPressProduct={() => {
        //   setIsSelect('products');
        // }}
        // onPressContactInfo={() => {
        //   setIsSelect('contactinfo');
        // }}
        circleIcon={appIcons.grid}
        title={'carrefour'}
        leftIcon={appIcons.back}
        rightIcon={appIcons.heart}
        onPresLeftIcon={() => {
          goBack();
        }}
        secondary={true}
      />
      <Spacer isTiny />
      <ScrollView horizontal>
        <Wrapper flexDirectionRow style={{backgroundColor: colors.appBgColor2}}>
          <Buttons.Colored
            textStyle={{
              fontSize: totalSize(2),
            }}
            buttonStyle={{
              width: width(33.5),
              height: height(4),
              marginLeft: sizes.marginHorizontal,
              marginBottom: height(2),
            }}
            customIcon={appIcons.offerIcon}
            tintColor={
              isSelect === 'offers' ? colors.appColor2 : colors.appColor1
            }
            buttonColor={
              isSelect === 'offers' ? colors.appColor1 : colors.appBgColor1
            }
            text={'offers'}
            onPress={() => {
              setIsSelect('offers');
            }}
          />
          <Buttons.Colored
            textStyle={{
              fontSize: totalSize(2),
            }}
            buttonStyle={{
              width: width(33.5),
              height: height(4),
              marginLeft: width(2),
              backgroundColor:
                isSelect === 'products' ? colors.appColor1 : colors.appBgColor1,
              marginBottom: height(2),
            }}
            customIcon={appIcons.products}
            tintColor={
              isSelect === 'products' ? colors.appColor2 : colors.appColor1
            }
            text={'Products'}
            onPress={() => {
              setIsSelect('products');
            }}
          />
          <Buttons.Colored
            textStyle={{
              fontSize: totalSize(2),
            }}
            buttonStyle={{
              width: width(33.5),
              height: height(4),
              marginLeft: width(2),
              marginRight: sizes.marginHorizontal,
              backgroundColor:
                isSelect === 'Contact' ? colors.appColor1 : colors.appBgColor1,
              marginBottom: height(2),
            }}
            customIcon={appIcons.contact}
            tintColor={
              isSelect === 'Contact' ? colors.appColor2 : colors.appColor1
            }
            text={'Contact'}
            onPress={() => {
              setIsSelect('Contact');
            }}
          />
        </Wrapper>
      </ScrollView>
      {isSelect == 'offers' ? (
        <Offers navigation={navigation} data={offerData} />
      ) : isSelect == 'products' ? (
        <Products navigation={navigation} />
      ) : (
        <ContactInfo navigation={navigation} />
      )}
    </Wrapper>
  );
}

export default FlayerDetail;
