import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardHomepage from '../features/dashboard/pages/dashboard_homepage';
import PeopleHomepage from '../features/people/pages/people_homepage';

const PageContainer = () => {
    return (
        <div>
                <Routes>
                    <Route path='/dashboard-homepage' element={<DashboardHomepage></DashboardHomepage>}/>
                    <Route path='/people-homepage' element={<PeopleHomepage></PeopleHomepage>}/>
                </Routes>
        </div>
    );
}

export default PageContainer;