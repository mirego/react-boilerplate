import {isValidElement, cloneElement} from 'react';
import parse from 'html-react-parser';

const rawFavicons: string[] = require(process.env.FAVICON_PATH!);
const parsedFavicons: any = rawFavicons.map((element, index) => {
  const icon = parse(element);
  if (!isValidElement(icon)) return;
  return cloneElement(icon, {key: index});
});

export default parsedFavicons;
