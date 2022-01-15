import {
  Container,
  Header,
  LogoImage,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";
import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdExitToApp,
} from "react-icons/md";

import logo from "../../assets/Logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImage src={logo} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export { Aside };
