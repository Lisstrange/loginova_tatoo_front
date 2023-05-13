import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  SERVICES_ROUTE,
  WORKS_ROUTE,
} from "@/shared/routes/public-routes.utils";
import Header from "@/widgets/Header";
import { Outlet, Link } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      {/* <nav>
          <Link to={HOME_ROUTE}>Home</Link>
          <Link to={ABOUT_ROUTE}>About</Link>
          <Link to={SERVICES_ROUTE}>Services</Link>
          <Link to={CONTACTS_ROUTE}>Contacts</Link>
          <Link to={WORKS_ROUTE}>Works</Link>
        </nav> */}
      <Header />

      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
