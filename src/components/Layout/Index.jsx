import React from 'react'
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
 const DefaultLayout = ({children}) => {

        return (
          <>
          <Header/>
            <div className="bodybb-color">
              <div className="wrapper_body">
                <Sidebar/>
                {children}
              </div>
            </div>
          </>
        );
      }
      
export default DefaultLayout;