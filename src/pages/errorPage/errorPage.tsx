import { ErrorResponse, Link, useRouteError } from 'react-router-dom';
import './errorPage.css';
import { ROUTES } from '../../constants/routes';
import errorImg from '../../assets/images/error.avif';

export default function ErrorPage(): React.JSX.Element {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="container">
      <div className="error-container">
        <img src={errorImg} alt="Error image" width={200} height={200} />
        <h2 className="section-header">
          {error.status === 404 ? 'Page Not Found' : 'Something went wrong!!!'}
        </h2>
        <Link className="button" to={ROUTES.HOME}>
          Home Page
        </Link>
      </div>
    </div>
  );
}
