import { NavLink } from 'react-router-dom';

export default function NavItem({ children, link, className, getLinkStyle }) {
  return (
    <NavLink style={getLinkStyle} to={link}>
      <li className={className}>{children}</li>
    </NavLink>
  );
}
