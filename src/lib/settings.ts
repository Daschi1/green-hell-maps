import { writable } from "svelte/store";
import { queryParam } from "sveltekit-search-params";

export const alwaysShowCoordinateOverlay = writable(false);
export const coordinateOverlayOpacity = writable(0.6);
export const clickedCoordinates = queryParam<number[]>("coordinates", {
  encode: (value: number[]) => clickedCoordinatesEncode(value),
  decode: (value: string | null) => clickedCoordinatesDecode(value),
});
export const mapOverlayOpacity = writable(0.5);

/**
 * Encodes an array of four-digit integers into a compact string representation.
 * This encoded string is suitable for use in URL query parameters.
 *
 * @param {number[]} value - The array of four-digit integers to encode.
 * @returns {string} - The encoded string representation.
 */
function clickedCoordinatesEncode(value: number[]): string {
  // Convert the array of integers to a single string of digits.
  // Each integer is padded to four digits for uniformity.
  const str = value.map((num) => num.toString().padStart(4, "0")).join("");

  // Compact the string by grouping digits in pairs and converting them to characters.
  // This reduces the size of the string for URL compatibility.
  let compactStr = "";
  for (let i = 0; i < str.length; i += 2) {
    // Convert each pair of digits to a number, add 65, and convert to a character.
    // The +65 ensures the character is a printable ASCII character (starting from 'A').
    compactStr += String.fromCharCode(parseInt(str.slice(i, i + 2), 10) + 65);
  }

  return compactStr;
}

/**
 * Decodes a compact string representation back into an array of four-digit integers.
 * This function reverses the encoding process to restore the original data.
 *
 * @param {string | null} value - The compact string representation to decode.
 * @returns {number[] | null} - The decoded array of four-digit integers, or null if decoding fails.
 */
function clickedCoordinatesDecode(value: string | null): number[] | null {
  if (value === null) return null;

  try {
    // Expand the compacted string back to the original string of digits.
    // Each character represents a pair of digits, so we convert back to numbers.
    let str = "";
    for (const char of value) {
      // Convert each character back to a number, subtract 65, and pad with zeros.
      // This reverses the encoding step and restores the original digits.
      const num = char.charCodeAt(0) - 65;
      str += num.toString().padStart(2, "0");
    }

    // Split the string into an array of four-digit integers.
    // This step restores the original array structure from the string.
    const result: number[] = [];
    for (let i = 0; i < str.length; i += 4) {
      result.push(parseInt(str.slice(i, i + 4), 10));
    }

    return result;
  } catch {
    // Return null if any error occurs during decoding, e.g., invalid input.
    return null;
  }
}
