import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dish } from "../pages/Dish";

export function UserRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
        </Routes>
    );
}