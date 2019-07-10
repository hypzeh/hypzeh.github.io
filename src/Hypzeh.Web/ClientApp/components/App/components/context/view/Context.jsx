import React from 'react';

import { initialState } from './reducer';

const Context = React.createContext(initialState);

export default Context;
