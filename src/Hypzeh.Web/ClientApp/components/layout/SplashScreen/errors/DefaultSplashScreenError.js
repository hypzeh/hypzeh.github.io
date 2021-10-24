import SplashScreenError from './SplashScreenError';

export default class DefaultSplashScreenError extends SplashScreenError {
  constructor() {
    super('standard', 'An unknown error occured.', [{ text: 'Refresh', onClick: () => window.location.reload() }]);
  }
}
