import React from 'react';

import { usePopoverRefs } from '../Popover/utils';
import { useMemo } from 'react';
import { TriggerWrapper } from './Tooltip.styled';

type Props = { hover?: boolean; setShown: React.Dispatch<React.SetStateAction<boolean>> };

const Trigger: React.FC<Props> = ({ children, hover, setShown }) => {
  const { triggerRef } = usePopoverRefs();

  const handlers = useMemo(() => {
    const props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> = hover
      ? {
          onMouseEnter: () => setShown(true),
          onMouseLeave: () => setShown(false),
        }
      : {};

    props.onFocus = () => setShown(true);
    props.onBlur = () => setShown(false);

    return props;
  }, [hover, setShown]);

  return (
    <TriggerWrapper {...handlers} ref={triggerRef}>
      {children}
    </TriggerWrapper>
  );
};

export default Trigger;
