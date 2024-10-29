import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";
import { api } from "../services/api";
import { useEffect } from "react";

export function Routes() {
    const { user, signOut } = useAuth();

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

    useEffect(() => {
        api
        .get("/users/validated")
        .catch((error) => {
            if(error.response?.status === 401) {
                signOut();
            }
        });
    }, []);

    return(
        <BrowserRouter>
            { user ? <AcessRoute /> : <AuthRoutes /> }
        </BrowserRouter>
    );
}