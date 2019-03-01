import { shape, string, arrayOf } from 'prop-types';

export default {
  project: shape({
    title: string.isRequired,
    thumbnail: string,
    description: string,
    tags: arrayOf(string),
  }).isRequired,
};
