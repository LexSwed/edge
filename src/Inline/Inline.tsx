import React from 'react';

import { renderValidChild, Size } from '../@utils';
import { Wrapper, Flex, Child } from './Inline.styled';

const Inline = React.forwardRef<HTMLDivElement, Props>(
  ({ space, align = 'left', alignY = 'center', nowrap = false, children, ...props }, ref) => {
    return (
      <Wrapper space={space} {...props}>
        <Flex space={space} align={align} alignY={alignY} nowrap={nowrap} ref={ref}>
          {renderValidChild(children, (child) => (
            <Child pt={space} pl={space}>
              {child}
            </Child>
          ))}
        </Flex>
      </Wrapper>
    );
  }
);

if (__DEV__) {
  Inline.displayName = 'FxInline';
}

export default Inline;

type Props = React.ComponentProps<typeof Flex> & {
  /**
   * Space between items
   */
  space?: Size;
  /**
   * Horizontal alignment
   * @default 'left'
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Vertical alignment
   * @default 'center'
   */
  alignY?: 'center' | 'top' | 'bottom';
  /**
   * Disable wrapping elements to new line
   * @default false
   */
  nowrap?: boolean;
};
