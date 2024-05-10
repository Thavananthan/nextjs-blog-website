import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const AppLink = ({ children, className, href }) => (
  <Link href={href} className={className}>
    {children}
  </Link>
);

const AppNavbar = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand className="mr-3 font-weight-bold" href="#">
          <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">
            FilipJerga
          </AppLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <AppLink href="/portfolios" className="nav-link mr-3">
              Portfolios
            </AppLink>
            <AppLink
              href="/forum/categories"
              className="nav-link mr-3"
            ></AppLink>
            <AppLink href="/cv" className="mr-3 nav-link">
              Cv
            </AppLink>
          </Nav>
          <Nav>
            <AppLink
              href="/register"
              className="mr-3 btn btn-success bg-green-2 bright"
            >
              Sign Up
            </AppLink>
            <AppLink href="/login" className="mr-3 nav-link">
              Sign In
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
