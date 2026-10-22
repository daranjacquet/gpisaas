import { useEffect, useState } from 'react'

type Resultat<T> = { url: string; data: T | null; error: Error | null }

export function useFetch<T>(url: string) {
  const [resultat, setResultat] = useState<Resultat<T> | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch(url, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<T>
      })
      .then((data) => setResultat({ url, data, error: null }))
      .catch((error) => {
        if (error.name !== 'AbortError') setResultat({ url, data: null, error })
      })
    return () => controller.abort()
  }, [url])

  const aJour = resultat?.url === url
  return {
    data: aJour ? resultat.data : null,
    error: aJour ? resultat.error : null,
    loading: !aJour,
  }
}
