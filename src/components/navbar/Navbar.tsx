import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Code Web</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search icon" className="icon" />
        <img src="/app.svg" alt="app icon" className="icon" />
        <img src="/expand.svg" alt="cart icon" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" className="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/jane.jpg" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
