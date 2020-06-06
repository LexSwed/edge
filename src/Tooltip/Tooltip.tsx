import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react/headless';

import { Wrapper } from './Tooltip.styled';

type Props = {
  content?: React.ReactNode;
  placement?: TippyProps['placement'];
  delay?: TippyProps['delay'];
  children: React.ReactElement;
};

const Tooltip: React.FC<Props> = ({ content, placement = 'top', delay = 100, children }) => {
  const trigger = React.Children.only(children);

  return (
    <Tippy
      render={(attrs) => (
        <Wrapper role="tooltip" {...attrs}>
          {content}
        </Wrapper>
      )}
      delay={delay}
      placement={placement}
      disabled={trigger.props?.disabled}
      interactive={true}
      interactiveBorder={10}
      offset={[0, 5]}
      aria={{
        content: 'describedby',
      }}
    >
      {trigger}
    </Tippy>
  );
};

export default Tooltip;
