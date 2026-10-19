// Node.js Backend Serverless Function for Vercel
// Handles demo booking requests and inquiry submissions

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { name, phone, orgType, preferredDate, notes } = req.body || {};

      if (!name || !phone) {
        return res.status(400).json({
          success: false,
          error: 'Name and phone are required fields.'
        });
      }

      // Log booking inquiry for 3CX Dimensions showcase
      console.log('--- NEW 3CX DEMO INQUIRY RECEIVED ---');
      console.log(`Full Name: ${name}`);
      console.log(`Phone: ${phone}`);
      console.log(`Organization Type: ${orgType || 'General'}`);
      console.log(`Preferred Date/Time: ${preferredDate || 'Not specified'}`);
      console.log(`Notes: ${notes || 'None'}`);
      console.log(`Timestamp: ${new Date().toISOString()}`);

      return res.status(200).json({
        success: true,
        message: 'בקשת ההדגמה התקבלה בהצלחה! צוות המומחים שלנו ייצור קשר בהקדם.',
        bookingId: 'DEMO-' + Math.floor(100000 + Math.random() * 900000),
        data: {
          name,
          phone,
          orgType,
          receivedAt: new Date().toISOString()
        }
      });
    } catch (err) {
      console.error('Error handling demo request:', err);
      return res.status(500).json({
        success: false,
        error: 'שגיאת שרת בעיבוד הבקשה. אנא פנה ישירות בווטסאפ או בטלפון.'
      });
    }
  }

  // GET health check
  return res.status(200).json({
    status: 'healthy',
    service: '3CX Dimensions Showcase API',
    runtime: 'Node.js ' + process.version,
    timestamp: new Date().toISOString()
  });
}
