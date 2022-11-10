import React, {useState} from 'react';
import {appStyles, colors, sizes} from '../../services';
import {Icons, Wrapper, Text, StatusBars} from '..';
import {goBack} from '../../navigation/rootNavigation';
import {appIcons} from '../../services';
import {height, width} from 'react-native-dimension';
import Spacer from '../spacer';
import {
  FlatList,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export const Primary = ({
  onPresLeftIcon,
  leftIcon,
  onPressSearch,
  rightIcon,
  location,
  onPressLoction,
  down,
  secondary,
  circleIcon,
  title,
}) => {
  /// state

  return (
    <Wrapper
      paddingHorizontalBase
      style={[
        appStyles.headerStyle,
        {
          justifyContent: 'center',
          paddingTop: sizes.statusBarHeight,
          height: height(14),
        },
      ]}>
      <StatusBars.Light />
      <Spacer isBasic />
      <Wrapper
        justifyContentSpaceBetween
        alignItemsCenter
        flexDirectionRow
        style={{paddingTop: secondary ? height(2) : null}}>
        <Wrapper alignItemsCenter flexDirectionRow>
          <Icons.Custom
            onPress={onPresLeftIcon}
            icon={leftIcon}
            size={20}
            color={colors.appColor2}
          />
          {secondary ? (
            <>
              <Icons.Custom
                icon={circleIcon}
                color={'#000000'}
                size={25}
                // onPress={onPress}
                containerStyle={{
                  borderColor: colors.appColor2,
                  borderRadius: 100,
                  borderWidth: 0.5,
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: width(1),
                }}
              />
              <Text isLarge style={{color: colors.appColor2}}>
                {title}
              </Text>
            </>
          ) : null}
        </Wrapper>
        <Wrapper
          isTouchable
          flexDirectionRow
          alignItemsCenter
          style={{marginTop: height(1)}}
          onPress={onPressLoction}>
          <Text isMedium style={{color: colors.appColor2}}>
            {location}
          </Text>

          <Icons.Custom
            icon={down}
            size={20}
            containerStyle={{paddingHorizontal: width(1)}}
          />
        </Wrapper>
        <Icons.Custom
          icon={rightIcon}
          onPress={onPressSearch}
          size={secondary ? 30 : 20}
        />
      </Wrapper>
      <Spacer isBasic />
    </Wrapper>
  );
};

export const Secondary = ({}) => {
  return (
    <Wrapper
      style={[
        appStyles.headerStyle,
        {justifyContent: 'center', paddingTop: sizes.statusBarHeight},
      ]}>
      <StatusBars.Light />
      <Spacer isBasic />
    </Wrapper>
  );
};
