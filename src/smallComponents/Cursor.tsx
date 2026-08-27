import { useEffect, useRef } from "react";

/* Editorial cursor: an instant dot + a ring that trails it via lerp (the slight
 * delay), grows over interactive elements, and tightens on press. Only mounts on
 * fine-pointer, non-reduced-motion devices — everyone else keeps the native cursor. */

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let raf = 0;

    const center = (x: number, y: number) =>
      `translate(${x}px, ${y}px) translate(-50%, -50%)`;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = center(mouseX, mouseY);
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(
        "a, button, [role='button'], input, textarea, summary"
      );
      ring.classList.toggle("is-active", !!t);
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      visible = false;
    };
    const onDown = () => ring.classList.add("is-down");
    const onUp = () => ring.classList.remove("is-down");

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15; // the trailing delay
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = center(ringX, ringY);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
