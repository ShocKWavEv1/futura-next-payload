export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const swrOptions = {
  revalidateOnMount: true,
  revalidateOnFocus: false,
};
