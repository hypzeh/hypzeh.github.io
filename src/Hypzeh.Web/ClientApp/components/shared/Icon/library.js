import ns from './assets/ns.svg';
import smallify from './assets/smallify.svg';

const getByName = (name) => {
  switch (name.toLowerCase()) {
    case 'ns':
      return ns;

    case 'smallify':
      return smallify;

    default:
      console.error(`Icon '${name}' does not exist.`);
      return '';
  }
};

export default { getByName };
