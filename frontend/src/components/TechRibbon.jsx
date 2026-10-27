import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiMysql, SiTailwindcss } from 'react-icons/si';

const technologies = [
  ['React', FaReact, '#9dcbd2'],
  ['Next.js', SiNextdotjs, '#eee9df'],
  ['TypeScript', SiTypescript, '#8aafda'],
  ['Node.js', FaNodeJs, '#afc697'],
  ['MongoDB', SiMongodb, '#9bbb89'],
  ['Java', FaJava, '#dda27e'],
  ['MySQL', SiMysql, '#8db8cc'],
  ['Tailwind CSS', SiTailwindcss, '#a4cbd1'],
];

export default function TechRibbon() {
  return <section className="tech-ribbon wrap" aria-label="Technologies I work with">
    <div className="ribbon-heading"><p className="eyebrow">The tools behind the work</p><a href="#skills">Explore my toolkit <span>↗</span></a></div>
    <div className="ticker">
      <div className="ticker-track">
        {[0, 1].map(copy => <div className="ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {technologies.map(([name, Icon, color]) => <div className="tech-token" key={name}><Icon aria-hidden="true" style={{ color }} /><span>{name}</span></div>)}
        </div>)}
      </div>
    </div>
  </section>;
}
