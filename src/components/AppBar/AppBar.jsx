import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
      <hr />
    </header>
  );
};

export default AppBar;
