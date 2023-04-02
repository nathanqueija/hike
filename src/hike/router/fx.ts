import { navigateTo } from '@/hike/router/core';

export const navigateFx = (path: string, replace?: boolean) => {
  navigateTo(path, replace);
};
