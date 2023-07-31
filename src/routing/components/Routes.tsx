import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {Drinks, Main, OtherDishes, Pizzas, Sets, Snacks} from "../../pages";

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<Main/>}/>
      <Route path='/Sets' element={<Sets/>}/>
      <Route path='/Pizza' element={<Pizzas/>}/>
      <Route path='/otherDishes' element={<OtherDishes/>}/>
      <Route path='/Snacks' element={<Snacks/>}/>
      <Route path='/Drinks' element={<Drinks/>}/>
      {/*<Route path='/:isbn13' element={}/>*/}
    </RoutesSource>
  );
};
