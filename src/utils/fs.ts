import { normalize } from "pathe";
import { cwd } from "node:process";

let cachedCWD: null | string = null;

export function getCurrentWorkingDirectory(useCache = true): string {
  if (useCache && cachedCWD) {
    return cachedCWD;
  }

  try {
    const currentDirectory = normalize(cwd());

    if (useCache) {
      cachedCWD = currentDirectory;
    }

    return currentDirectory;
  } catch (error) {
    console.error("Error getting current working directory:", String(error));

    throw error;
  }
}