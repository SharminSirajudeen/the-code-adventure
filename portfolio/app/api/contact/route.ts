import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Code Foundry <onboarding@resend.dev>', // Verified domain email
      to: 'sharminsirajudeen11@gmail.com', // Your email
      replyTo: email, // Client's email for easy reply
      subject: `New Project Inquiry: ${projectType}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #1a1f3a 0%, #2d3748 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                color: #FF6B35;
              }
              .content {
                background: #f7fafc;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 6px;
                border-left: 4px solid #FF6B35;
              }
              .field-label {
                font-weight: 600;
                color: #2d3748;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                color: #1a1f3a;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 6px;
                border: 2px solid #e2e8f0;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                color: #718096;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🔨 New Project Inquiry</h1>
              <p style="margin: 10px 0 0 0; color: #e2e8f0;">Code Foundry Portfolio</p>
            </div>

            <div class="content">
              <div class="field">
                <div class="field-label">Client Name</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #FF6B35; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">Project Type</div>
                <div class="field-value">${projectType}</div>
              </div>

              <div class="message-box">
                <div class="field-label" style="margin-bottom: 10px;">Project Details</div>
                <div class="field-value" style="white-space: pre-line;">
                  ${message}
                </div>
              </div>

              <div class="footer">
                <p>
                  <strong>Response required within 24 hours</strong><br>
                  Click "Reply" to respond directly to ${name}
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        id: data.id
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error.message
      },
      { status: 500 }
    );
  }
}
