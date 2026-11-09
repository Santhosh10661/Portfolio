export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { from_name, from_email, subject, message } = req.body;

  if (!from_name || !from_email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Log message server-side in Next.js environment
  console.log('[Contact Form Submission]:', {
    name: from_name,
    email: from_email,
    subject: subject || 'No subject',
    message,
    timestamp: new Date().toISOString(),
  });

  return res.status(200).json({
    success: true,
    message: 'Message received successfully',
  });
}
