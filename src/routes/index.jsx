import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
    const { user } = useAuth();

    function AcessRoute() {
        switch(user.role) {
            case 'admin':
                return <AdminRoutes />;
            case 'customer':
                return <UserRoutes />;
            default:
                return <UserRoutes />;    
        }
    }

    return(
        <BrowserRouter>
            { user ? <AcessRoute /> : <AuthRoutes /> }
        </BrowserRouter>
    );
}