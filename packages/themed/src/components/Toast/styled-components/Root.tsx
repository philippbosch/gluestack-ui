import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Toast',
  descendantStyle: ['_icon', '_text'],
} as const);
