/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "dbuser",
        mongodb_password: "1XKFxwgLaggxWAAL",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "dbuser",
      mongodb_password: "1XKFxwgLaggxWAAL",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};
