import { ONEDOLLARSTATS_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

const ALLOWED_RANGES = ["day", "7d", "30d", "6mo", "12mo", "year", "all"];

export const load: PageServerLoad = async ({ fetch, url }) => {
  const dateRangeParam = url.searchParams.get("date_range");
  const date_range = ALLOWED_RANGES.includes(dateRangeParam ?? "") ? dateRangeParam : "30d";

  const response = await fetch("https://api.onedollarstats.com/api", {
    method: "POST",
    headers: {
      "x-api-key": ONEDOLLARSTATS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      site_id: "green-hell-maps.daschi.dev",
      metrics: ["visitors"],
      date_range: date_range,
      filters: [["is", "event:goal", ["Coordinate Toggle"]]],
      dimensions: [
        "event:goal",
        "event:props:coordinate_id",
        "event:props:west_deg",
        "event:props:south_deg",
      ],
    }),
  });

  if (!response.ok) {
    console.error("Failed to fetch heatmap data", response.status, response.statusText);
    return { heatmapData: {} };
  }

  const json = await response.json();
  const heatmapData: Record<string, number> = {};

  if (json.results && Array.isArray(json.results)) {
    for (const result of json.results) {
      // dimensions.1 -> coordinate_id (String)
      // metrics.0 -> amount (Number)

      const coordinateId = result.dimensions?.[1];
      const amount = result.metrics?.[0];

      if (coordinateId && amount !== undefined) {
        heatmapData[String(coordinateId)] = Number(amount);
      }
    }
  }

  return { heatmapData };
};
