module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  watchAdminFiles: true,
  webpack: {
    devtool: 'source-map',
    resolve: {
      symlinks: false,
    },
    performance: {
      hints: false,
    },
    devServer: {
      hot: true,
    }
  }
});