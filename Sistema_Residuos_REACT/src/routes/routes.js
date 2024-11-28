import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Mapa from '../components/pages/Mapa/mapa';
import NotificationsPage from '../components/pages/Notifications/NotificationsPage';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path='/mapa' element={<Mapa/>} />
                <Route path="/notifications" element={<NotificationsPage />} />
            </Routes>
        </Router>
    );
}