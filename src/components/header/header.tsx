import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './header.css';

export default function Header(): React.JSX.Element {
  return (
    <header className="header">
      <h1 title="Go Home Page">
        <Link className="header-link" to={ROUTES.HOME}>
          {' '}
          Star Wars Characters
        </Link>
      </h1>
    </header>
  );
}
