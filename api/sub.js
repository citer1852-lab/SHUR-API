// api/sub.js
const GITHUB_SUB_URL = 'https://citer1852-lab.github.io/SHUR-SUB/sub.txt'; // ваша ссылка

export default async function handler(req, res) {
  try {
    const response = await fetch(GITHUB_SUB_URL);
    const text = await response.text();
    
    // Заголовки, которые нужны HApp
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Disposition', "attachment; filename*=utf-8''🧩 SHUR-SUB | NODE");
    res.setHeader('Profile-Update-Interval', '6');
    // Статистика трафика и срок (замените expire на нужный Unix timestamp)
    res.setHeader('Subscription-Userinfo', 'upload=0; download=0; total=0; expire=1735689600');
    
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send('Error fetching subscription');
  }
}
