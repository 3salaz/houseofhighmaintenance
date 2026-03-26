import { bookingAction, siteContent, servicesAction } from "../../content/siteContent";
import CtaLink from "../ui/CtaLink";

const BookingSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#1f1a17] px-8 py-12 text-[#f6eee2] shadow-[0_30px_90px_rgba(31,26,23,0.25)] sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d3b37a]">
              {siteContent.booking.eyebrow}
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
              {siteContent.booking.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#e6dac9]">
              {siteContent.booking.description}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <ul className="space-y-4">
              {siteContent.booking.notes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-7 text-[#f0e5d7]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#d3b37a]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CtaLink {...bookingAction} className="justify-center sm:justify-start" />
          <CtaLink
            {...servicesAction}
            variant="secondary"
            className="justify-center border-white/20 text-[#f6eee2] hover:bg-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
