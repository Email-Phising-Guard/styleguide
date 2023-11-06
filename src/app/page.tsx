import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl p-5 mx-auto mt-20 min-h-full flex items-center">
      <section>
        <h1 className="text-5xl font-bold text-center mb-5">
          Goodbye Email Phising
        </h1>
        <p className="text-center">
          We are passionate about blending education with protection, striving
          to make learning about email security both fun and accessible. By
          disseminating key information on how to recognize phishing attempts
          and offering interactive quizzes, Email Guard is committed to engaging
          learners in a way that underscores our belief: the knowledge imparted
          today can create a more secure tomorrow.
        </p>
        <div className="flex justify-center mt-10">
          <Link className="mr-5" href="/logo">
            <Button variant="default">Get Started</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
