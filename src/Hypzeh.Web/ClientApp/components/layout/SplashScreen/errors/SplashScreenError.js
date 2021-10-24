export default class SplashScreenError extends Error {
  constructor(type, message, actions) {
    super(message);
    this.name = this.constructor.name;
    this.data = { type, message, actions };
    Error.captureStackTrace(this, this.constructor);
  }

  handle() {
    return ({
      type: this.data.type,
      message: this.data.message,
      actionHandlers: this.data.actions,
    });
  }
}
