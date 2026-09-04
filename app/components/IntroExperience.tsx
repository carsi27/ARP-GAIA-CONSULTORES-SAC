"use client";

import { useEffect, useRef, useState } from "react";

export function IntroExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(true);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [muted, setMuted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [duration, setDuration] = useState(18);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const forced = new URLSearchParams(window.location.search).get("intro") === "1";
    const alreadySeen = sessionStorage.getItem("gaia-intro-seen") === "1";
    setVisible(forced || !alreadySeen);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") enterSite(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [visible]);

  const startIntro = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    setMuted(false);
    setStarted(true);
    try {
      await video.play();
    } catch {
      setAutoplayBlocked(true);
      setMuted(true);
      video.muted = true;
      try { await video.play(); } catch { /* El botón de audio permite iniciarlo mediante interacción. */ }
    }
  };

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => void startIntro(), 80);
    return () => window.clearTimeout(timer);
  }, [visible]);

  const toggleAudio = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    setAutoplayBlocked(false);
    if (video.paused) void video.play();
  };

  const enterSite = () => {
    sessionStorage.setItem("gaia-intro-seen", "1");
    setExiting(true);
    window.setTimeout(() => setVisible(false), 520);
  };

  if (!visible) return null;

  return <section className={`site-intro${started ? " is-playing" : ""}${finished ? " is-finished" : ""}${exiting ? " is-exiting" : ""}`} aria-label="Presentación de ARP GAIA CONSULTORES" style={{ "--intro-duration": `${duration}s` } as React.CSSProperties}>
    <video ref={videoRef} className="intro-video" playsInline preload="auto" poster="/images/entrada-arp-gaia-primer-cuadro.jpg" src="/media/entrada-arp-gaia-audio-continuo.mp4" onLoadedMetadata={event => setDuration(event.currentTarget.duration || 18)} onEnded={() => setFinished(true)} />
    <div className="intro-shade" />
    {started && !finished && <img className="intro-drone" src="/images/drone-entrada.png" alt="" aria-hidden="true" />}
    {autoplayBlocked && <button className="button button-gold intro-sound-prompt" type="button" onClick={toggleAudio}><span aria-hidden="true">🔊</span> Activar sonido</button>}
    {started && <div className="intro-controls">
      <button className="intro-audio" type="button" onClick={toggleAudio} aria-label={muted ? "Activar audio" : "Silenciar audio"}>{muted ? "Audio desactivado" : "Audio activado"}</button>
      <button className="button button-gold intro-enter" type="button" onClick={enterSite}>{finished ? "Ingresar al sitio" : "Saltar entrada e ingresar"} <span aria-hidden="true">→</span></button>
    </div>}
  </section>;
}
