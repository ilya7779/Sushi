import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Main, Sets} from "../../pages";

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/Sushi' element={<Main/>}/>
      <Route path='/Sets' element={<Sets/>}/>
      {/*<Route path='/:isbn13' element={}/>*/}
    </RoutesSource>
  );
};
