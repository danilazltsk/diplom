import React, { Component } from 'react';
import {Routes, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from '../routes.js';
import { SHOP_ROUTE } from '../utils/consts.js';

const AppRouter = () => {
        const isAuth = false
        return (
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {publicRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Redirect to={SHOP_ROUTE}/>
            </Routes>
        );
    };


export default AppRouter;
