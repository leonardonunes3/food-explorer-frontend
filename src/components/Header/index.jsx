import { Container, Frame, LogOut } from './styles';

import logo from "../../assets/Logo.svg";
import adminLogo from "../../assets/AdminLogo.svg";

import { Input } from "../Input";
import { Button } from "../Button";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function Header({ isAdmin = false }) {
    const navigate = useNavigate();

    const { signOut } = useAuth();

    function handleNewDish(){
        navigate("/add");
    }

    return(
        <Container>
            <Frame $isadmin={isAdmin}>
                { 
                    isAdmin 
                    ? 
                    <img src={adminLogo} width={197} height={39} />
                    :
                    <img src={logo} width={197} height={30} />
                }
                <Input 
                    icon={FiSearch} 
                    placeholder="Busque por pratos ou ingredientes"
                    alternativeInput 
                />
               { isAdmin ? 
                <Button 
                    title={"Novo Prato"}
                    onClick={handleNewDish}
                />
                :
                <Button 
                    icon={PiReceiptLight}
                    title={"Pedidos (0)"}
                />
                }
                <FiLogOut size={64} type='button' onClick={signOut}/>
            </Frame>
        </Container>
    );
}