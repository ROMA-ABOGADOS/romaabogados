"use client";

import { useState, useEffect } from "react";
import { client } from "./client";

export function useSanityDocument<T>(query: string, initialFallback: T): T {
  const [data, setData] = useState<T>(initialFallback);

  useEffect(() => {
    let isMounted = true;
    client
      .fetch<T>(query)
      .then((res) => {
        if (isMounted && res) {
          if (typeof res === "object" && res !== null && !Array.isArray(res)) {
            setData((prev) => ({ ...prev, ...res }));
          } else {
            setData(res);
          }
        }
      })
      .catch(() => {
        // Keeps fallback on error, zero breaking changes
      });
    return () => {
      isMounted = false;
    };
  }, [query]);

  return data;
}
