import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// 

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: EmailRequestBody = await request.json();
    const msg = {
      to: (process.env.NEXT_PUBLIC_NODE_ENV === "production"
        ? process.env.TO_EMAIL_PROD
        : process.env.TO_EMAIL_LOCAL)!,
      from: (process.env.NEXT_PUBLIC_NODE_ENV === "production"
        ? process.env.FROM_EMAIL_PROD
        : process.env.FROM_EMAIL_LOCAL)!,
      replyTo: body.email,
      subject: "Livsee Contact Us Form",
      html: `
    <div style="font-family: 'Georgia', serif; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #EAEAEA; border-radius: 4px; overflow: hidden; background-color: #f6f6dd; border-radius: 8px">
        
        <div style="background-color: #1e453e; color: white; padding: 25px 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 22px; letter-spacing: 1px;">NEW CONTACT SUBMISSION</h2>
        </div>
        
        <div style="padding: 30px;">
            <p style="font-size: 16px; margin-top: 0; color: #333333;">A new message has been received through the Livsee contact form:</p>
            
            <div style="margin-top: 20px; border-top: 2px solid #2c4c3b; padding-top: 15px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 15px; color: #333333;">
                    <tr>
                        <td style="padding: 8px 0; width: 30%; font-weight: bold; color: #2c4c3b;">Name:</td>
                        <td style="padding: 8px 0; width: 70%;">${body.name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; width: 30%; font-weight: bold; color: #2c4c3b;">Email:</td>
                        <td style="padding: 8px 0; width: 70%;">
                            <a href="mailto:${body.email}" style="color: #2c4c3b; text-decoration: underline;">${body.email}</a>
                        </td>
                    </tr>
                </table>
            </div>

            <h4 style="margin-top: 30px; margin-bottom: 10px; color: #2c4c3b; font-size: 18px;">Message:</h4>
            <div style="border: 1px solid #a9a9a9; padding: 15px; background-color: white; border-radius: 4px;">
                <p style="white-space: pre-wrap; margin: 0; font-size: 15px; color: #333333;">${body.message}</p>
            </div>

            <p style="text-align: center; margin-top: 35px; font-size: 14px; color: #777777;">
                Please reply to this thread to contact the sender.
            </p>
        </div>
    </div>
`,
    };

    await sgMail.send(msg);

    return new Response(JSON.stringify("Email Sent"), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        {
          message: "An internal server error occurred",
          error: error.message,
        },
        { status: 500 }
      );
    }
    return Response.json(
      {
        message: "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
