import { Link } from "react-router-dom";

import { bookingAction, siteContent } from "../../content/siteContent";
import CtaLink from "../ui/CtaLink";

const AboutPreviewSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[#dccdb5] bg-white/80 p-8 shadow-[0_24px_80px_rgba(75,52,28,0.08)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
            {siteContent.aboutPreview.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
            {siteContent.aboutPreview.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#574c43]">
            {siteContent.aboutPreview.description}
          </p>

          <div className="mt-8 space-y-4">
            {siteContent.aboutPreview.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.5rem] border border-[#eadfce] bg-[#faf5ee] p-5"
              >
                <h3 className="font-display text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5c5147]">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-[2rem] bg-[#1f1a17] p-8 text-[#f6eee2] shadow-[0_24px_80px_rgba(31,26,23,0.2)] sm:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d3b37a]">
              Booking Strategy
            </p>
            <h3 className="font-display mt-4 text-3xl leading-tight">
              Build the public site to convert, then deepen the stack.
            </h3>
            <p className="mt-6 text-sm leading-7 text-[#e6dac9]">
              The first version does not need custom scheduling logic. It needs a
              compelling story, clean service framing, and repeated moments that
              make the booking CTA feel natural.
            </p>
          </div>

          <div className="space-y-4">
            <CtaLink {...bookingAction} className="justify-center sm:justify-start" />
            <Link
              to="/about"
              className="inline-flex text-sm uppercase tracking-[0.22em] text-[#d3b37a] transition hover:text-white"
            >
              Learn more about the brand
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
