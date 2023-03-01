// Handle requests to /api/kural
// Request contains one parameter: id (number) which is the id of the kural to be retrieved and can range from 1 to 1330

import { getKural } from "../../lib/kural.js";

export default async function handler(req, res) {
  const id = req.query.id;
  const kural = await getKural(id);
  res.status(200).json(kural);
};