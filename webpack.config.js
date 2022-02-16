const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const purgecss = require('@fullhuman/postcss-purgecss')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

// Basic Path
const PATHS = {
  src: path.join(__dirname, 'src'),
}

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    assetModuleFilename: 'assets/[name][ext]', // 리소스 경로 구성
    clean: true, // 생성된 파일만 보임
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  // 최적화 설정
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  devtool: 'cheap-source-map',
  devServer: {
    static: './dist',
    port: 3333,
    historyApiFallback: true,
    hot: true,

    client: {
      progress: true,
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },

      // css & scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              modules: {
                auto: true,
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  [
                    '@fullhuman/postcss-purgecss',
                    {
                      content: [
                        path.join(__dirname, './public/index.html'),
                        ...glob.sync(
                          `${path.join(__dirname, 'src')}/**/*.tsx`,
                          {
                            nodir: true,
                          }
                        ),
                      ],
                    },
                  ],
                ],
              },
            },
          },
          // scss
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
              sassOptions: {
                fiber: require('fibers'), // 속도향상
              },
              additionalData: `
              @import "${PATHS.src}/assets/scss/variables";
              `,
            },
          },
        ],
      },

      // assets
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext][query]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]',
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        use: ['@svgr/webpack'],
      },
      // html
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: false },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    // * 사용안된 Css 제거 (Only Dev)
    // new PurgecssPlugin({
    //   paths: glob.sync(`${PATHS.src}/**/*.css`, { nodir: true }),
    // }),

    new CleanWebpackPlugin(),
  ],
}
