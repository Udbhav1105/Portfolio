import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    label: "01 / Think",
    title: "Every build starts",
    accent: "with a possibility.",
    detail: "An idea. A problem to solve. A better way to connect the pieces.",
    color: [189, 220, 117],
  },
  {
    label: "02 / Build",
    title: "Connect the parts.",
    accent: "Find the flow.",
    detail:
      "Interfaces, APIs, and databases working together as one experience.",
    color: [156, 185, 244],
  },
  {
    label: "03 / Refine",
    title: "Keep learning.",
    accent: "Keep shaping.",
    detail:
      "From solving DSA problems to building and deploying full-stack applications.",
    color: [237, 174, 139],
  },
];

// A projected, shaded torus drawn locally: no video download or WebGL dependency.
function Sculpture({ paused, chapter }) {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame;
    let visible = true;
    let width = 0;
    let height = 0;
    let angle = 0;
    let lastTime = 0;
    let turnX = 0;
    let turnY = 0;
    const color = chapters[chapter].color;

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) * 0.25;
      const ax = 0.75 + Math.sin(angle * 0.5) * 0.25 + turnY;
      const ay = angle * 0.35 + turnX;
      const az = -0.45 + Math.sin(angle * 0.32) * 0.22;
      const rotate = ([x, y, z]) => {
        const y1 = y * Math.cos(ax) - z * Math.sin(ax);
        const z1 = y * Math.sin(ax) + z * Math.cos(ax);
        const x2 = x * Math.cos(ay) + z1 * Math.sin(ay);
        const z2 = -x * Math.sin(ay) + z1 * Math.cos(ay);
        return [
          x2 * Math.cos(az) - y1 * Math.sin(az),
          x2 * Math.sin(az) + y1 * Math.cos(az),
          z2,
        ];
      };
      const point = (u, v) => {
        const tube = 0.42 + 0.08 * Math.cos(3 * u + angle);
        return rotate([
          (1.14 + tube * Math.cos(v)) * Math.cos(u),
          (1.14 + tube * Math.cos(v)) * Math.sin(u),
          tube * Math.sin(v) + 0.17 * Math.sin(2 * u + chapter),
        ]);
      };
      const project = ([x, y, z]) => {
        const perspective = 5 / (5 - z);
        return [
          width / 2 + x * scale * perspective,
          height / 2 + y * scale * perspective,
          z,
        ];
      };
      const faces = [];
      const segments = width < 500 ? 56 : 76;
      const sides = 24;
      for (let i = 0; i < segments; i++) {
        const u = (i / segments) * Math.PI * 2;
        const nextU = ((i + 1) / segments) * Math.PI * 2;
        for (let j = 0; j < sides; j++) {
          const v = (j / sides) * Math.PI * 2;
          const nextV = ((j + 1) / sides) * Math.PI * 2;
          const points = [
            point(u, v),
            point(nextU, v),
            point(nextU, nextV),
            point(u, nextV),
          ];
          const normal = rotate([
            Math.cos(u) * Math.cos(v),
            Math.sin(u) * Math.cos(v),
            Math.sin(v),
          ]);
          const light = Math.max(
            0,
            normal[0] * -0.35 + normal[1] * -0.55 + normal[2] * 0.75,
          );
          const shine = Math.pow(light, 12) * 90;
          const shade = 0.22 + light * 0.76;
          const rgb = color.map((c) =>
            Math.min(255, Math.round(c * shade + shine)),
          );
          faces.push({
            points: points.map(project),
            depth: points.reduce((sum, p) => sum + p[2], 0) / 4,
            fill: `rgb(${rgb.join(",")})`,
          });
        }
      }
      faces.sort((a, b) => a.depth - b.depth);
      for (const face of faces) {
        context.beginPath();
        face.points.forEach(([x, y], i) =>
          i ? context.lineTo(x, y) : context.moveTo(x, y),
        );
        context.closePath();
        context.fillStyle = face.fill;
        context.strokeStyle = face.fill;
        context.lineWidth = 0.6;
        context.fill();
        context.stroke();
      }
    }

    function tick(time) {
      if (visible && !document.hidden && time - lastTime > 32) {
        angle += Math.min((time - lastTime) / 1000, 0.05) * 0.45;
        turnX += (pointer.current.x * 0.5 - turnX) * 0.045;
        turnY += (pointer.current.y * 0.35 - turnY) * 0.045;
        lastTime = time;
        draw();
      }
      frame = requestAnimationFrame(tick);
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);
    if (!paused) frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      observer.disconnect();
    };
  }, [paused, chapter]);

  return (
    <canvas
      ref={canvasRef}
      className="sculpture-canvas"
      aria-hidden="true"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || paused) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointer.current = {
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5,
        };
      }}
      onPointerLeave={() => {
        pointer.current = { x: 0, y: 0 };
      }}
    />
  );
}

export default function MotionStudio({ paused }) {
  const [chapter, setChapter] = useState(0);
  const current = chapters[chapter];
  return (
    <section className="motion-studio" aria-labelledby="motion-title">
      <div className="studio-grid" aria-hidden="true" />
      <div className="wrap studio-inner">
        <div className="studio-top">
          <span className="eyebrow">An idea, in motion</span>
          <span className="studio-coordinate">EXPERIMENT / 001</span>
        </div>
        <div className="sculpture-stage">
          <div className="sculpture-halo" />
          <Sculpture paused={paused} chapter={chapter} />
          <span className="studio-side-label">THINK · BUILD · REFINE</span>
        </div>
        <div className="studio-copy" key={chapter}>
          <h2 id="motion-title">
            {current.title}
            <br />
            <em>{current.accent}</em>
          </h2>
          <p>{current.detail}</p>
        </div>
        <div className="studio-bottom">
          <div
            className="studio-tabs"
            role="group"
            aria-label="Explore the creative process"
          >
            {chapters.map((item, index) => (
              <button
                key={item.label}
                aria-pressed={chapter === index}
                onClick={() => setChapter(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="studio-hint">
            {paused
              ? "A moment of stillness"
              : "Move your cursor. Explore the form. ↗"}
          </span>
        </div>
      </div>
    </section>
  );
}
