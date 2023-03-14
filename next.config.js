/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    serverRoot: process.env.SERVER_ROOT || '20.82.160.202',
    apiRoot: process.env.API_ROOT || 'http://20.82.160.202' + '/api',
  },
};

module.exports = nextConfig;
