import classes from "./Layout.module.css";
import MainHeader from "./MainHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
