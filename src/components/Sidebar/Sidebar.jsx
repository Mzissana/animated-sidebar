import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { lightTheme, darkTheme } from "../../theme/themes";
import { ThemeProvider } from "styled-components";
import {
  SidebarWrapper,
  Header,
  HeaderButton,
  NavSection,
  NavItem,
  Logo,
  LogoText,
} from "./Sidebar.styles";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = (props) => {
  const { color } = props;

  const theme = color === "dark" ? darkTheme : lightTheme;

  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames("sidebar", { opened: isOpened });
  const headerClassnames = classnames("header", { opened: isOpened });
  const navClassnames = classnames("nav", { opened: isOpened });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <ThemeProvider theme={theme}>
      <SidebarWrapper className={containerClassnames} $isOpened={isOpened}>
        <Header className={headerClassnames} $isOpened={isOpened}>
          <Logo src={logo} alt="TensorFlow logo" />
          <LogoText $isOpened={isOpened}>TensorFlow</LogoText>
          <HeaderButton
            className={headerClassnames}
            $isOpened={isOpened}
            onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
          </HeaderButton>
        </Header>
        <NavSection className={navClassnames} $isOpened={isOpened}>
          {routes.map((route) => (
            <NavItem
              $isOpened={isOpened}
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}>
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </NavItem>
          ))}
        </NavSection>
        <NavSection className="bottom-nav" $isOpened={isOpened}>
          {bottomRoutes.map((route) => (
            <NavItem
              className="toggle-button"
              $isOpened={isOpened}
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}>
              <FontAwesomeIcon icon={route.icon} />
              <span>{route.title}</span>
            </NavItem>
          ))}
        </NavSection>
      </SidebarWrapper>
    </ThemeProvider>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
