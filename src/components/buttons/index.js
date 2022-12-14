import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {colors, appStyles, fontSize, sizes, appIcons} from '../../services';
import {Icons, Wrapper, Text} from '..';
import RollingContent from 'react-native-rolling-bar';
export const Colored = ({
  text,
  isLoading,
  activityColor,
  animation,
  onPress,
  disabled,
  buttonStyle,
  customIcon,
  textStyle,
  iconName,
  iconType,
  iconSize,
  buttonColor,
  iconStyle,
  tintColor,
  direction,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={isLoading ? true : disabled}>
      <Wrapper
        animation={animation}
        style={[
          appStyles.buttonColord,
          {
            height: sizes.buttonHeight,
            backgroundColor: disabled
              ? colors.appColor1 + '80'
              : buttonColor
              ? buttonColor
              : colors.appColor1,
          },
          buttonStyle,
        ]}>
        <Wrapper
          style={{
            flexDirection: direction ? direction : 'row',
            alignItems: 'center',
          }}>
          {customIcon ? (
            <Icons.Custom
              icon={customIcon}
              size={iconSize ? iconSize : totalSize(3)}
              color={tintColor && tintColor}
              containerStyle={[{marginHorizontal: width(2)}, iconStyle]}
            />
          ) : iconName ? (
            <Icon
              name={iconName ? iconName : 'email-outline'}
              type={iconType ? iconType : 'material-community'}
              size={iconSize ? iconSize : totalSize(3)}
              color={tintColor ? tintColor : colors.appTextColor6}
              iconStyle={[{marginRight: width(2.5)}, iconStyle]}
            />
          ) : null}
          {isLoading ? (
            <ActivityIndicator
              color={activityColor ? activityColor : colors.appBgColor1}
              size={'small'}
            />
          ) : (
            <Text
              isBoldFont
              style={[
                {
                  color: tintColor ? tintColor : colors.appTextColor6,
                  fontSize: totalSize(2.5),
                },
                textStyle,
              ]}>
              {text}
            </Text>
          )}
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  );
};

export const ColoredSmall = ({
  text,
  onPress,
  buttonStyle,
  customIcon,
  direction,
  textStyle,
  iconName,
  iconType,
  iconSize,
  iconColor,
  iconStyle,
  backgroundColor,
  numberOfLines,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderRadius: 25,
          paddingHorizontal: width(5),
          //   paddingVertical: height(1),
          backgroundColor: backgroundColor ? backgroundColor : colors.appColor1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonStyle,
      ]}>
      <Wrapper
        style={{
          flexDirection: direction ? direction : 'row',
          alignItems: 'center',
        }}>
        {customIcon ? (
          <Icons.Custom
            icon={customIcon}
            size={iconSize ? iconSize : totalSize(2)}
            color={iconColor ? iconColor : colors.appTextColor6}
          />
        ) : iconName ? (
          <Icon
            name={iconName ? iconName : 'email-outline'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : totalSize(2)}
            color={iconColor ? iconColor : colors.appTextColor6}
            iconStyle={[{}, iconStyle]}
          />
        ) : null}
        <Text
          isSmall
          numberOfLines={numberOfLines}
          style={[{color: colors.appTextColor6}, textStyle]}>
          {text}
        </Text>
      </Wrapper>
    </TouchableOpacity>
  );
};

export const Bordered = ({
  text,
  onPress,
  buttonStyle,
  textStyle,
  iconName,
  customIcon,
  iconType,
  iconSize,
  iconColor,
  iconStyle,
  tintColor,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        appStyles.buttonBorderd,
        {
          borderRadius: sizes.buttonRadius,
          borderColor: tintColor ? tintColor : colors.appColor1,
          paddingHorizontal: width(2),
          backgroundColor: backgroundColor,
        },
        buttonStyle,
      ]}>
      <Wrapper style={{flexDirection: 'row', alignItems: 'center'}}>
        {customIcon ? (
          <Icons.Custom
            icon={customIcon}
            size={iconSize ? iconSize : totalSize(3)}
            color={iconColor ? iconColor : null}
            containerStyle={[{marginRight: width(2.5)}, iconStyle]}
          />
        ) : iconName ? (
          <Icon
            name={iconName ? iconName : 'email-outline'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : totalSize(3)}
            color={
              iconColor ? iconColor : tintColor ? tintColor : colors.appColor1
            }
            iconStyle={[{marginRight: width(2.5)}, iconStyle]}
          />
        ) : null}
        <Text
          isMedium
          style={[
            {color: tintColor ? tintColor : colors.appColor1},
            textStyle,
          ]}>
          {text}
        </Text>
      </Wrapper>
    </TouchableOpacity>
  );
};

export const BorderedSmall = ({
  text,
  onPress,
  buttonStyle,
  rowReverse,
  textStyle,
  iconName,
  iconType,
  iconSize,
  iconColor,
  iconStyle,
  tintColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          borderRadius: 15,
          paddingHorizontal: width(5),
          paddingVertical: height(1),
          borderColor: tintColor ? tintColor : colors.appColor1,
          borderWidth: 1,
        },
        buttonStyle,
      ]}>
      <Wrapper
        style={{
          flexDirection: rowReverse ? 'row-reverse' : 'row',
          alignItems: 'center',
        }}>
        {iconName ? (
          <Icon
            name={iconName ? iconName : 'email-outline'}
            type={iconType ? iconType : 'material-community'}
            size={iconSize ? iconSize : totalSize(2)}
            color={tintColor ? tintColor : colors.appColor1}
            iconStyle={[{marginHorizontal: width(2)}, iconStyle]}
          />
        ) : null}
        <Text
          isButtonRegular
          style={[
            {
              color: tintColor ? tintColor : colors.appColor1,
              fontSize: fontSize.regular,
            },
            textStyle,
          ]}>
          {text}
        </Text>
      </Wrapper>
    </TouchableOpacity>
  );
};

export const Search = ({data}) => {
  return (
    <Wrapper
      justifyContentSpaceBetween
      flexDirectionRow
      marginHorizontalBase
      isBorderedWrapper
      isTouchable
      alignItemsCenter
      style={{
        borderColor: colors.appColor1,
        borderRadius: 50,
        height: height(6),
        backgroundColor: colors.appBgColor1,
      }}>
      <Wrapper paddingHorizontalBase>
        <RollingContent interval={4000} defaultStyle={false} customStyle={{}}>
          <Text isSmall>Iphone</Text>
          <Text isSmall>Iphone 13 pro</Text>
          <Text isSmall>android</Text>
          <Text isSmall>Laptop</Text>
        </RollingContent>
      </Wrapper>
      <Icons.Custom
        icon={appIcons.search}
        size={30}
        containerStyle={{paddingRight: width(1.5)}}
      />
    </Wrapper>
  );
};

export const Secondary = ({icon, backgroundColor, title}) => {
  return (
    <Wrapper
      paddingHorizontalSmall
      alignItemsCenter
      isTouchable
      flexDirectionRow
      style={{
        height: height(4),
        width: width(30),
        borderRadius: 5,
        backgroundColor: backgroundColor,
      }}>
      <Icons.WithText
        direction={'row'}
        customIcon={icon}
        tintColor={'#ffffffff'}
        textContainerStyle={{marginTop: height(0.5)}}
        titleStyle={{color: '#ffffffff'}}
        title={title}
      />
    </Wrapper>
  );
};

export const SearchSecondary = ({title}) => {
  return (
    <Wrapper
      isTouchable
      paddingHorizontalBase
      style={{
        height: height(6),
        borderRadius: 50,
        backgroundColor: '#cececece',
        justifyContent: 'center',
      }}>
      <Icons.WithText customIcon={appIcons.searhNormal} title={title} />
    </Wrapper>
  );
};
