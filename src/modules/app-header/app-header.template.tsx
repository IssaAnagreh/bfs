import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DARK_COLORS} from '../../lib/theme/colors';
import {hp} from '../../lib/theme/sizes';
import {AppText} from '../app-text/app-text';
import {AppHeaderPropsInterface} from './app-header-props.interface';

export function AppHeaderTemplate(props: AppHeaderPropsInterface) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <AppText style={styles.title}>{props.title}</AppText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: DARK_COLORS.BLUE['#1DA1F2'],
    marginBottom: hp(0.2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 90,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  backContainer: {
    alignItems: 'center',
  },
});
