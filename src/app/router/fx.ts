import { navigateTo } from '@/app/router/core';

export const navigateFx = (path: string, replace?: boolean) => {
  navigateTo(path, replace);
};
