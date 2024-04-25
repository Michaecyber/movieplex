import { title } from "@/components/primitives";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-10">
        <h1 className={title()}>Welcome to our Movieplex</h1>
        <p className="my-10">
          Movieplex is one of the world's leading entertainment services with 270 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.
        </p>
      </section>
      <section className="py-4">
        <h2 className="mb-4 text-3xl font-bold">
        Streaming Service
        </h2>
        <h3 className="mb-2 text-2xl font-bold">
        What are your financial objectives?
        Our financial goal is to accelerate revenue growth, steadily expand operating margin and deliver growing positive free cash flow.
        </h3>

        <h3 className="my-4 text-2xl font-bold">Top Movies</h3>
        <p className="text-xl font-bold">Most watched</p>

       </section>
    </div>
  );
}
