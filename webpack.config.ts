 // Подключаем модуль path для работы с путями файлов
import path from 'path';
 // Подключаем плагин HtmlWebpackPlugin для генерации HTML-файла
import HtmlWebpackPlugin from 'html-webpack-plugin'; 
 // Импортируем интерфейс Configuration из модуля webpack
import { Configuration , ProvidePlugin } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const config: Configuration = {
   entry: './src/index.tsx', // Указываем точку входа для сборки
   output: {
     path: path.resolve(__dirname, 'dist'), // Указываем путь для выходных файлов
     filename: 'bundle.js' // Указываем имя выходного файла
   },
   // Настраиваем расширения файлов и пути для импортов
   resolve: {
     extensions: ['.tsx', '.ts', '.js'],
     // Определяем алиасы для часто используемых путей
     alias: {
       '@': path.resolve(__dirname, 'src/'),
       '@styles': path.resolve(__dirname, 'src/styles/')
     },
   },
   module: {
     rules: [
       {
         test: /\.tsx?$/,
         exclude: /node_modules/,
         use: {
           // Используем babel-loader для обработки TypeScript-файлов
           loader: 'babel-loader', 
           options: {
             presets: [
               '@babel/preset-env',
               '@babel/preset-react',
               '@babel/preset-typescript'
             ]
           }
         }
       },
       {
         test: /\.s[ac]ss$/i,
         use: [
           'style-loader',
           'css-loader',
           'sass-loader'
         ]
       },
       {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgoConfig: {
             plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true
                }
               }
              ]
             }
            }
           } 
          ],
        }
      ]
   },
   devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    }, // Указываем путь к статическим файлам
     compress: true,
     port: 3000,
     open: true
   },
   plugins: [
     new HtmlWebpackPlugin({
       template: './public/index.html' // Указываем путь к шаблону HTML-файла
     }),
     new ProvidePlugin({
      "React": "react",
  })
   ]
 };
 
 export default config;