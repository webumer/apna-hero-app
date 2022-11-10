import React, {Component} from 'react';
import {FlatList, Image} from 'react-native';
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

function ContactInfo({navigation, data}) {
  /// other initialization

  const {navigate, goBack} = navigation;

  /// state initialization

  return (
    <Wrapper paddingHorizontalBase style={{backgroundColor: colors.silver}}>
      <Spacer height={height(15)} />

      <Wrapper
        isCenter
        style={[
          appStyles.shadow,
          {
            height: height(50),
            width: width(90),
            borderTopRightRadius: 100,
            backgroundColor: '#ffffff',
          },
        ]}>
        <Wrapper>
          <Icons.WithText
            direction={'row'}
            iconSize={30}
            customIcon={appIcons.mall}
            textContainerStyle={{marginTop: height(0.5)}}
            titleStyle={{color: colors.appColor1}}
            title={'Lulu hyperMarket'}
          />
          <Spacer isBasic />
          <Icons.WithText
            direction={'row'}
            iconSize={30}
            customIcon={appIcons.contact}
            textContainerStyle={{marginTop: height(0.5)}}
            titleStyle={{color: colors.appColor1}}
            title={'+9333332200'}
          />
          <Spacer isBasic />

          <Icons.WithText
            direction={'row'}
            iconSize={30}
            customIcon={appIcons.address}
            textContainerStyle={{marginTop: height(0.5)}}
            titleStyle={{color: colors.appColor1}}
            title={'Near G11'}
          />
        </Wrapper>
      </Wrapper>
      <Spacer height={height(20)} />
    </Wrapper>
  );
}

export default ContactInfo;
