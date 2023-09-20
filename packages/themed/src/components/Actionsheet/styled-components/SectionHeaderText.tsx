import { Heading } from '../../Heading';
import { styled } from '@gluestack-style/react';

export default styled(Heading, {}, {
  componentName: 'ActionsheetSectionHeaderText',
  ancestorStyle: ['_sectionHeaderBackground'],
} as const);
