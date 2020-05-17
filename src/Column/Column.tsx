import { ColumnStyled } from './Column.styled';

ColumnStyled.defaultProps = {
  width: 'fluid',
};

if (__DEV__) {
  ColumnStyled.displayName = 'FxColumn';
}

export default ColumnStyled;
