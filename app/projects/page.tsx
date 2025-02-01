import profileData from '../../data/profile.json';

export default function Projects() {
  return (
    <div className="relative max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileData.projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            {project.image && (
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4" />
            )}
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary mt-2 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}