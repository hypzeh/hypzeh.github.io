export const createPipeline = (middlewares) => {
  const stack = [...middlewares];

  const add = (middleware) => {
    if (typeof (middleware) !== 'function') throw new TypeError('Middleware must be a function');

    stack.push(...middleware);
  };

  const execute = async (context) => {
    let previousIndex = -1;
    const dispatch = async (index) => {
      if (index === previousIndex) throw new Error('middleware called next() multiple times');

      previousIndex = index;

      const middleware = stack[index];
      if (!middleware) return;

      await middleware(context, () => dispatch(index + 1));
    };

    await dispatch(0);
  };

  return ({ add, execute });
};

export default { createPipeline };
