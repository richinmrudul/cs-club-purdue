import Card from "@/components/Card";

export default function Projects() {
  const projects = [
    {
      title: "Sample Project 1",
      description: "Brief description of this sample project.",
    },
    {
      title: "Sample Project 2",
      description: "Placeholder for another project summary.",
    },
    {
      title: "Sample Project 3",
      description: "Example project description placeholder.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} title={p.title} description={p.description} />
        ))}
      </div>
    </div>
  );
}
