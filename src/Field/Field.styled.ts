import styled, { css, ThemeProps, DefaultTheme } from 'styled-components/macro';
import Field from './Field';
import FieldLabel from '../FieldLabel';
import FieldMessage from '../FieldMessage';
import { variant } from 'styled-system';
import { FieldInputProps } from './utils';
import { Size } from '../@utils';
import { outline } from '../Edge/theme';

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

export const fieldStyles = ({ withIcon, withClearButton, theme }: FieldProps & ThemeProps<DefaultTheme>) => {
  return css`
  color: ${theme.colors.text.default};
  background-color: ${theme.colors.surface[1]};
  border: none;
  cursor: text;
  padding-left: ${withIcon ? INPUT_SIZE : `${theme.space.s}px`};
  padding-right: ${withClearButton ? INPUT_SIZE : `${theme.space.s}px`};
  ${outline}
  ${variants}
  ${underlinedVariant}
  ${tone}
  ${disabled}
  `;
};

export const INPUT_SIZE = '36px';

export const Input = styled.input<FieldProps>`
  all: unset;
  font-size: inherit;
  color: ${(props) => props.theme.colors.text.default};
  line-height: 1.2;
  border: none;
  background: transparent;
  flex: 1 1 auto;
  padding: 0;
  width: 100%;
  height: ${INPUT_SIZE};
  ${fieldStyles}
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

export const FieldIcon = styled.span<{ size?: Size }>`
  display: inline-flex;
  position: absolute;
  left: 0px;
  height: ${INPUT_SIZE};
  width: ${INPUT_SIZE};
  padding: 10px;
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
  position: absolute;
  right: 0px;
  height: ${INPUT_SIZE};
  width: ${INPUT_SIZE};
  padding: 5px;
  ${clearButtonVisibility}
`;

const tone = variant<object, FieldProps['tone']>({
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

const variants = variant<object, NonNullable<FieldInputProps['variant']> | 'default'>({
  prop: 'variant',
  variants: {
    default: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 'm',
    },
    underlined: {
      'borderBottomWidth': '1px',
      'borderBottomStyle': 'solid',
      'borderTopLeftRadius': 'm',
      'borderTopRightRadius': 'm',
      'paddingBottom': '1px',
      'position': 'relative',
      '&:focus-within': {
        outlineWidth: 0,
      },
    },
    borderless: {
      border: 'none',
    },
  },
});

function underlinedVariant(props: FieldProps) {
  if (props.variant === 'underlined') {
    return css<FieldProps>`
      &:after {
        content: '';
        display: block;
        position: absolute;
        border-bottom: solid 2px;
        ${(props) => {
          if (props.disabled) {
            return css`
              border-color: ${(props) => props.theme.colors.border.default};
              transform: scaleY(0.5);
            `;
          }
          return css`
            border-color: inherit;
            transform: scaleY(0.5) scaleX(0);
          `;
        }}
        transition: transform 250ms ease-in-out;
        left: 0;
        bottom: -1px;
        width: 100%;
      }
      &:focus-within:after {
        transform: scaleX(1);
      }
    `;
  }

  return null;
}

function disabled({ disabled }: { disabled?: boolean }) {
  if (disabled) {
    return css`
      background: ${(props) => props.theme.colors.surface.disabled};
      border-color: ${(props) => props.theme.colors.surface.disabled} !important;
      cursor: not-allowed;
    `;
  }

  return null;
}

export const fieldWrapperStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-flow: row nowrap;
  box-sizing: border-box;
  width: 100%;
`;

export const FieldInputWrapper = styled.div`
  ${fieldWrapperStyles}
`;

type FieldProps = {
  disabled?: boolean;
  underlined?: boolean;
  tone: NonNullable<FieldInputProps['tone']> | 'default';
  variant: NonNullable<FieldInputProps['variant']> | 'default';
  withClearButton: boolean;
  withIcon: Boolean;
};
