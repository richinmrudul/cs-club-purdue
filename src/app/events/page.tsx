import Card from "@/components/Card";

export default function Events() {
  const events = [
    {
      title: "Sample Event 1",
      description: "Description of this event goes here.",
    },
    {
      title: "Sample Event 2",
      description: "Another placeholder event description.",
    },
    {
      title: "Sample Event 3",
      description: "Add more events as needed in this list.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e) => (
          <Card key={e.title} title={e.title} description={e.description} />
        ))}
      </div>
    </div>
  );
}
