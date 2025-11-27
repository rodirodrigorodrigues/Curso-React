
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <h2>Logo</h2>
      </div>
      <div className="header__menu">
        <a href="">Home</a>
        <a href="">Sobre</a>
      </div>
    </div>
  );
}