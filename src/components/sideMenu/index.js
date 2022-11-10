import * as React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {totalSize} from 'react-native-dimension';
import {Icons, Lines, Modals} from '..';
import {appIcons, colors, routes} from '../../services';
import Spacer from '../spacer';
import Wrapper from '../wrapper';
import {Text} from '..';
export default function SideMenu({navigation}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const {navigate} = navigation;
  const {replace} = navigation;

  return (
    <Wrapper
      style={{
        backgroundColor: colors.appColor1,
        flex: 1,
      }}>
      <Spacer isDoubleBase />
      <Spacer isBasic />
      <Wrapper isCenter>
        <Icons.Custom icon={appIcons.grid} color={'#ffffff'} />
        <Spacer isBasic />
        <Text isWhite isMedium>
          Good Evening User130000072
        </Text>
      </Wrapper>
      <Spacer isDoubleBase />

      <Wrapper
        paddingHorizontalBase
        flexDirectionRow
        justifyContentSpaceBetween>
        <Text isWhite isMedium style={{fontSize: 15}}>
          Islamabad
        </Text>

        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15}}
          text={'English'}
        />
      </Wrapper>
      <Spacer isSmall />
      <Lines.Horizontal color={'red'} />
      <Spacer isSmall />

      <Wrapper paddingHorizontalBase>
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Cutiets'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Notification'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Settings'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Bookmark'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'SOS'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'QR Scanner'}
        />
      </Wrapper>
      <Spacer isSmall />
      <Lines.Horizontal color={'red'} />
      <Spacer isSmall />
      <Wrapper paddingHorizontalBase>
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Contact'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Suggestions'}
        />
      </Wrapper>
      <Spacer isSmall />
      <Lines.Horizontal color={'red'} />
      <Spacer isSmall />
      <Wrapper paddingHorizontalBase>
        <Icons.WithText
          customIcon={appIcons.share}
          tintColor={'#ffff'}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Contact'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Rate'}
        />
        <Spacer isSmall />
        <Icons.WithText
          customIcon={appIcons.refresh}
          textStyle={{fontSize: 15, fontWeight: 'bold'}}
          text={'Login'}
        />
      </Wrapper>
    </Wrapper>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     paddingHorizontal: 10,
//     flexDirection: 'column',
//     paddingTop: 60,
//     width: '50%',
//     alignSelf: 'flex-end',
//     justifyContent: 'flex-start',
//     // alignItems:'flex-end',
//     height: '100%',
//   },
//   closeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     // flex:1
//   },
//   closeIcon: {
//     height: 25,
//     width: 25,
//     marginRight: 20,
//     // backgroundColor:'black',
//   },
//   tabIcon: {
//     height: 30,
//     width: 30,
//     marginRight: 10,
//   },
//   menuItemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   txt: {
//     color: Colors.light.text,
//     fontFamily: 'WorkSans-Medium',
//     fontSize: 16,
//     // marginTop: 10,
//   },
// });
