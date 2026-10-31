import facebook from '../assets/icons/fb.png';
import mail from '../assets/icons/mail.png';
import location from '../assets/icons/location.png';
export function Icon({
  name = 'arrow',
  ...props
}) {
  const paths = {
    arrow: <path d="M5 19 19 5M5 5h14v14" />,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7v.1" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" /></>,
  };
  const asset = { facebook, mail, location }[name];
  if (asset) return <span className="social-asset" style={{'--social-image': `url(${asset})`}} aria-hidden="true" />;
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" {...props}><path d="M20.45 20.45H17V15c0-1.3 0-3-1.85-3s-2.14 1.45-2.14 2.94v5.51H9.5V9h3.37v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.55V9H7.1v11.45z" /></svg>;
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}
