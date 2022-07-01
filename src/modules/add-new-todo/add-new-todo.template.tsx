import React, {ForwardedRef, forwardRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {AddNewTodoPropsInterface} from './add-new-props.interface';

export const AddNewTodoTemplate = forwardRef(
  (props: AddNewTodoPropsInterface, ref: ForwardedRef<TextInput | null>) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-25}>
        <SafeAreaView
          edges={['bottom']}
          style={[styles.container, props.containerStyle]}>
          {props.left}
          <View style={[styles.txtContainer, props.style]}>
            <TextInput
              onChangeText={props.onChangeTxt}
              style={styles.input}
              placeholder="Add New Todo"
              ref={ref}
              testID={'input'}
            />
          </View>
          {props.right}
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  },
);

const height = 50;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
  },
  txtContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height,
    borderRadius: height / 2,
  },
  input: {
    width: '90%',
    height: '100%',
  },
});
