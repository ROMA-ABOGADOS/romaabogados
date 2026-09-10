const fs = require('fs');
const path = require('path');

const content = `'use client';

import { useState, useEffect } from 'react';
import { client } from './client';

export function useSanityDocument<T>(query: string, initialFallback: T): T {
  const [data, setData] = useState<T>(initialFallback);

  useEffect(() => {
    let isMounted = true;
    client
      .fetch<T>(query)
      .then((res) => {
        if (isMounted && res) {
          // Merge or replace so missing fields don't erase fallbacks
          if (typeof res === 'object' && res !== null && !Array.isArray(res)) {
            setData((prev) => ({ ...prev, ...res }));
          } else {
            setData(res);
          }
        }
      })
      .catch((err) => {
        // Keeps fallback on error, zero breaking changes
      });
    return () => {
      isMounted = false;
    };
  }, [query]);

  return data;
}
';

fs.writeFileSync(path.join(process.cwd(), 'src', 'sanity', 'useSanity.ts'), content);
console.log('useSanity.ts created');
