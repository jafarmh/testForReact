import * as React from "react";

import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import { Layout } from "./layout/Layout";

const Users = React.lazy(() => import("./pages/Users"));

export default function Router() {
    return (
        <Routes>

            <Route path={"/"} element={<Layout />} >
                <Route index element={<Index />} />
                
                <Route path="users" element={
                    <React.Suspense fallback={<Loading />}>
                        <Users />
                    </React.Suspense>
                } />


            </Route>
        </Routes>

    );
}

const Loading=()=><>....</>


