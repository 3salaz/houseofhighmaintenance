import { Link } from "react-router-dom";

import logoTransparent from "../../assets/logo-transparent.png";
import { bookingAction, navItems, siteContent } from "../../content/siteContent";
import CtaLink from "../ui/CtaLink";

const Footer = () => {
  return (
    <footer className="border-t border-[#3e3127] bg-[#171210] text-[#f3eadc]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={logoTransparent}
                alt={siteContent.brand.name}
                className="h-14 w-auto"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#d3b37a]">
                  {siteContent.brand.city}
                </p>
                <p className="font-display text-2xl">{siteContent.brand.name}</p>
              </div>
            </Link>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#d4c8b6]">
              {siteContent.brand.description}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3 text-sm text-[#eadfce]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-full border border-[#4d3d32] px-4 py-2 transition hover:border-[#d3b37a] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <CtaLink {...bookingAction} />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#3e3127] pt-6 text-xs uppercase tracking-[0.2em] text-[#ab9d8d] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteContent.brand.name}</p>
          <p>{siteContent.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
