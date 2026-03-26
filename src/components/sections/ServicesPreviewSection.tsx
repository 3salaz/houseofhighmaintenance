import { bookingAction, siteContent } from "../../content/siteContent";
import CtaLink from "../ui/CtaLink";

const ServicesPreviewSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
              {siteContent.servicesPreview.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
              {siteContent.servicesPreview.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-[#574c43]">
              {siteContent.servicesPreview.description}
            </p>
          </div>

          <CtaLink {...bookingAction} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteContent.servicesPreview.categories.map((category) => (
            <article
              key={category.title}
              className="rounded-[2rem] border border-[#dccdb5] bg-white/80 p-8 shadow-[0_24px_80px_rgba(75,52,28,0.08)] transition duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-3xl">{category.title}</h3>
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
      </div>
    </section>
  );
};

export default ServicesPreviewSection;
