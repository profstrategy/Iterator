const url = {
  API_URL: process.env.DATABASE_URL,
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return url;
    case "production":
      return url;
    default:
      return url;
  }
};

const env = getEnv()

export const API_URL = env.API_URL