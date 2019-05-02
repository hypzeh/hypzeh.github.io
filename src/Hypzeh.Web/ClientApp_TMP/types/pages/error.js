import {
  oneOfType,
  number,
  string,
  func,
} from 'prop-types';

export const propTypes = {
  code: oneOfType([number, string]),
  message: string,
  goBack: func,
};

export const defaultProps = {
  code: 500,
  message: 'Oops, something broke!',
  goBack: undefined,
};
