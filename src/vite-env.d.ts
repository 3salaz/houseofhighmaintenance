/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SQUARE_BOOKING_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
