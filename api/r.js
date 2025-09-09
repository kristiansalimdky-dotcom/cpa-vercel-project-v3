
export default function handler(req, res) {
  const { aff = 'default_aff', target = 'sopalpha-1box' } = req.query;
  console.log(`Klik CPA: aff=${aff}, target=${target}, time=${Date.now()}`);
  res.writeHead(302, { Location: `https://www.tokopedia.com/herbalindo86/${target}?aff=${aff}` });
  res.end();
}
