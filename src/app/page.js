import SectionHeading from "./components/SectionHeading";
import PujaCard from "./components/PujaCard";
import PanditCard from "./components/PanditCard";
import WhyUsCard from "./components/WhyUsCard";
import Hero from "./components/Hero";
import ToolsCard from "./components/ToolsCard";
import MantraSetu from "./components/MantraSetu";
import Hero2 from "./components/Hero2";

const journey = [
  { title: "Book Your First Puja", image: "/profile/p1.png" },
  { title: "Book Sacred Rituals", image: "/profile/p2.png" },
  { title: "Explore Spiritual Library", image: "/profile/p3.png" },
  { title: "Personalized Astrology", image: "/profile/p4.png" },
];

const specialPujas = [
  { title: "Diwali Lakshmi Puja", image: "/profile/p5.png" },
  { title: "Govardhan Puja", image: "/profile/p6.png" },
  { title: "Bhai Dooj Puja", image: "/profile/p7.png" },
  { title: "Satyanarayan Puja", image: "/profile/p8.png" },
];

const toolCards = [
  {
    title: "Kundali Creation",
    image: "/tools/ganeshji.svg",
  },
  {
    title: "Muhurat Finder",
    image: "/tools/book.svg",
  },
  {
    title: "Gemstone Suggestions",
    image: "/tools/stones.svg",
  },
  {
    title: "Kundli Dosh Puja",
    image: "/tools/kundli.svg",
  },
  {
    title: "Rashifal (Daily Horoscope)",
    image: "/tools/horscope.svg",
  },
  {
    title: "Panchang",
    image: "/tools/panchang.svg",
  },
  {
    title: "Hora (Planetary Hours)",
    image: "/tools/hora.svg",
  },
  {
    title: "Nakshatra & Naamkaran (Newborn Naming)",
    image: "/tools/newborn.svg",
  },
];

const pandits = [
  { name: "Pandit Anil Mishra", rating: 4.8, exp: 9 },
  { name: "Pandit Ravi Shastri", rating: 4.9, exp: 12 },
  { name: "Pandit Manoj Tiwari", rating: 4.7, exp: 7 },
  { name: "Pandit Saurabh Joshi", rating: 4.8, exp: 10 },
];

const whyUs = [
  {
    title: "Authenticity",
    desc: "Upholding the purity of Vedic traditions, rituals, and spiritual practices.",
    icon: "/about/authenticity.svg",
  },
  {
    title: "Accessibility",
    desc: "Making spiritual services and divine experience available to all, anytime and anywhere.",
    icon: "/about/accessibility.svg",
  },
  {
    title: "Trust",
    desc: "Building a reliable and transparent platform for devotees, pandits, and institutions.",
    icon: "/about/authenticity.svg",
  },
  {
    title: "Innovation",
    desc: "Using technology to enrich spiritual journeys while preserving cultural roots.",
    icon: "/about/accessibility.svg",
  },
  {
    title: "Community",
    desc: "Promoting Indian heritage, fostering connections, and nurturing collective well-being.",
    icon: "/about/authenticity.svg",
  },
  {
    title: "Integrity",
    desc: "Serving with sincerity, respect, and faith at the core of every interaction.",
    icon: "/about/accessibility.svg",
  },
];

const mantraSetu = [
  {
    title: "Aarti Collection",
    desc: "Experience the divine through soulful Aartis devotional songs offered to deities with love and light. A timeless tradition that brings peace, clarity, and spiritual connection.",
    image: "/mantra_setu/thali.svg",
  },
  {
    title: "Chalisa Collection",
    desc: "A Chalisa is a 40-verse devotional hymn dedicated to a deity, sung to seek blessings, protection, and inner peace. A timeless practice that connects the heart to the divine.",
    image: "/mantra_setu/hanuman.svg",
  },
  {
    title: "Mantra Repository",
    desc: "Mantras are sacred chants that calm the mind, elevate the soul, and bring you closer to the divine. Perfect for meditation, healing, and spiritual focus.",
    image: "/mantra_setu/om.svg",
  },
];
export default function Page() {
  return (
    <>
      <Hero />

      {/* Begin Your Spiritual Journey */}
      <section className="container mx-auto px-4 py-12" id="journey">
        <SectionHeading
          title="Begin Your Spiritual Journey"
          hrefLabel="View all →"
          href="#"
        />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {journey.map((j) => (
            <PujaCard
              key={j.title}
              title={j.title}
              image={j.image}
              cta="Explore"
            />
          ))}
        </div>
      </section>

      {/* MantraSetu Special Pujas */}
      <section className="container mx-auto px-4 py-12 bg-white rounded-3xl">
        <SectionHeading
          title="MantraSetu Special Pujas"
          hrefLabel="View all →"
          href="#"
        />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialPujas.map((p) => (
            <PujaCard key={p.title} title={p.title} image={p.image} />
          ))}
        </div>
      </section>

      {/* Find Pandit Ji */}
      <section className="container mx-auto px-4 py-12" id="pandit">
        <SectionHeading
          title="Find Pandit Ji"
          hrefLabel="View all →"
          href="#"
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pandits.map((p) => (
            <PanditCard key={p.name} {...p} />
          ))}
        </div>
      </section>

          <Hero2 />
      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-12" id="why-us">
        <SectionHeading title="Why Choose Us" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w) => (
            <WhyUsCard key={w.title} {...w} />
          ))}
        </div>
      </section>

      {/* Tools */}
      <section
        className="container mx-auto px-4 py-12 bg-white rounded-3xl"
        id="tools"
      >
        <SectionHeading title="MantraSetu Tools" />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-24 md:gap-x-20 ">
          {toolCards.map((t, ind) => (
            <ToolsCard key={ind} title={t.title} image={t.image} />
          ))}
        </div>
      </section>

      {/* Spiritual Library */}
      <section className="container mx-auto px-4 py-12" id="library">
        <SectionHeading title="MantraSetu Spiritual Library" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {mantraSetu.map((i, index) => (
            <MantraSetu key={index} src={i.image} title={i.title} frame="" desc={i.desc} />
          ))}
        </div>
      </section>
    </>
  );
}
