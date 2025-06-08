import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: ${({ $isOpened }) => ($isOpened ? "250px" : "80px")};
  transition: width 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.textDefault};
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpened }) => ($isOpened ? "flex-start" : "center")};
  padding: ${({ $isOpened }) => ($isOpened ? "20px" : "20px 10px")};
  gap: ${({ $isOpened }) => ($isOpened ? "20px" : "0")};
  width: 100%;
  color: ${({ theme }) => theme.textActive};
  font-weight: bold;
  transition: padding 0.3s ease-in-out;
`;

export const LogoText = styled.span`
  display: inline-block;
  opacity: ${({ $isOpened }) => ($isOpened ? 1 : 0)};
  max-width: ${({ $isOpened }) => ($isOpened ? "150px" : "0")};
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

export const HeaderButton = styled.button`
  font-size: 1.5rem;
  font-weight: 700;
  position: absolute;
  background-color: ${({ theme }) => theme.buttonBg};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: ${({ $isOpened }) => ($isOpened ? "-12px" : "-50px")};
  z-index: 1;
  transition: right 0.3s ease-in-out;
  color: ${({ theme }) => theme.textDefault};

  &:active {
    background-color: ${({ theme }) => theme.buttonActive};
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: auto;
  object-fit: contain;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isOpened }) => ($isOpened ? "flex-start" : "center")};
  width: 100%;
  padding: 20px;
  gap: 10px;
  transition: align-items 0.3s ease-in-out;
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpened }) => ($isOpened ? "flex-start" : "center")};
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.textDefault};
  gap: ${({ $isOpened }) => ($isOpened ? "16px" : "0")};
  padding: 10px 15px;
  border-radius: 10px;
  width: 100%;
  transition: gap 0.3s ease-in-out, background-color 0.3s ease-in-out;

  span {
    display: inline-block;
    opacity: ${({ $isOpened }) => ($isOpened ? 1 : 0)};
    max-width: ${({ $isOpened }) => ($isOpened ? "150px" : "0")};
    overflow: hidden;
    white-space: nowrap;
    transition: max-width 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.sidebarHover};
    color: ${({ theme }) => theme.textHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.sidebarActive};
    color: ${({ theme }) => theme.textActive};
  }
`;
