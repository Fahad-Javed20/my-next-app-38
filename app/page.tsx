import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next App",
  description: "This is a sample Next.js application with custom metadata.",
};

const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="slider">
        <div className="slide-track">
          {[...cards, ...cards].map((card, index) => (
            <div className="card" key={index}>
              {card}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
