import { createStyle } from '@gluestack-style/react';

export const TableCaption = createStyle({
  px: '$6',
  py: '$5',
  bg: '$backgroundLight50',
  color: '$textLight900',
  fontFamily: '$body',
  fontStyle: 'normal',
  fontSize: '$md',
  fontWeight: '$medium',
  lineHeight: '$md',
  _dark: {
    color: '$textDark50',
    bg: '$backgroundDark950',
  },
  _android: {
    textAlignVertical: 'center',
  },
  _web: {
    captionSide: 'bottom',
  },
});