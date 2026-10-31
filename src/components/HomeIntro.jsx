import { useEffect, useRef, useState } from 'react';
import introVideo from '../assets/website_intro.mp4';
import branchLogo from '../assets/logos/IEEE.png';

export function HomeIntro() {
  const video = useRef(null);
  const completed = useRef(false);
  const [showStaticLogo, setShowStaticLogo] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const player = video.current;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let active = true;
    const updatePlayback = () => {
      setShowStaticLogo(motionPreference.matches);
      if (motionPreference.matches) player.pause();
      else if (!completed.current) {
        if (!player.getAttribute('src')) player.src = introVideo;
        player.play().catch(() => {
          if (active) setShowStaticLogo(true);
        });
      }
    };
    updatePlayback();
    motionPreference.addEventListener('change', updatePlayback);
    return () => {
      active = false;
      motionPreference.removeEventListener('change', updatePlayback);
      player.pause();
      player.removeAttribute('src');
      player.load();
    };
  }, []);

  return <div className="hero-photo hero-video">
    <video ref={video} muted playsInline preload="none" hidden={showStaticLogo}
      onEnded={() => { completed.current = true; video.current.pause(); }}
      onError={() => setShowStaticLogo(true)} disablePictureInPicture disableRemotePlayback
      aria-label="IEEE Student Branch of SLIIT logo reveal">
      Your browser does not support this video.
    </video>
    {showStaticLogo && <img className="hero-static-logo" src={branchLogo} alt="SLIIT IEEE Student Branch" />}
  </div>;
}
