module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb04e5fd5d658e388a59d9e5ab5d5b8d'),
  },
});
