declare module '*.svg' {
  const fileName: string;
  export const ReactComponent: React.ComponentType<React.SVGProps>;
  export default fileName;
}

declare module '*.png';
declare module '*.jpg';
