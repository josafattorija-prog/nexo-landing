"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); io.disconnect(); }
      },
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export function Reveal({ children, delay = 0, as: Tag = "div", className = "", style }: RevealProps) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`scroll-rev ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ to, suffix = "", duration = 1400 }: CounterProps) {
  const [ref, inView] = useInView();
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {v.toLocaleString("es-MX")}
      {suffix}
    </span>
  );
}

type GlyphName =
  | "inbox" | "ai" | "pipe" | "mkt" | "cred" | "doc" | "auto"
  | "site" | "mobile" | "whats" | "ig" | "fb" | "mail" | "check"
  | "arrow" | "spark" | "play" | "shield" | "globe" | "bot";

interface GlyphProps {
  name: GlyphName;
  size?: number;
}

export function Glyph({ name, size = 22 }: GlyphProps) {
  const c = "currentColor";
  const sw = 1.6;
  const p: React.SVGProps<SVGSVGElement> = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: c, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "inbox":   return <svg {...p}><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"/></svg>;
    case "ai":      return <svg {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>;
    case "pipe":    return <svg {...p}><rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="10" rx="1"/><rect x="17" y="4" width="4" height="6" rx="1"/></svg>;
    case "mkt":     return <svg {...p}><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>;
    case "cred":    return <svg {...p}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>;
    case "doc":     return <svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 14l2 2 4-4"/></svg>;
    case "auto":    return <svg {...p}><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h8M6 8v8M18 8v8M8 18h8"/></svg>;
    case "site":    return <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 14h4"/></svg>;
    case "mobile":  return <svg {...p}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>;
    case "whats":   return <svg {...p}><path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 4.3A9 9 0 0 1 21 12Z"/><path d="M8 10s1 4 4 4"/></svg>;
    case "ig":      return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill={c}/></svg>;
    case "fb":      return <svg {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
    case "mail":    return <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>;
    case "check":   return <svg {...p}><path d="M5 12l4 4L19 6"/></svg>;
    case "arrow":   return <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "spark":   return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "play":    return <svg {...p}><path d="M6 4l14 8-14 8z"/></svg>;
    case "shield":  return <svg {...p}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"/><path d="M9 12l2 2 4-4"/></svg>;
    case "globe":   return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case "bot":     return <svg {...p}><rect x="4" y="6" width="16" height="14" rx="3"/><circle cx="9" cy="13" r="1.4" fill={c}/><circle cx="15" cy="13" r="1.4" fill={c}/><path d="M12 2v4"/></svg>;
    default:        return null;
  }
}
