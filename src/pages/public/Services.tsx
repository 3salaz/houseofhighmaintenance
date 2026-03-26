import CtaLink from "../../components/ui/CtaLink";
import { bookingAction, siteContent } from "../../content/siteContent";

function Services() {
  return (
    <main className="bg-[#f5eee3] text-[#1f1a17]">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="hhm-orb hhm-orb-top" />
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
            Services
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">
            {siteContent.servicesPage.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#574c43]">
            {siteContent.servicesPage.description}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {siteContent.servicesPage.categories.map((category) => (
            <article
              key={category.title}
              className="rounded-[2rem] border border-[#dccdb5] bg-white/80 p-8 shadow-[0_24px_80px_rgba(75,52,28,0.08)]"
            >
              <h2 className="font-display text-3xl">{category.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#5c5147]">
                {category.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#352c26]">
                {category.services.map((service) => (
                  <li key={service} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#b7894e]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1f1a17] px-6 py-20 text-[#f6eee2]">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d3b37a]">
            Booking Flow
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {siteContent.servicesPage.process.map((step) => (
              <article
                key={step}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm leading-7 text-[#e6dac9]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-[#dccdb5] bg-white/75 px-8 py-10 shadow-[0_24px_80px_rgba(75,52,28,0.08)] lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
              Reserve
            </p>
            <h2 className="font-display mt-4 text-3xl">
              Match the service to the result, then book.
            </h2>
          </div>

          <CtaLink {...bookingAction} />
        </div>
      </section>
    </main>
  );
}

export default Services;
