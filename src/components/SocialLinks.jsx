import { Icon } from './SiteIcon';
export function SocialLinks() {
  return <div className="social-links" aria-label="IEEE SLIIT social media">
    <a href="https://web.facebook.com/ieee.sliit" target="_blank" rel="noopener noreferrer" aria-label="IEEE SLIIT on Facebook"><Icon name="facebook" /></a>
    <a href="https://www.instagram.com/ieeesliit/" target="_blank" rel="noopener noreferrer" aria-label="IEEE SLIIT on Instagram"><Icon name="instagram" /></a>
    <a href="https://www.linkedin.com/company/ieee-student-branch-of-sliit/" target="_blank" rel="noopener noreferrer" aria-label="IEEE SLIIT on LinkedIn"><Icon name="linkedin" /></a>
  </div>;
}
