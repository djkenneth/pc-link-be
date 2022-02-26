module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3d4cc1cfe50368b38245c26f5c8a7e6'),
  },
});
