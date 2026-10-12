import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  FlaskConical,
  GraduationCap,
} from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectPlayground from '../components/ProjectPlayground';
import SectionLabel from '../components/SectionLabel';

const directions = [
  { Icon: BrainCircuit, name: 'Machine learning' },
  { Icon: Code2, name: 'Full-stack apps' },
  { Icon: FlaskConical, name: 'Research' },
  { Icon: GraduationCap, name: 'Learning by building' },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.65, ease: 'easeOut' as const },
      };
  const stagger = reduceMotion
    ? {}
    : {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, amount: 0.15 },
        variants: {
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        },
      };
  const itemReveal = reduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 18 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' as const },
          },
        },
      };

  return (
    <>
      <motion.section
        className="mx-auto grid max-w-7xl gap-12 px-5 pb-28 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
        {...(reduceMotion
          ? {}
          : {
              initial: 'hidden',
              animate: 'visible',
              variants: {
                hidden: {},
                visible: { transition: { staggerChildren: 0.16 } },
              },
            })}
      >
        <motion.div
          className="relative isolate"
          {...(reduceMotion
            ? {}
            : {
                variants: {
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: 'easeOut' as const },
                  },
                },
              })}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-8 -z-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-300/10"
          />
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-300">
            AI / ML · Research · Full-stack development
          </p>
          <h1 className="text-[clamp(4rem,9vw,8rem)] font-semibold leading-[.9] tracking-[-.075em]">
            Tanvir
            <br />
            <motion.span
              className="inline-block text-black/25 dark:text-white/25"
              {...(reduceMotion
                ? {}
                : {
                    animate: { y: [0, -5, 0] },
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  })}
            >
              Azad.
            </motion.span>
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60">
            Computer Science & Engineering undergraduate at United International
            University. I build full-stack products and explore intelligent
            systems, from skill-exchange platforms to electricity-demand
            forecasting and speech-focused AI research.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <motion.div whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white dark:bg-emerald-300 dark:text-black"
              >
                Explore projects <ArrowUpRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={reduceMotion ? undefined : { y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/research"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold dark:border-white/15"
              >
                Research work
              </Link>
            </motion.div>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-black/50 dark:text-white/50">
            <span>Software engineering</span>
            <span>Applied machine learning</span>
            <span>Research experiments</span>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-black/10 bg-white/65 p-9 shadow-soft dark:border-white/10 dark:bg-white/[.035] dark:shadow-soft-dark"
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 28, scale: 0.97 },
                animate: { opacity: 1, y: 0, scale: 1 },
                transition: { duration: 0.75, delay: 0.18, ease: 'easeOut' as const },
              })}
        >
          <p className="mb-14 text-xs uppercase tracking-widest text-black/45 dark:text-white/45">
            Current directions
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            From research ideas
            <br />
            <span className="text-black/30 dark:text-white/30">
              to working systems.
            </span>
          </h2>
          <motion.div className="mt-10 grid grid-cols-2 gap-3" {...stagger}>
            {directions.map(({ Icon, name }) => (
              <motion.div
                key={name}
                className="group rounded-2xl border border-black/10 p-5 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/[.035] dark:border-white/10 dark:hover:bg-emerald-300/[.04]"
                {...itemReveal}
                whileHover={reduceMotion ? undefined : { y: -5 }}
              >
                <Icon
                  size={22}
                  className="mb-6 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-300"
                />
                <p className="text-sm">{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="border-t border-black/10 px-5 py-24 dark:border-white/10"
        {...reveal}
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="01" label="Featured work" />
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Ideas turned into projects.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 dark:text-white/55">
                Learn what each project solves, how it is built, and what I am
                still improving.
              </p>
            </div>
            <Link
              to="/projects"
              className="text-sm text-emerald-700 transition-colors hover:text-emerald-500 hover:underline dark:text-emerald-300"
            >
              See all case studies →
            </Link>
          </div>
          <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" {...stagger}>
            {projects.slice(0, 3).map((project) => (
              <motion.div
                key={project.slug}
                {...itemReveal}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="px-5 py-24" {...reveal}>
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="02" label="Live websites" />
          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Explore the projects yourself.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 dark:text-white/55">
            Open the live demos for selected projects.
          </p>
          <motion.div className="mt-9 grid gap-5 md:grid-cols-2" {...stagger}>
            {projects
              .filter((project) => project.live)
              .map((project) => (
                <motion.a
                  key={project.slug}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-5 rounded-3xl border border-black/10 bg-white/60 p-7 transition-colors hover:border-emerald-500/40 dark:border-white/10 dark:bg-white/[.035]"
                  {...itemReveal}
                  whileHover={reduceMotion ? undefined : { y: -5 }}
                >
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-black/55 dark:text-white/55">
                      {project.summary}
                    </p>
                  </div>
                  <ExternalLink
                    className="shrink-0 text-emerald-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-emerald-300"
                    size={20}
                  />
                </motion.a>
              ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="border-y border-black/10 px-5 py-24 dark:border-white/10"
        {...reveal}
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="03" label="Interactive corner" />
          <h2 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Take a detour.
          </h2>
          <p className="mb-9 max-w-2xl text-sm leading-7 text-black/55 dark:text-white/55">
            Explore a randomly selected project or try the mini terminal to
            navigate my work. Both run directly in your browser.
          </p>
          <ProjectPlayground />
        </div>
      </motion.section>

      <motion.section className="px-5 py-24" {...reveal}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel number="04" label="Research & approach" />
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Curiosity with a method.
            </h2>
            <p className="mt-6 text-sm leading-8 text-black/60 dark:text-white/60">
              My research interests include adaptive forecasting and grounded,
              responsible speech-to-speech systems. I focus on describing the
              problem, constructing experiments, comparing approaches, and being
              explicit about what has—and has not—been validated.
            </p>
            <Link
              to="/research"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300"
            >
              Explore research <ArrowUpRight size={16} />
            </Link>
          </div>
          <motion.div
            className="rounded-3xl bg-emerald-950 p-9 text-white"
            whileHover={reduceMotion ? undefined : { y: -5 }}
          >
            <FlaskConical className="mb-8 text-emerald-300" size={30} />
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              Areas of interest
            </p>
            <div className="mt-5 space-y-4 text-xl font-medium">
              <p>Adaptive ML & forecasting</p>
              <p>Computer vision & OCR</p>
              <p>Grounded conversational AI</p>
              <p>Full-stack product engineering</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="px-5 pb-28" {...reveal}>
        <motion.div
          className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-[2rem] border border-black/10 bg-white/60 p-8 dark:border-white/10 dark:bg-white/[.035] sm:flex-row sm:items-center sm:p-12"
          whileHover={reduceMotion ? undefined : { y: -4 }}
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-sm text-black/55 dark:text-white/55">
              Let&apos;s discuss research, collaboration, or a useful product
              idea.
            </p>
          </div>
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white dark:bg-emerald-300 dark:text-black"
            >
              Get in touch <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
