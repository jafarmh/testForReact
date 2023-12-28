import * as React from "react";

import { Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import { Layout } from "./layout/Layout";

const Users = React.lazy(() => import("./pages/Users"));
const Products = React.lazy(() => import("./pages/Products"));
const Map = React.lazy(() => import("./pages/Map"));

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

                <Route path="products" element={
                    <React.Suspense fallback={<Loading />}>
                        <Products />
                    </React.Suspense>
                } />
                <Route path="map" element={
                    <React.Suspense fallback={<Loading />}>
                        <Map />
                    </React.Suspense>
                } />


            </Route>
        </Routes>

    );
}

const Loading=()=><>....</>


