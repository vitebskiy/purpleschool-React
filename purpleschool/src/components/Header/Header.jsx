import './Header.css'

function Header({ title }) {
  return (
    <>
     <div className="header">
     	 <h2 className="header__title">{title}</h2>
     </div>
    </>
  );
}

export default Header;
