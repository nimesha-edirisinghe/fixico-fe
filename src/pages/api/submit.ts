import { writeFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function submit(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const uuid = Math.random().toString(26).slice(2);
  writeFileSync(`./public/db/${uuid}.json`, JSON.stringify(req.body));
  res.status(201).json({ uuid });
}
