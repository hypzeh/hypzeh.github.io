import PropTypes from 'prop-types';

export default {
  CHILDREN: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
