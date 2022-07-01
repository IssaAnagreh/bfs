import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {AppTextPropsInterface} from './app-text-props.interface';

export function AppTextTemplate(props: AppTextPropsInterface) {
  return <Text style={[styles.txt, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  txt: {},
});
