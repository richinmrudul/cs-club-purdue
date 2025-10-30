import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto text-center py-16">
      <h1 className="text-5xl font-bold mb-6">Welcome to the Purdue CS Club</h1>
      <p className="text-lg text-gray-600 mb-8">
        Connecting students who are passionate about Computer Science through projects,
        workshops, and community.
      </p>
      <Button text="Join the Club" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Card
          title="Weekly Meetings"
          description="Join our sessions to learn new skills, collaborate on coding challenges, and meet peers."
        />
        <Card
          title="Hackathons"
          description="Participate in exciting hackathons like HackIndy and showcase your ideas!"
        />
        <Card
          title="Projects"
          description="Work on real-world projects led by peers and alumni mentors to build your portfolio."
        />
      </div>
    </div>
  );
}
