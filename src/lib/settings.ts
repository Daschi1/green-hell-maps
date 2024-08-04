import { writable } from "svelte/store";

export const alwaysShowCoordinateOverlay = writable(false);
export const coordinateOverlayOpacity = writable(0.6);
