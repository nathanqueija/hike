import Router from 'next/router';

export const navigateTo = (path: string, replace?: boolean) =>
  replace ? Router.replace(path) : Router.push(path);
