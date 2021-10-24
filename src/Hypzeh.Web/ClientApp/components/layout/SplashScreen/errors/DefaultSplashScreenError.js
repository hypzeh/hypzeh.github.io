import SplashScreenError from './SplashScreenError';

export default class DefaultSplashScreenError extends SplashScreenError {
  constructor() {
    super('warning', 'An unknown error occured.', [{ text: 'Refresh', onClick: () => window.location.reload() }]);
  }
}
