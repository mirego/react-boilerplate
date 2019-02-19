import {useEffect} from 'react';

const useTitle = (title: string) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
};

export default useTitle;
