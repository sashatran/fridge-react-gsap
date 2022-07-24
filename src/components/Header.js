import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
      <div className="logo-container">
        <div className="logo-img"></div>
        <p className="logo-copy">Fridge.</p>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">Marketplace</li>
          <li className="nav-list-item">Bacon</li>
          <li className="nav-list-item">Connect Wallet</li>
        </ul>
      </nav>
      <div className="mobile-nav-btn">
      <FontAwesomeIcon className="mobile-nav-icon" icon={faChevronDown} />
      </div>
      </div>
    </header>
  );
}
