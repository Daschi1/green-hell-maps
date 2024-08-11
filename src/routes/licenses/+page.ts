import type { PageLoad } from "./$types";

type License = {
  name?: string;
  version?: string;
  description?: string;
  repository?: string;
  publisher?: string;
  licenses?: string;
  copyright?: string;
};
type Licenses = Record<string, License>;

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch("/licenses.json");
  const licenses: Licenses = await response.json();
  return { licenses };
};
