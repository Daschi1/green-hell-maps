import type { PageLoad } from "./$types";

type License = {
  licenses: string;
  repository: string;
  publisher: string;
  path: string;
  licenseFile: string;
};
type Licenses = Record<string, License>;

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch("/licenses.json");
  const licenses: Licenses = await response.json();
  return { licenses };
};
