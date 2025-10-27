/// <reference types="vite/client" />
/// <reference types="msw" />

interface ImportMetaEnv {
  readonly VITE_CONFIG_TEST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}