import { Container, Frame } from './styles';

import logo from "../../assets/Logo.svg"

import { Input } from "../Input";
import { Button } from "../Button";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

export function Header() {
    return(
        <Container>
            <Frame>
                <img src={logo} width={197} height={30} />
                <Input 
                    icon={FiSearch} 
                    placeholder="Busque por pratos ou ingredientes"
                    alternativeInput 
                />
                <Button 
                    icon={PiReceiptLight}
                    title={"Pedidos (0)"}
                />
                <FiLogOut size={64} />
            </Frame>
        </Container>
    );
}