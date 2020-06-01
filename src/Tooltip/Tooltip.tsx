import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { useSpring } from 'react-spring';

import { Wrapper } from './Tooltip.styled';

type Props = {
  content?: React.ReactNode;
  placement?: TippyProps['placement'];
  delay?: TippyProps['delay'];
  children: React.ReactElement;
};

const Tooltip: React.FC<Props> = ({ content, placement = 'top', delay = 200, children }) => {
  const trigger = React.Children.only(children);
  const config = { tension: 400 };
  const initialStyles = { opacity: 0, transform: placement.includes('top') ? 'translateY(5px)' : 'translateY(-5px)' };
  const [props, setSpring] = useSpring(() => initialStyles);

  const onMount: TippyProps['onMount'] = () => {
    setSpring({
      opacity: 1,
      transform: 'translateY(0)',
      onRest: () => {},
      config,
    });
  };

  const onHide: TippyProps['onHide'] = ({ unmount }) => {
    setSpring({
      ...initialStyles,
      onRest: unmount,
      config: { ...config, clamp: true },
    });
  };

  return (
    <Tippy
      render={(attrs) => (
        <Wrapper p="xs" style={props} {...attrs}>
          {content}
        </Wrapper>
      )}
      delay={delay}
      placement={placement}
      disabled={trigger.props?.disabled}
      interactive={true}
      interactiveBorder={10}
      animation={true}
      onMount={onMount}
      onHide={onHide}
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
