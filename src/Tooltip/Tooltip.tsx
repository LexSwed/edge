import React, { useState } from 'react';

import Popover from '../Popover';
import { UsePopper, PopoverWrapper } from '../Popover/utils';
import { Wrapper } from './Tooltip.styled';

import Trigger from './Trigger';

type Props = {
  content?: React.ReactNode;
  placement?: UsePopper['placement'];
  offset?: UsePopper['offset'];
  hover?: React.ComponentProps<typeof Trigger>['hover'];
};

const Tooltip: React.FC<Props> = ({ hover, content, offset = [0, 10], placement = 'top', children }) => {
  const [shown, setShown] = useState(false);

  return (
    <PopoverWrapper>
      <Trigger setShown={setShown} hover={hover}>
        {children}
      </Trigger>
      <Popover shown={shown} placement={placement} offset={offset}>
        <Wrapper p="xs">{content}</Wrapper>
      </Popover>
    </PopoverWrapper>
  );
};

export default Tooltip;
