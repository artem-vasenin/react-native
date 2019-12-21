import React, {useReducer} from 'react';
import {ScreenContext} from './ScreenContext';
import {ScreenRediser} from './ScreenReducer';
import { CHANGE_SCREEN } from '../types';

export const ScreenState = ({children}) => {
    const [state, dispatch] = useReducer(ScreenRediser, null);

    const ChangeScreen = id => dispatch({
        type: CHANGE_SCREEN,
        payload: id,
    });

    return (
    <ScreenContext.Provider value={{
        ChangeScreen,
        todoId: state,
    }}>
        {children}
    </ScreenContext.Provider>
    );
};