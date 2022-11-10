import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {height, totalSize, width} from 'react-native-dimension';
import {colors} from '../../services';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

export const KeyboardAvoiding = ({
  children,
  style,
  animation,
  scrollEnabled,
  onscroll,
  nestedScrollEnabled,
  ref,
}) => {
  return (
    <KeyboardAwareScrollView
      scrollEnabled={scrollEnabled}
      nestedScrollEnabled={nestedScrollEnabled}
      onScroll={onscroll}
      showsVerticalScrollIndicator={false}
      ref={ref}
      keyboardShouldPersistTaps="always">
      {children}
    </KeyboardAwareScrollView>
  );
};

export const WithKeyboardAvoidingView = ({children, footer}) => {
  return (
    <KeyboardAvoidingView
      style={{height: height(100)}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView>{children}</ScrollView>
      {footer}
    </KeyboardAvoidingView>
  );
};
