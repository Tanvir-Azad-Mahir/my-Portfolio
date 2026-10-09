import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ListChecks } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import PageHeader from '../components/PageHeader';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <h1 className="text-4xl">Project not found</h1>
        <Link to="/projects" className="mt-5 inline-block text-emerald-600">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-7xl px-5 pb-28">
      <Link
        to="/projects"
        className="mb-10 inline-flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-300"
      >
        <ArrowLeft size={16} />
        All projects
      </Link>

      <PageHeader
        number="CASE STUDY"
        label={project.category}
        title={project.title}
        description={project.summary}
      />

      <div className="mb-12 flex flex-wrap items-center gap-3">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white dark:bg-emerald-300 dark:text-black"
          >
            Visit live website
            <ExternalLink size={16} />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold dark:border-white/20"
          >
            <FaGithub size={17} />
            Source code
          </a>
        )}
        <span className="text-xs text-black/55 dark:text-white/55">
          Status: {project.status}
        </span>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-black/10 px-3 py-1 text-xs dark:border-white/10"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-black/10 bg-white/60 p-7 dark:border-white/10 dark:bg-white/[.035] sm:p-9">
          <h2 className="mb-4 text-2xl font-semibold">Problem &amp; objective</h2>
          <p className="leading-8 text-black/65 dark:text-white/65">
            {project.challenge}
          </p>
        </section>
        <section className="rounded-3xl border border-black/10 bg-white/60 p-7 dark:border-white/10 dark:bg-white/[.035] sm:p-9">
          <h2 className="mb-4 text-2xl font-semibold">How it works</h2>
          <p className="leading-8 text-black/65 dark:text-white/65">
            {project.approach}
          </p>
        </section>
      </div>

      <section className="rounded-3xl border border-black/10 bg-white/60 p-7 dark:border-white/10 dark:bg-white/[.035] sm:p-9">
        <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold">
          <ListChecks className="text-emerald-600 dark:text-emerald-300" size={21} />
          Core features
        </h2>
        <ol className="space-y-4">
          {project.features.map((feature, index) => (
            <li
              key={feature}
              className="flex gap-4 text-sm leading-7 text-black/65 dark:text-white/65"
            >
              <span className="shrink-0 font-semibold tabular-nums text-emerald-600 dark:text-emerald-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              {feature}
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8 dark:border-white/10">
        <Link
          to="/projects"
          className="text-emerald-700 hover:underline dark:text-emerald-300"
        >
          ← Explore all projects
        </Link>
        <Link
          to="/contact"
          className="text-emerald-700 hover:underline dark:text-emerald-300"
        >
          Discuss this project →
        </Link>
      </div>
    </article>
  );
}
