import { Metadata } from "next";
import Image from "next/image";
import "./style.css";

export const metadata: Metadata = {
  title: "My Next App",
  description: "This is a sample Next.js application with horizontal scrolling cards.",
};

const profileImages = [
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e" },
  { image: "https://images.unsplash.com/photo-1433878455169-4698e60005b1" },
  { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { image: "https://images.unsplash.com/photo-1494526585095-c41746248156" },
  { image: "https://images.unsplash.com/photo-1500534623283-312aade485b7" },
  { image: "https://images.unsplash.com/photo-1468071174046-657d9d351a40" },
  { image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <div className="slider">
        <div className="slide-track">
          {[...profileImages, ...profileImages].map((profile, index) => (
            <div className="card" key={index}>
              <Image
                src={profile.image}
                alt={`Profile Image ${index + 1}`}
                width={144}
                height={144}
                className="object-cover w-72 h-72 rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
