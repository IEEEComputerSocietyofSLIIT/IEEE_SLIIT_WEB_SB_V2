import fallback from '../assets/images/sample-hero.jpg';

export default function EventImage({ src, alt, ...props }) {
  return <img {...props} src={src || fallback} alt={alt} decoding="async" onError={({ currentTarget }) => {
    if (currentTarget.getAttribute('src') !== fallback) currentTarget.setAttribute('src', fallback);
  }} />;
}
