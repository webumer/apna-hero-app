import React, {useState} from 'react';
import {appStyles, colors, sizes} from '../../services';
import {Icons, Wrapper, Text, StatusBars} from '..';
import {goBack} from '../../navigation/rootNavigation';
import {appIcons} from '../../services';
import {height, width} from 'react-native-dimension';
import Spacer from '../spacer';
import {FlatList} from 'react-native';

export const Primary = ({
  onPresMenu,
  onPresRefres,
  title,
  right,
  left,
  showBackArrow,
}) => {
  /// state
  const [data, setData] = useState([
    {
      icon: appIcons.offer,
      name: 'Offers',
      isSelect: true,
      id: 1,
      show: true,
    },
    {
      icon: appIcons.offer,
      name: 'Products',
      isSelect: false,
      id: 2,
      show: true,
    },
    {
      icon: appIcons.offer,
      name: 'Shoping list',
      isSelect: false,
      id: 3,
      show: true,
    },
    {
      icon: appIcons.offer,
      name: 'other',
      isSelect: false,
      id: 4,
      other: false,
      show: true,
    },
    {
      icon: appIcons.offer,
      name: 'Receipt',
      isSelect: false,
      id: 5,
      show: false,
    },
    {
      icon: appIcons.offer,
      name: 'Loyalty card',
      isSelect: false,
      id: 6,
      show: false,
    },
    {
      icon: appIcons.offer,
      name: 'feed',
      isSelect: false,
      id: 7,
      show: false,
    },
  ]);
  const [otherSelect, setOtherSelect] = React.useState(false);

  /// header category function.
  const headerCategory = async (item, index) => {
    let tempData = data;
    if (index == 3) {
      if (item.other == false) {
        tempData[index].other = true;
        tempData.forEach((tempItem, tempIndex) => {
          if (tempIndex > 3) {
            tempItem.show = true;
          }
        });
        setData(data => tempData);
        setOtherSelect(value => true);
      } else {
        tempData[index].other = false;
        tempData.map((tempItem, tempIndex) => {
          if (tempIndex > 3) {
            tempItem.show = false;
          }
        });
        setData(data => tempData);
        setOtherSelect(value => false);
      }
    } else {
      if (item.isSelect == true) {
        tempData[index].isSelect = true;
        setData(data => [...tempData]);
      } else {
        tempData.forEach((tempItem, tempIndex) => {
          if (tempIndex == index) {
            tempItem.isSelect = true;
          } else {
            tempItem.isSelect = false;
          }
        });
        setData(data => [...tempData]);
      }
    }
  };
  const _renderTopBar = () => {
    return (
      <FlatList
        data={data}
        numColumns={4}
        renderItem={({item, index}) => {
          return (
            <>
              {item.show ? (
                <Wrapper
                  style={{
                    flexWrap: 'wrap',
                    borderBottomWidth:
                      index != 3 && item.isSelect && !otherSelect ? 2 : null,
                    borderBottomColor: colors.selected,
                  }}
                  paddingHorizontalMedium>
                  <Icons.WithText
                    text={item.name}
                    textStyle={{
                      color:
                        index != 3 && item.isSelect
                          ? colors.selected
                          : colors.appBgColor1,
                    }}
                    direction={'column'}
                    iconSize={35}
                    customIcon={item.icon}
                    onPress={() => headerCategory(item, index)}
                  />
                </Wrapper>
              ) : null}
            </>
          );
        }}
      />
    );
  };
  return (
    <Wrapper
      style={[
        appStyles.headerStyle,
        {justifyContent: 'center', paddingTop: sizes.statusBarHeight},
      ]}>
      <StatusBars.Light />
      <Spacer isBasic />
      <Wrapper justifyContentSpaceBetween flexDirectionRow>
        <Wrapper paddingHorizontalBase alignItemsCenter flexDirectionRow>
          <Icons.Custom onPress={onPresMenu} icon={appIcons.menu} size={20} />
          <Wrapper paddingHorizontalMedium>
            <Text isBoldFont isTinyTitle isWhite>
              D4D
            </Text>
          </Wrapper>
        </Wrapper>
        <Wrapper paddingHorizontalBase alignItemsCenter flexDirectionRow>
          <Wrapper
            isCenter
            marginHorizontalBase
            style={{
              height: height(4),
              width: width(14),
              backgroundColor: colors.appColor2,
              borderRadius: 5,
            }}>
            <Text isMedium isWhite>
              Doha
            </Text>
          </Wrapper>
          <Icons.Custom
            icon={appIcons.refresh}
            onPress={onPresRefres}
            size={20}
          />
        </Wrapper>
      </Wrapper>
      <Spacer isBasic />
      <_renderTopBar />
    </Wrapper>
  );
};
