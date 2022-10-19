import React, {Component} from 'react';
import {FlatList, Touchable, TouchableOpacity, View} from 'react-native';
import {Wrapper, Text, Spacer} from '../../../components';
import {height, width} from 'react-native-dimension';
import {appStyles, routes} from '../../../services';

function SelectCity(props) {
  /// props
  const {replace} = props.navigation;
  /// state
  const [city, setCity] = React.useState([
    {
      city: 'Islamabad',
      id: 1,
    },
    {
      city: 'Lahore',
      id: 2,
    },
    {
      city: 'Peshaware',
      id: 3,
    },
    {
      city: 'Hangue',
      id: 4,
    },
    {
      city: 'Kohat',
      id: 5,
    },
    {
      city: 'Karachi',
      id: 6,
    },
  ]);

  const _renderCity = data => {
    return (
      <FlatList
        data={city}
        numColumns={3}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return (
            <Wrapper
              isCardView
              style={{
                height: height(10),
                width: width(27),
                marginBottom: height(2),
                marginRight: 0,
              }}>
              <Wrapper
                isTouchable
                // isTouchable
                style={[
                  appStyles.center,
                  {
                    flex: 1,
                    borderRadius: 10,
                  },
                ]}
                onPress={() => {
                  replace(routes.app);
                }}>
                <Text isMedium>{item.city}</Text>
              </Wrapper>
            </Wrapper>
          );
        }}
      />
    );
  };
  return (
    <Wrapper isMain>
      <Spacer isDoubleBase />
      <_renderCity />
    </Wrapper>
  );
}

export default SelectCity;
