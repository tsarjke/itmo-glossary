import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import GlossaryPage from "../pages/GlossaryPage";
import Desc from "../pages/Desc";

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/glossary" element={<GlossaryPage/>}/>
            <Route path="/description/:term" element={<Desc/>}/>
            <Route
                path="*"
                element={<Navigate to="/glossary" replace/>}
            />
        </Routes>
    )
}