declare module '*.png' {
  const filePath: string;
  export default filePath;
}

declare module '*.jpg' {
  const filePath: string;
  export default filePath;
}

declare module '*.jpeg' {
  const filePath: string;
  export default filePath;
}

declare module '*.gif' {
  const filePath: string;
  export default filePath;
}

declare module '*.ico' {
  const filePath: string;
  export default filePath;
}

declare module '*.webp' {
  const filePath: string;
  export default filePath;
}

declare module '*.svg' {
  const fileName: string;
  export const ReactComponent: React.ComponentType<React.SVGProps>;
  export default fileName;
}
