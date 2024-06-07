import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";
import { ConfigDish } from "../pages/ConfigDish";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/add" element={<ConfigDish />} />
            <Route path="/edit/:id" element={<ConfigDish />} />
        </Routes>
    );
}