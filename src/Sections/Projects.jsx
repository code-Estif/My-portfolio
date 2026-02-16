import projects from "../Data/Project";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <h2 className="projects-title">Selected Projects</h2>
        <p className="projects-sub">
          Real, Finished work, Focused on UI/UX and Frontend logic.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-media">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="project-media-placeholder" aria-hidden />
                )}
              </div>

              <div className="project-body">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-short">{p.short}</p>

                <div className="project-meta">
                  <ul className="project-tech">
                    {p.tech.map((t) => (
                      <li key={t} className="tech-item">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="project-links">
                    {p.live ? (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-live"
                        aria-label={`Open live demo of ${p.title}`}
                      >
                        Live
                      </a>
                    ) : (
                      <span className="btn btn-disabled">No demo</span>
                    )}

                    {p.code ? (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-code"
                        aria-label={`Open code repo for ${p.title}`}
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;