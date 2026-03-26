import { Link } from "react-router-dom";

import type { ActionLink } from "../../types";

interface CtaLinkProps extends ActionLink {
  variant?: "primary" | "secondary";
  className?: string;
}

const baseClasses =
  "inline-flex items-center rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] transition duration-300";

const variantClasses = {
  primary:
    "bg-[#1f1a17] text-[#f6eee2] shadow-[0_20px_40px_rgba(31,26,23,0.18)] hover:-translate-y-0.5 hover:bg-[#322922]",
  secondary:
    "border border-[#b7894e] bg-transparent text-[#1f1a17] hover:bg-white/80",
};

const CtaLink = ({
  href,
  label,
  external,
  variant = "primary",
  className = "",
}: CtaLinkProps) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {label}
    </Link>
  );
};

export default CtaLink;
