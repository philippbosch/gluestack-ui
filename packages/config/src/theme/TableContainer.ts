import { createStyle } from '@gluestack-style/react';

export const TableContainer = createStyle({
  borderRadius: '$lg',
  overflow: 'hidden',
  _table: {
    bg: '$backgroundLight0',
    _dark: {
      bg: '$backgroundDark900',
    },
    _web: {
      borderCollapse: 'collapse',
    },
  },
  _head: {
    bg: '$backgroundLight50',
    _dark: {
      bg: '$backgroundDark950',
    },
  },
  _headerText: {
    minWidth: 219,
    fontSize: '$md',
    fontFamily: '$heading',
    lineHeight: '$lg',
    fontStyle: 'normal',
    px: '$6',
    h: '$16',
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
    textAlign: 'left',
    _android: {
      textAlignVertical: 'center',
    },
    _ios: {
      lineHeight: '60%',
    },
  },
  _data: {
    minWidth: 219,
    px: '$6',
    h: '$16',
    fontFamily: '$body',
    fontStyle: 'normal',
    fontSize: '$md',
    fontWeight: '$medium',
    lineHeight: '$md',
    color: '$textLight900',
    _dark: {
      color: '$textDark50',
    },
    _android: {
      textAlignVertical: 'center',
    },
    _ios: {
      lineHeight: '60%',
    },
  },
  _footer: {
    bg: '$backgroundLight50',
    _dark: {
      bg: '$backgroundDark950',
    },
  },
});
