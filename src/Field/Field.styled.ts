import styled, { css } from 'styled-components/macro';
import Field from './Field';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';
import { variant } from 'styled-system';
import { FieldInputProps } from './utils';

export const LabelStyled = styled(FieldLabel)``;
export const MessageStyled = styled(FieldMessage)``;

export const Wrapper = styled(Field)<{ tone: FieldInputProps['tone'] }>`
  &:not(:focus-within) {
    & ${LabelStyled} {
      color: ${(props) => props.theme.colors.text.light};
    }
    & ${MessageStyled} {
      color: ${(props) => !props.tone && props.theme.colors.text.light};
    }
  }
  &:focus-within {
    & ${LabelStyled} {
      color: ${(props) => props.theme.colors.text.default};
    }
    & ${MessageStyled} {
      color: ${(props) => !props.tone && props.theme.colors.text.default};
    }
  }
`;

export const Input = styled.input`
  all: unset;
  font-size: inherit;
  color: ${(props) => props.theme.colors.text.default};
  line-height: 1.2;
  border: none;
  background: transparent;
  flex: 1 1 auto;
  padding: 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.text.ultralight};
  }
  &[readonly] {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const FieldIcon = styled.span`
  display: inline-flex;
`;

function clearButtonVisibility({ shown }: { shown: boolean }) {
  if (shown) {
    return css`
      opacity: 1;
      visibility: visible;
    `;
  }

  return css`
    opacity: 0;
    visibility: hidden;
  `;
}

export const FieldClearButton = styled.span<{ shown: boolean }>`
  display: inline-block;
  transition: opacity 0.12s ease-in-out;

  ${clearButtonVisibility}
`;

const size = variant<object, keyof FieldInputProps['size']>({
  prop: 'size',
  variants: {
    s: {
      px: '4px',
      height: 26,
      fontSize: 's',
      [`& ${FieldClearButton}`]: {
        pl: '2px',
        mr: '-2px',
      },
      [`& ${FieldIcon}`]: {
        pr: '2px',
        ml: '-2px',
      },
    },
    m: {
      px: '8px',
      height: 36,
      fontSize: 'm',
      [`& ${FieldClearButton}`]: {
        pl: '4px',
        mr: '-4px',
      },
      [`& ${FieldIcon}`]: {
        pr: '4px',
        ml: '-4px',
      },
    },
    l: {
      px: '12px',
      height: 46,
      fontSize: 'l',
      [`& ${FieldClearButton}`]: {
        pl: '6px',
        mr: '-6px',
      },
      [`& ${FieldIcon}`]: {
        pr: '6px',
        pt: '2px', // for visual center alignment with input
        ml: '-6px',
      },
    },
  },
});

const tone = variant<object, FieldInputWrapperProps['tone']>({
  prop: 'tone',
  variants: {
    default: {
      'borderColor': 'border.default',
      '&:hover': {
        borderColor: 'border.hover',
      },
      '&:focus-within': {
        borderColor: 'border.focus',
      },
    },
    positive: {
      'borderColor': 'positive.1',
      '&:hover': {
        borderColor: 'positive.2',
      },
      '&:focus-within': {
        borderColor: 'positive.3',
      },
    },
    critical: {
      'borderColor': 'critical.1',
      '&:hover': {
        borderColor: 'critical.2',
      },
      '&:focus-within': {
        borderColor: 'critical.3',
      },
    },
  },
});

const visualVariant = variant<object, NonNullable<FieldInputProps['variant']> | 'default'>({
  prop: 'variant',
  variants: {
    default: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 'm',
      backgroundColor: 'surface.1',
    },
    underlined: {
      'borderBottomWidth': '2px',
      'borderBottomStyle': 'solid',
      'borderTopLeftRadius': 'm',
      'borderTopRightRadius': 'm',
      'position': 'relative',
      '&:after': {
        content: '',
        display: 'block',
        position: 'absolute',
        borderBottom: 'solid 2px',
        borderColor: 'brand.500',
        transform: ' scaleX(0)',
        transition: 'transform 250ms ease-in-out',
        left: '0',
        bottom: '-2px',
        width: '100%',
      },
      '&:focus-within:after': {
        transform: 'scaleX(1)',
      },
    },
    borderless: {
      border: 'none',
    },
  },
});

function disabled({ disabled }: { disabled?: boolean }) {
  if (disabled) {
    return css`
      pointer-events: none;
      background: ${(props) => props.theme.colors.surface.disabled};
      border-color: ${(props) => props.theme.colors.surface.disabled} !important;
    `;
  }

  return null;
}

type FieldInputWrapperProps = {
  disabled?: boolean;
  underlined?: boolean;
  size: FieldInputProps['size'];
  tone: NonNullable<FieldInputProps['tone']> | 'default';
  variant: NonNullable<FieldInputProps['variant']> | 'default';
};

export const FieldInputWrapper = styled.div<FieldInputWrapperProps>`
  display: inline-flex;
  align-items: center;
  flex-flow: row nowrap;
  box-sizing: border-box;
  width: 100%;
  cursor: text;
  color: ${(props) => props.theme.colors.text.default};
  ${visualVariant}
  ${tone}
  ${size}
  ${disabled}
`;
