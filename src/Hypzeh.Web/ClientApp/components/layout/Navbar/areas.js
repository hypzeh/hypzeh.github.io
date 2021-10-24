import NSLogo from '~components/shared/icons/NSLogo';
import SmallifyLogo from '~components/shared/icons/SmallifyLogo';

export default ([
  {
    id: 'home',
    to: '/',
    iconComponent: NSLogo,
  },
  { id: 'seperator-1' },
  {
    id: 'smallify',
    to: '/smallify',
    iconComponent: SmallifyLogo,
  },
]);
