import logoPhoto from "../../assets/logo.jpg";
import { siteContent } from "../../content/siteContent";

const toneStyles = {
  warm: "from-[#d1b07a] via-[#f3dfc2] to-[#f8f1e5] text-[#1f1a17]",
  neutral: "from-[#e9ddd0] via-[#f7f2ea] to-[#ffffff] text-[#1f1a17]",
  dark: "from-[#2c231d] via-[#45362d] to-[#6b5647] text-[#f6eee2]",
};

const GallerySection = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9f7b49]">
            {siteContent.gallery.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
            {siteContent.gallery.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#574c43]">
            {siteContent.gallery.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-[2.25rem] border border-[#dccdb5] bg-[#ead9c2] shadow-[0_24px_80px_rgba(75,52,28,0.1)]">
            <img
              src={logoPhoto}
              alt="House of High Maintenance placeholder gallery visual"
              className="h-full min-h-[22rem] w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a17]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-[#f6eee2] sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d3b37a]">
                Placeholder Visual
              </p>
              <h3 className="font-display mt-3 text-3xl">Luxury mood, ready for final photography</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#efe4d6]">
                This large gallery slot is designed for finished portfolio imagery once the brand photo set is ready.
              </p>
            </div>
          </article>

          <div className="grid gap-6">
            {siteContent.gallery.cards.map((card) => (
              <article
                key={card.title}
                className={`rounded-[2rem] border border-[#dccdb5] bg-gradient-to-br p-8 shadow-[0_24px_80px_rgba(75,52,28,0.08)] ${toneStyles[card.tone]}`}
              >
                <p className="text-xs uppercase tracking-[0.35em] opacity-70">
                  Placeholder Tile
                </p>
                <h3 className="font-display mt-4 text-3xl">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 opacity-85">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
