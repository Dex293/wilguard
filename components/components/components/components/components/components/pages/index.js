import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import DemoVideoModal from "../components/DemoVideoModal";
import MediaPartners from "../components/MediaPartners";
import ImpactMetrics from "../components/ImpactMetrics";
import Testimonials from "../components/Testimonials";
import PricingTable from "../components/PricingTable";
import HowItWorks from "../components/HowItWorks";
import EmailCapture from "../components/EmailCapture";
import CameraMap from "../components/CameraMap";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <Head>
        <title>WildGuard: Smart Wildlife Cameras for Conservation & Education</title>
        <meta
          name="description"
          content="WildGuard deploys smart wildlife cameras for conservation, research, and education. Discover live cams, real impact, and more!"
        />
      </Head>

      <main className="bg-gray-50 min-h-screen">
        {/* HERO Section */}
        <section className="pt-10 pb-8 px-4 md:px-0 text-center flex flex-col items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-900">
              WildGuard: Real-Time Wildlife Insights
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Next-generation camera traps connecting conservationists, schools, and researchers with nature—live.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                className="btn btn-primary px-6 py-3 text-lg font-medium rounded"
                onClick={() => setDemoOpen(true)}
              >
                Watch Demo
              </button>
              <a
                href="#live-cams"
                className="btn btn-secondary px-6 py-3 text-lg font-medium rounded"
              >
                Explore Live Cams
              </a>
              <button
                className="btn btn-outline px-6 py-3 text-lg font-medium rounded"
                onClick={() => document.getElementById("email-capture")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Camera Updates
              </button>
            </div>
          </div>
          {/* Hero image */}
          <div className="relative w-full max-w-3xl h-72 mt-8 mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hero.webp"
              alt="Camera trap in the wild"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <MediaPartners className="mt-8" />
        </section>

        {/* IMPACT METRICS */}
        <ImpactMetrics />

        {/* PRODUCT & PACKAGES */}
        <section className="py-12 px-4 max-w-5xl mx-auto" id="product">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">See the Hardware & Product Packages</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col items-center">
              <Image
                src="/hardware.jpg"
                alt="WildGuard Camera Device"
                width={300}
                height={200}
                className="rounded border"
              />
              <p className="mt-2 text-gray-700">Field-tested, solar-powered, AI-enabled HD wildlife camera</p>
            </div>
            <div className="flex-1">
              <PricingTable />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* FOOTAGE GALLERY */}
        <section className="py-12 px-4 bg-white" id="wildlife-gallery">
          <h2 className="text-2xl font-semibold mb-4 text-center">Latest Wildlife Captures</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <Image
                key={i}
                src={`/gallery/footage${i}.webp`}
                alt="Wildlife footage"
                width={250}
                height={160}
                className="rounded object-cover aspect-video"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* MAP */}
        <section className="py-12 px-4 bg-gray-50" id="map">
          <h2 className="text-2xl font-semibold mb-4 text-center">Where Our Cameras Are Active</h2>
          <CameraMap />
        </section>

        {/* BLOG/RESOURCES */}
        <section className="py-12 px-4" id="blog">
          <h2 className="text-2xl font-semibold mb-4 text-center">From the WildGuard Blog</h2>
          <p className="text-center mb-4">See how teachers, scientists, and rangers use WildGuard for real-world impact.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="rounded shadow-md bg-white p-4 w-full md:w-1/3">
              <h3 className="font-bold mb-2">Conservation in Action: Tracking Leopards</h3>
              <p>How our camera network helps rangers protect endangered cats.</p>
              <a href="/blog/leopards" className="text-green-700 hover:underline mt-2 block">Read more</a>
            </div>
            <div className="rounded shadow-md bg-white p-4 w-full md:w-1/3">
              <h3 className="font-bold mb-2">10 Classroom Uses for Wildlife Cams</h3>
              <p>Bringing real-time science to students—from elementary to college.</p>
              <a href="/blog/classrooms" className="text-green-700 hover:underline mt-2 block">Read more</a>
            </div>
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <EmailCapture />

        {/* DEMO VIDEO MODAL */}
        <DemoVideoModal
          open={demoOpen}
          onOpenChange={setDemoOpen}
          videoUrl="https://www.youtube.com/embed/sample-demo"
        />
      </main>
    </>
  );
}