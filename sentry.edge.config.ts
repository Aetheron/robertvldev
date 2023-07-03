// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://34cb66f2d8234036b2058cbce07c6aa5@o4504131190456320.ingest.sentry.io/4505462636478464",

  enabled: process.env.VERCEL_ENV ? true : false,

  environment: process.env.VERCEL_ENV ? process.env.VERCEL_ENV : "local",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
})
