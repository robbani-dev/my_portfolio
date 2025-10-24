import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  return (
    <div className="py-20 px-6 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6">
        {project.name}
      </h1>

      <div className="relative w-full h-72 mb-8 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5">
        <p className="text-lg">{project.description}</p>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            🛠️ Tech Stack
          </h2>
          <ul className="list-disc ml-6">
            {project.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            🚀 Links
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href={project.live}
              target="_blank"
              className="btn btn-primary rounded-full"
            >
              Live Demo
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="btn btn-outline btn-primary rounded-full"
            >
              GitHub Repo
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            💡 Challenges
          </h2>
          <p>{project.challenges}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-2">
            🔮 Future Plans
          </h2>
          <p>{project.improvements}</p>
        </div>
      </div>
    </div>
  );
}
