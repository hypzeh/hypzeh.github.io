import wait from '~utils/wait';

const delay = async (context, next) => {
  await wait(500);
  await next();
};

export default delay;
