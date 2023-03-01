// This reads the kural.json file and returns the kural

async function getKural(id) {
  if (id < 1 || id > 1330) {
    return undefined;
  }
  const kuralReq = await import("../public/data/processed_kurals.json");
  const kurals = kuralReq.default;
  return kurals[id - 1];
}

export { getKural };