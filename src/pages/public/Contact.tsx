import CtaLink from "../../components/ui/CtaLink";
import { bookingAction, servicesAction, siteContent } from "../../content/siteContent";

function Contact() {
  return (
    <main className="bg-[#f5eee3] text-[#1f1a17]">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="hhm-orb hhm-orb-bottom" />
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
            Contact
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">
            {siteContent.contactPage.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#574c43]">
            {siteContent.contactPage.description}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {siteContent.contactPage.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-[#dccdb5] bg-white/80 p-8 shadow-[0_24px_80px_rgba(75,52,28,0.08)]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#9f7b49]">
                {card.eyebrow}
              </p>
              <h2 className="font-display mt-4 text-2xl">{card.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#5c5147]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1f1a17] px-6 py-20 text-[#f6eee2]">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d3b37a]">
            FAQ
          </p>
          <div className="mt-8 space-y-4">
            {siteContent.contactPage.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <h2 className="font-display text-2xl">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-[#e6dac9]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-[#dccdb5] bg-white/75 px-8 py-10 shadow-[0_24px_80px_rgba(75,52,28,0.08)] lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
              Booking Path
            </p>
            <h2 className="font-display mt-4 text-3xl">
              Make the next click obvious.
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink {...bookingAction} />
            <CtaLink {...servicesAction} variant="secondary" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
