import logoTransparent from "../../assets/logo-transparent.png"
import { bookingAction, servicesAction, siteContent } from "../../content/siteContent";
import CtaLink from "../ui/CtaLink";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-12 sm:pb-20 sm:pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?salon')",
        }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5eee3]/80 to-[#f5eee3]/60" />

      <div className="hhm-orb hhm-orb-top" />
      <div className="hhm-orb hhm-orb-bottom" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
            {siteContent.hero.eyebrow}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            {siteContent.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#574c43]">
            {siteContent.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink {...bookingAction} className="justify-center sm:justify-start" />
            <CtaLink
              {...servicesAction}
              variant="secondary"
              className="justify-center sm:justify-start"
            />
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {siteContent.hero.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-[1.5rem] border border-[#e7dac7] bg-white/60 px-5 py-4 text-sm leading-6 text-[#352c26] backdrop-blur"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10">
          <div className="rounded-[2.5rem] border border-[#dccdb5] bg-white/70 p-6 shadow-[0_30px_100px_rgba(75,52,28,0.12)] backdrop-blur sm:p-8">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#d3b37a] to-[#1f1a17] p-8 text-[#f6eee2]">
              <img
                src={logoTransparent}
                alt="House of High Maintenance brand mark"
                className="h-16 w-auto opacity-95 bg-white rounded-md p-2"
              />
              <p className="mt-8 text-sm uppercase tracking-[0.35em] text-[#d3b37a]">
                Launch Focus
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight">
                The homepage should make the booking CTA feel inevitable.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#e6dac9]">
                Lead with visual quality, explain the service offer quickly,
                and keep every section pointed toward the next click.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {siteContent.stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[#eadfce] bg-[#faf5ee] p-5"
                >
                  <p className="font-display text-3xl text-[#1f1a17]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5c5147]">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
