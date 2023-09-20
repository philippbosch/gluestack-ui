import { Motion } from '@legendapp/motion';
import { styled } from '@gluestack-style/react';
import { AnimationResolver } from '@gluestack-style/animation-plugin';

export default styled(
  Motion.View,
  {},
  {
    componentName: 'SelectActionsheetContent',
    descendantStyle: ['_sectionHeaderBackground'],
  } as const,
  {
    plugins: [new AnimationResolver({})],
  }
);
