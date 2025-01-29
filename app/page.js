import Link from "next/link";

export default function Home() {
  return (
<main>
<h1>Collect Customer Feedback to build better products</h1>
<div>Create a Feedback board in minutes, prioritize features, and build products your customers will love.</div>
<Link className="btn" href="/dashboard">Dashboard</Link>
</main>
  );
}
