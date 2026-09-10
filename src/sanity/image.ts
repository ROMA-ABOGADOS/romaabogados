import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from './client';

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source: any) {
  if (!source || !source.asset) return null;
  return builder.image(source);
}

export function getSanityImageUrl(sanityImage: any, fallbackPath: string): string {
  if (sanityImage && sanityImage.asset) {
    try {
      return builder.image(sanityImage).auto('format').fit('max').url() || fallbackPath;
    } catch {
      return fallbackPath;
    }
  }
  return fallbackPath;
}
