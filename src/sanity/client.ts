import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hu6m2960';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-02-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 10,
}: {
  query: string;
  params?: Record<string, any>;
  revalidate?: number | false;
}): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params, {
      next: { revalidate: revalidate === false ? undefined : revalidate },
    });
  } catch (error) {
    console.warn('Sanity fetch fallback active:', error);
    return null;
  }
}
