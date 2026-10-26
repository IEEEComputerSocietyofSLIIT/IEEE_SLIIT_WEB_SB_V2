import { Link } from 'react-router-dom';
import mark from '../assets/logos/IEEE.png';
import whiteMark from '../assets/logos/IEEEWhite.png';
export function Brand({ footer = false }) {
  return <Link className="brand" to="/" aria-label="IEEE SLIIT home"><img className="branch-lockup" src={footer ? whiteMark : mark} alt="SLIIT IEEE Student Branch" /></Link>;
}
