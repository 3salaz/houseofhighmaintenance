import { siteContent } from "../../content/siteContent";

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
            {siteContent.testimonials.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
            {siteContent.testimonials.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#574c43]">
            {siteContent.testimonials.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteContent.testimonials.cards.map((card) => (
            <article
              key={card.quote}
              className="rounded-[2rem] border border-[#dccdb5] bg-white/80 p-8 shadow-[0_24px_80px_rgba(75,52,28,0.08)]"
            >
              <p className="font-display text-3xl leading-tight text-[#1f1a17]">
                “{card.quote}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.35em] text-[#9f7b49]">
                {card.source}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
