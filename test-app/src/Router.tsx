import * as React from "react";

import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import { Layout } from "./layout/Layout";

export default function Router() {
    return (
        <Routes>

            <Route path={"/"} element={<Layout />} >
                <Route index element={<Index />} />
                </Route>
        </Routes>

    );
}


