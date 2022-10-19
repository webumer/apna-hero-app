import React, {Component} from 'react';
import {FlatList, Touchable, TouchableOpacity, View} from 'react-native';
import {Wrapper, Text, Spacer, Headers, Buttons} from '../../../components';
import {height, width} from 'react-native-dimension';
import {appIcons, appStyles, colors} from '../../../services';
import {sizes} from '../../../services/utilities';
function Home() {
  const [suggetionData, setSuggetionData] = React.useState([
    'Iphone',
    'Iphone 13 pro',
    'android',
    'Laptop',
  ]);

  const [categoryTitle, setCategoryTitle] = React.useState([
    {
      title: 'like',
      isSelect: false,
    },
    {
      title: 'All offers',
      isSelect: true,
    },
    {
      title: 'supermarket',
      isSelect: false,
    },
    {
      title: 'Electronics',
      isSelect: false,
    },
    {
      title: 'furniture',
      isSelect: false,
    },
    {
      title: 'sports',
      isSelect: false,
    },
    {
      title: 'Hospital & Clinic',
      isSelect: false,
    },
    {
      title: 'other',
      isSelect: false,
    },
  ]);
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
  const _renderCategory = ({item, index}) => {
    return (
      <>
        {index == 0 ? (
          <Wrapper style={{marginLeft: sizes.marginHorizontal}}>
            <Buttons.ColoredSmall
              buttonStyle={[
                appStyles.shadow,
                {
                  height: 35,
                  width: 35,
                  borderRadius: 100,
                  paddingHorizontal: null,
                  paddingVertical: null,
                  marginBottom: height(2),
                },
              ]}
              onPress={() => handleCategory(item, index)}
              customIcon={appIcons.like}
              iconColor={item.isSelect ? colors.appBgColor1 : colors.appColor1}
              backgroundColor={
                item.isSelect ? colors.appColor1 : colors.appBgColor1
              }
            />
          </Wrapper>
        ) : (
          <Wrapper style={{width: width(25)}}>
            <Buttons.ColoredSmall
              text={item.title}
              buttonStyle={[
                appStyles.shadow,
                {
                  height: 35,
                  width: null,
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
        )}
      </>
    );
  };

  const _renderShop = () => {
    // return (
    // )
  };
  return (
    <Wrapper isMain>
      <Wrapper style={{backgroundColor: colors.silver}}>
        <Headers.Primary />
        <Spacer isTiny />
        <Buttons.Search data={suggetionData} />
        <Spacer isSmall />
      </Wrapper>
      <Wrapper style={{backgroundColor: colors.silver}}>
        <FlatList
          data={categoryTitle}
          horizontal
          renderItem={_renderCategory}
        />
      </Wrapper>
    </Wrapper>
  );
}

export default Home;
