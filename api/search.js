export default async function handler(req, res) {
  const q = String(req.query.q || "").trim();

  if (!q) {
    return res.status(400).json({
      error: "Missing search query"
    });
  }

  const BLOCKED = [
    "porn",
    "porno",
    "pornography",
    "xxx",
    "sex",
    "sexual",
    "naked",
    "nude",
    "nudity",
    "blowjob",
    "handjob",
    "penetration",
    "intercourse",
    "cum",
    "semen",
    "genitals",
    "explicit"
  ];

  const normalized = q.toLowerCase();

  if (BLOCKED.some(word => normalized.includes(word))) {
    return res.status(403).json({
      error: "This search term is not available on Velvet."
    });
  }

  /*
   * For  now this endpoint is deliberately provider-neutral.
   * The next step connects it to the actual media provider.
   */

  return res.status(200).json({
    query: q,
    results: [],
    message: "Search provider not connected yet."
  });
}
