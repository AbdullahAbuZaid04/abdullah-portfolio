import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function CardProjects({ title, photo, tech, links, desc }) {
  const github = links?.github;
  const web = links?.web;

  return (
    <div className="group bg-white border border-gray-100 w-full flex flex-col overflow-hidden rounded-2xl shadow-sm hover:shadow-xl hover:border-primary transition-all duration-500">
      <div className="relative overflow-hidden h-48 md:h-52 shrink-0">
        <img
          src={photo}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {(github || web) && (
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${title} code on GitHub`}
                aria-label={`View ${title} source code on GitHub`}
                className="p-3 bg-white rounded-full text-content-title hover:text-primary shadow-xl transition-all active:scale-90"
              >
                <BsGithub size={22} aria-hidden="true" />
              </a>
            )}

            {web && (
              <a
                href={web}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${title} live site`}
                aria-label={`Visit ${title} live website`}
                className="p-3 bg-white rounded-full text-content-title hover:text-primary shadow-xl transition-all active:scale-90"
              >
                <FiExternalLink size={22} aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold text-content-title group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>

          {desc && (
            <p className="text-content-body leading-relaxed text-xs md:text-sm line-clamp-3">
              {desc}
            </p>
          )}
        </div>

        <ul className="flex flex-wrap gap-1 mt-auto">
          {tech.map((t) => (
            <li
              key={t}
              className="bg-primary/5 text-primary text-[10px] md:text-xs font-bold px-3 py-1 rounded-md border border-primary/10 transition-colors"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
