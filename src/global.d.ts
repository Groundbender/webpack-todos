/// <reference types="react-scripts" />
// declare module '*.module.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

declare module '*.module.scss'

declare module "*.svg"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }