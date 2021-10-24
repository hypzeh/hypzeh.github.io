import wait from '~utils/wait';

const delay = async (context, next) => {
  await wait(500);

  throw new Error('TEST');
  await next();
};

export default delay;
