/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKING_SITE_MODE?: string;
  readonly VITE_SQUARE_BOOKING_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
