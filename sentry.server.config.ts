// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://34cb66f2d8234036b2058cbce07c6aa5@o4504131190456320.ingest.sentry.io/4505462636478464",

  enabled: process.env.VERCEL_ENV ? true : false,

  environment: process.env.VERCEL_ENV ? process.env.VERCEL_ENV : "local",

  // Adjust this value in production, or use tracesSampler for greater control
  // tracesSampleRate: 1,
  tracesSampler: (context: SamplingContext): boolean | number => {
    if (process.env.VERCEL_ENV && process.env.VERCEL_ENV == "production") {
      return 0.8
    } else {
      return false
    }
  },

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,
})
