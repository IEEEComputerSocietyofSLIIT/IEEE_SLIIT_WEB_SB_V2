import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import introVideo from '../assets/website_intro.mp4';
export function HomeIntro() {
  const {
    pathname
  } = useLocation();
  const dialog = useRef(null),
    video = useRef(null),
    background = useRef(null),
    played = useRef(false),
    dismiss = useRef(() => {});
  useEffect(() => {
    if (pathname !== '/' || played.current || !dialog.current?.showModal) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      played.current = true;
      return;
    }
    const modal = dialog.current,
      player = video.current,
      canvas = background.current,
      context = canvas.getContext('2d', { alpha: false });
    let active = true,
      closing = false,
      fallback,
      fade,
      videoFrame,
      animationFrame;
    const paintBackground = () => {
      if (!context || player.readyState < 2 || !player.videoWidth) return;
      const { width, height } = canvas;
      const sourceWidth = player.videoWidth, sourceHeight = player.videoHeight;
      // Extend only the outer edges, so the backdrop never duplicates the logo.
      if (window.innerWidth / window.innerHeight >= sourceWidth / sourceHeight) {
        const strip = Math.max(1, Math.round(sourceWidth * .015));
        context.drawImage(player, 0, 0, strip, sourceHeight, 0, 0, width / 2, height);
        context.drawImage(player, sourceWidth - strip, 0, strip, sourceHeight, width / 2, 0, width / 2, height);
      } else {
        const strip = Math.max(1, Math.round(sourceHeight * .015));
        context.drawImage(player, 0, 0, sourceWidth, strip, 0, 0, width, height / 2);
        context.drawImage(player, 0, sourceHeight - strip, sourceWidth, strip, 0, height / 2, width, height / 2);
      }
    };
    const resizeBackground = () => {
      modal.style.setProperty('--intro-width', window.innerWidth + 'px');
      modal.style.setProperty('--intro-height', window.innerHeight + 'px');
      canvas.width = 192;
      canvas.height = Math.max(1, Math.min(512, Math.round(192 * window.innerHeight / window.innerWidth)));
      paintBackground();
    };
    const drawBackground = () => {
      if (!active || closing) return;
      paintBackground();
      if (player.requestVideoFrameCallback) videoFrame = player.requestVideoFrameCallback(drawBackground);
      else animationFrame = requestAnimationFrame(drawBackground);
    };
    const stopBackground = () => {
      if (videoFrame !== undefined) player.cancelVideoFrameCallback?.(videoFrame);
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
    };
    const releaseVideo = () => {
      stopBackground();
      player.pause();
      player.removeAttribute('src');
      player.load();
    };
    const finish = () => {
      played.current = true;
      modal.close();
      document.body.classList.remove('intro-active');
      releaseVideo();
      modal.classList.remove('is-leaving');
      clearTimeout(fallback);
      clearTimeout(fade);
    };
    const close = () => {
      if (!active || closing) return;
      closing = true;
      clearTimeout(fallback);
      modal.classList.add('is-leaving');
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) finish();else fade = setTimeout(finish, 460);
    };
    dismiss.current = close;
    const loading = () => {
      if (!active || closing) return;
      clearTimeout(fallback);
      fallback = setTimeout(close, 8000);
    };
    const playing = () => {
      if (!active || closing) return;
      clearTimeout(fallback);
      const remaining = Number.isFinite(player.duration) ? Math.max(0, player.duration - player.currentTime) : 15;
      fallback = setTimeout(close, (remaining + 5) * 1000);
    };
    const cancel = e => {
      e.preventDefault();
      close();
    };
    player.addEventListener('ended', close);
    player.addEventListener('error', close);
    player.addEventListener('playing', playing);
    player.addEventListener('waiting', loading);
    player.addEventListener('seeked', paintBackground);
    window.addEventListener('resize', resizeBackground);
    modal.addEventListener('cancel', cancel);
    document.body.classList.add('intro-active');
    modal.showModal();
    resizeBackground();
    loading();
    player.muted = true;
    player.src = introVideo;
    drawBackground();
    player.play().catch(close);
    return () => {
      active = false;
      clearTimeout(fallback);
      clearTimeout(fade);
      player.removeEventListener('ended', close);
      player.removeEventListener('error', close);
      player.removeEventListener('playing', playing);
      player.removeEventListener('waiting', loading);
      player.removeEventListener('seeked', paintBackground);
      window.removeEventListener('resize', resizeBackground);
      modal.removeEventListener('cancel', cancel);
      modal.close();
      modal.classList.remove('is-leaving');
      document.body.classList.remove('intro-active');
      modal.style.removeProperty('--intro-width');
      modal.style.removeProperty('--intro-height');
      releaseVideo();
    };
  }, [pathname]);
  return <dialog className="home-intro" ref={dialog} aria-label="IEEE SLIIT opening video"><canvas className="intro-video-backdrop" ref={background} aria-hidden="true" /><video ref={video} muted playsInline disablePictureInPicture disableRemotePlayback preload="none" aria-label="IEEE SLIIT introduction">IEEE Student Branch of SLIIT introduction</video><button className="intro-skip" type="button" onClick={() => dismiss.current()}>Skip intro</button></dialog>;
}
