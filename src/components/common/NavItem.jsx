import { Link } from 'react-router-dom';

export default function NavItem({ children, link, className }) {
  return (
    <Link to={link}>
      <li className={className}>{children}</li>
    </Link>
  );
}
