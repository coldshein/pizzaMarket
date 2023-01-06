import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./Header";

export const AppContext = React.createContext('');

const MainLayout = () => {
    
    return (
        <div className="wrapper">
           
                <div className="content">
                    <Header />
                    <div className="container">
                        <Outlet />
                    </div>
                </div>

        </div>
    );
}

export default MainLayout;