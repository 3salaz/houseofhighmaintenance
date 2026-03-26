import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonToolbar,
} from "@ionic/react";
import { Link, useLocation } from "react-router-dom";

import logoTransparent from "../../assets/logo-transparent.png";
import { bookingAction, navItems, siteContent } from "../../content/siteContent";
import CtaLink from "../ui/CtaLink";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <IonMenu side="start" menuId="main-menu" contentId="main-content">
        <IonContent className="hhm-menu">
          <div className="px-6 pb-6 pt-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9f7b49]">
              {siteContent.brand.city}
            </p>
            <h2 className="font-display mt-3 text-3xl text-[#1f1a17]">
              {siteContent.brand.name}
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#5c5147]">
              {siteContent.brand.tagline}
            </p>
          </div>

          <IonList lines="none" className="px-4 pb-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <IonMenuToggle key={item.href} autoHide={false}>
                  <IonItem
                    button
                    detail={false}
                    routerLink={item.href}
                    className={`menu-link ${isActive ? "menu-link-active" : ""}`}
                  >
                    {item.label}
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>

          <div className="px-6 pb-10">
            <CtaLink {...bookingAction} className="w-full justify-center" />
          </div>
        </IonContent>
      </IonMenu>

      <IonHeader className="ion-no-border">
        <IonToolbar className="hhm-toolbar px-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-3">
              <IonMenuButton menu="main-menu" className="hhm-menu-button lg:hidden" />

              <Link to="/" className="flex items-center gap-3">
                <img
                  src={logoTransparent}
                  alt={siteContent.brand.name}
                  className="h-11 w-auto"
                />
                <div className="hidden sm:block">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#9f7b49]">
                    {siteContent.brand.city}
                  </p>
                  <p className="font-display text-lg text-[#1f1a17]">
                    {siteContent.brand.shortName}
                  </p>
                </div>
              </Link>
            </div>

            <nav className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      isActive
                        ? "bg-[#1f1a17] text-[#f6eee2]"
                        : "text-[#352c26] hover:bg-white/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block">
              <CtaLink {...bookingAction} />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Navbar;
