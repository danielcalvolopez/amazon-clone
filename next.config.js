const nexConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "i.postimg.cc",
      "fakestoreapi.com",
      "d2908q01vomqb2.cloudfront.net",
    ],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
