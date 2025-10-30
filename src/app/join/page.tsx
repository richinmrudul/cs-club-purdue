import Button from "@/components/Button";

export default function Join() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-6">Join the Purdue CS Club</h1>
      <p className="text-gray-700 text-lg mb-6">
        Add short instructions on how new members can join, connect, or stay updated here.
      </p>
      <div className="space-x-4">
        <Button text="Join Discord" />
        <Button text="Follow on Socials" variant="secondary" />
      </div>
    </div>
  );
}
