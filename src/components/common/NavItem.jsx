import { NavLink } from 'react-router-dom';

// function getLinkStyle({ isActive }) {
//   return {
//     textShadow: isActive ? '1px 1px 1px var(--color-link)' : '',
//   };
// }

export default function NavItem({ children, link, className, getLinkStyle }) {
  return (
    <NavLink style={getLinkStyle} to={link}>
      <li className={className}>{children}</li>
    </NavLink>
  );
}
