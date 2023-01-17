/// <reference types="vite/client" />
// this file is required for Typescript to resolve .env Variables

interface ImportMetaEnv {
    readonly VITE_API_BASE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}