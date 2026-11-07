import fallback from '../assets/images/Events/SLIITXtremeOC.optimized.jpg';

export default function EventImage({ src, alt, ...props }) {
  return <img {...props} src={src || fallback} alt={alt} decoding="async" referrerPolicy="no-referrer" onError={({ currentTarget }) => {
    currentTarget.onerror = null;
    if (currentTarget.getAttribute('src') !== fallback) currentTarget.setAttribute('src', fallback);
  }} />;
}
