import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Header } from "../../components/Global/Header";

interface DashboardPageProps {
  children: JSX.Element;
}

export const AuthPage = ({ children }: DashboardPageProps) => {
  return (
    <Style.Container>
      <Header />
      <AnimatePresence>{children}</AnimatePresence>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  `,
};
