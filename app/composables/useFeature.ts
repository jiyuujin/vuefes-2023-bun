export function useFeature() {
  const config = useRuntimeConfig()

  return {
    registerNamecard: config.public.registerNamecard,
  }
}
