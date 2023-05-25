import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Drinks, Main, Pizza, Sets, Snacks} from "../../pages";

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/Sushi' element={<Main/>}/>
      <Route path='/Sets' element={<Sets/>}/>
      <Route path='/Pizza' element={<Pizza/>}/>
      <Route path='/Snacks' element={<Snacks/>}/>
      <Route path='/Drinks' element={<Drinks/>}/>
      {/*<Route path='/:isbn13' element={}/>*/}
    </RoutesSource>
  );
};
