import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { prefersReduced } from '../lib/motion';

/** Route transition: an ink panel lifts away to uncover each new page. */
export function Curtain() {
  const { pathname } = useLocation();
  const first = useRef(true);
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (prefersReduced()) return;
    setRun((r) => r + 1);
  }, [pathname]);
  if (!run) return null;
  return (
    <div key={run} className="curtain pointer-events-none fixed inset-0 z-[70]" aria-hidden="true">
      <div className="curtain-panel absolute inset-0 bg-ink" />
      <div className="curtain-panel curtain-panel-2 absolute inset-0 bg-burgundy" />
    </div>
  );
}
