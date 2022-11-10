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
import {
  appIcons,
  appStyles,
  colors,
  appImages,
  routes,
} from '../../../../services';
import {sizes} from '../../../../services/utilities';
import AuthContext from '../../../../services/hooks/context';

function Offers({navigation, data}) {
  /// other initialization

  const {navigate, goBack} = navigation;
  const authContext = React.useContext(AuthContext);

  //// state initialization
  const [isSelect, setIsSelect] = React.useState('offers');
  const [offers, setOffers] = React.useState(data);
  const [subOffer, setSubOffer] = React.useState([
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
  const handleRenderHorizontal = (item, index) => {
    let tempData = data;
    tempData.map((tempItem, tempIndex) => {
      if (tempIndex != index) {
        tempItem.isSelect = false;
      } else {
        tempData[index].isSelect = true;
      }
    });
    setOffers(data => [...tempData]);
  };

  const _renderHorizontal = ({item, index}) => {
    return (
      <>
        <Wrapper
          isTouchable
          onPress={() => handleRenderHorizontal(item, index)}
          style={{
            backgroundColor: item.isSelect ? colors.appColor2 : '#ffffff',
            height: height(17),
            width: width(26),
            paddingVertical: height(0.5),
            paddingHorizontal: width(1),
            borderRadius: 5,
            marginLeft: index == 0 ? sizes.marginHorizontal : width(1),
            marginRight: index == data.length - 1 ? sizes.baseMargin : null,
          }}>
          <Wrapper>
            <Image
              source={appImages.cover}
              //   resizeMode={'contain'}
              style={{
                height: height(16),
                width: width(24),
                borderRadius: 5,
              }}
            />
          </Wrapper>
          <Wrapper
            isAbsolute
            isTransParent
            alignItemsCenter
            style={{
              height: height(3),
              width: width(24),
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              marginTop: height(13.5),
              marginHorizontal: width(1),
            }}>
            <Text isWhite isTiny style={{textAlign: 'center'}}>
              {item.description}
            </Text>
          </Wrapper>
        </Wrapper>
      </>
    );
  };

  const _renderVerticaly = ({item, index}) => {
    return (
      <Wrapper
        isTouchable
        onPress={() => {
          // authContext.setGridViewIndex(index);
          navigate(routes.sliderScreen);
        }}
        style={{
          backgroundColor: '#ffffff',
          height: height(28),
          width: width(44),
          borderRadius: 5,
          marginLeft: index % 2 != 0 ? width(2) : null,
          marginBottom: height(1),
        }}>
        <Wrapper>
          <Image
            source={appImages.cover}
            //   resizeMode={'contain'}
            style={{
              height: height(28),
              width: width(44),
              borderRadius: 5,
            }}
          />
        </Wrapper>
        <Wrapper
          isAbsolute
          isCenter
          flexDirectionRow
          style={{
            height: 25,
            width: 25,
            borderRadius: 100,
            backgroundColor: '#000000',
            marginTop: height(0.8),
            marginLeft: width(35.5),
          }}>
          <Text isMedium isBoldFont style={{color: colors.selected}}>
            {index + 1}
          </Text>
        </Wrapper>
      </Wrapper>
    );
  };
  return (
    <ScrollViews.KeyboardAvoiding scrollEnabled={true}>
      <Wrapper style={{backgroundColor: colors.silver}}>
        <Wrapper style={{backgroundColor: colors.appBgColor2}}>
          <Spacer isTiny />
          <FlatList data={offers} horizontal renderItem={_renderHorizontal} />
          <Spacer isTiny />
        </Wrapper>

        <Spacer isTiny />
        <Wrapper paddingHorizontalBase>
          <FlatList
            scrollEnabled={false}
            data={subOffer}
            numColumns={2}
            renderItem={_renderVerticaly}
          />
        </Wrapper>
        <Spacer height={height(25)} />
      </Wrapper>
    </ScrollViews.KeyboardAvoiding>
  );
}

export default Offers;
