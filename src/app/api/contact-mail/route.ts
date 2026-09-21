import { NextRequest, NextResponse } from "next/server";

const MAIL_API = process.env.MAIL_API;
const MAIL_API_KEY = process.env.MAIL_API_KEY;

const COMPANY_NAME = "Yulanto Web Creation";
const COMPANY_EMAIL = "yulantodevelopers@gmail.com";
const CC_EMAIL = "yulantodevelopers@gmail.com";
const WEBSITE_URL = "https://yulanto.com";
const COMPANY_PHONE = "99621 57250";
const COMPANY_ADDRESS =
    "First Floor, F3, #4/608, VOC St, OMR, Kottivakkam, Chennai, Tamil Nadu 600041";


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHtml(value: string = "") {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ==========================================
// SEND MAIL
// ==========================================

async function sendMail(data: any) {
    if (!MAIL_API || !MAIL_API_KEY) {
        throw new Error("Mail API configuration is missing");
    }

    const response = await fetch(MAIL_API, {
        method: "POST",

        headers: {
            accept: "application/json",
            "api-key": MAIL_API_KEY,
            "content-type": "application/json",
        },

        body: JSON.stringify(data),
    });

    const result = await response.text();

    if (!response.ok) {
        console.error("Brevo API Error:", result);
        throw new Error("Failed to send email");
    }

    return result;
}


// ==========================================
// POST
// ==========================================

export async function POST(req: NextRequest) {

    try {

        const data = await req.json();

        console.log("Mail Data:", data);


        // ==========================================
        // FRONTEND DATA
        // ==========================================

        const {
            name: rawName,
            phone: rawPhone,
            email: rawEmail,
            lookingFor: rawLookingFor,
            message: rawMessage,
        } = data;


        // ==========================================
        // REQUIRED FIELD VALIDATION
        // ==========================================

        if (
            !rawName?.trim() ||
            !rawPhone?.trim() ||
            !rawEmail?.trim()
        ) {

            return NextResponse.json(
                {
                    status: false,
                    message: "Please fill all required fields.",
                },
                {
                    status: 400,
                }
            );
        }


        // ==========================================
        // SANITIZE DATA
        // ==========================================

        const name = escapeHtml(rawName.trim());

        const phone = escapeHtml(rawPhone.trim());

        const customerEmail = escapeHtml(rawEmail.trim());

        const lookingFor = escapeHtml(
            rawLookingFor?.trim() || "Not specified"
        );

        const message = escapeHtml(
            rawMessage?.trim() || "No message provided"
        );


        // ==========================================
        // DATE & TIME
        // ==========================================

        const datetime = new Date().toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "Asia/Kolkata",
        });


        // ==========================================
        // ADMIN EMAIL
        // ==========================================

        const adminMail = `
            <html>

            <head>

                <style>

                    body {
                        font-family: Arial, sans-serif;
                        background: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }

                    .container {
                        max-width: 650px;
                        margin: 20px auto;
                        background: #fff;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
                    }

                    .header {
                        background: #f4f4f4;
                        padding: 20px;
                        text-align: center;
                        color: #565656;
                        font-size: 20px;
                        font-weight: bold;
                    }

                    .content {
                        padding: 20px;
                    }

                    .content p {
                        margin: 10px 0;
                        color: #555;
                        font-size: 15px;
                    }

                    .label {
                        font-weight: bold;
                        color: #222;
                    }

                    .message {
                        background: #f8f8f8;
                        padding: 15px;
                        border-radius: 6px;
                        margin-top: 8px;
                        white-space: pre-line;
                    }

                    .note {
                        color: red !important;
                        font-weight: bold;
                        margin-top: 20px !important;
                    }

                    .footer {
                        background: #efeded;
                        padding: 15px;
                        text-align: center;
                        color: #555;
                    }

                </style>

            </head>


            <body>

                <div class="container">


                    <div class="header">
                        Enquiry Details - ${datetime}
                    </div>


                    <div class="content">


                        <p>
                            <span class="label">
                                Name:
                            </span>

                            ${name}
                        </p>


                        <p>

                            <span class="label">
                                Phone:
                            </span>

                            <a href="tel:${phone}">
                                ${phone}
                            </a>

                        </p>


                        <p>

                            <span class="label">
                                Email:
                            </span>

                            ${customerEmail}

                        </p>


                        <p>

                            <span class="label">
                                Looking For:
                            </span>

                            ${lookingFor}

                        </p>


                        <p>

                            <span class="label">
                                Message:
                            </span>

                        </p>


                        <div class="message">

                            ${message}

                        </div>


                        <p class="note">

                            ⚠ Do not reply to this mail

                        </p>


                    </div>


                    <div class="footer">

                        <strong>
                            ${COMPANY_NAME}
                        </strong>

                    </div>


                </div>

            </body>

            </html>
        `;


        // ==========================================
        // CUSTOMER THANK YOU EMAIL
        // ==========================================

        const thankMail = `

            <html>

            <head>

                <style>

                    body {
                        font-family: Arial, sans-serif;
                        background: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }

                    .container {
                        max-width: 650px;
                        margin: 20px auto;
                        background: #fff;
                        border-radius: 10px;
                        overflow: hidden;
                        box-shadow: 0 6px 20px rgba(0,0,0,0.1);
                    }

                    .header {
                        background: #f4f4f4;
                        padding: 25px;
                        text-align: center;
                        color: #333;
                        font-size: 22px;
                        font-weight: bold;
                    }

                    .content {
                        padding: 25px;
                    }

                    .content h2 {
                        margin-top: 0;
                        color: #333;
                    }

                    .content p {
                        margin: 10px 0;
                        color: #555;
                        font-size: 15px;
                        line-height: 1.6;
                    }

                    .website {
                        color: #0a84ff;
                        text-decoration: none;
                    }

                    .note {
                        color: red !important;
                        font-weight: bold;
                        margin-top: 20px !important;
                    }

                    .footer {
                        background: #efeded;
                        padding: 15px;
                        text-align: center;
                        font-size: 13px;
                        color: #555;
                    }

                    .footer a {
                        color: #0a84ff;
                        text-decoration: none;
                    }

                </style>

            </head>


            <body>

                <div class="container">


                    <div class="header">

                        ${COMPANY_NAME}

                    </div>


                    <div class="content">


                        <h2>

                            Thank you for contacting
                            ${COMPANY_NAME}

                        </h2>


                        <p>

                            Dear ${name},

                        </p>


                        <p>

                            We have received your enquiry.

                            Our team will get in touch with you shortly.

                        </p>


                        <p>

                            Meanwhile, feel free to explore our website:

                            <a
                                class="website"
                                href="${WEBSITE_URL}"
                                target="_blank"
                            >

                                ${WEBSITE_URL}

                            </a>

                        </p>


                        <p class="note">

                            ⚠ Do not reply to this mail

                        </p>


                    </div>


                    <div class="footer">


                        <p>

                            ${COMPANY_NAME}

                        </p>


                        <p>

                            <a href="mailto:${COMPANY_EMAIL}">

                                ${COMPANY_EMAIL}

                            </a>

                        </p>


                    </div>


                </div>

            </body>

            </html>
        `;


        // ==========================================
        // ADMIN MAIL DATA
        // ==========================================

        const adminData = {

            sender: {
                name: COMPANY_NAME,
                email: COMPANY_EMAIL,
            },


            to: [
                {
                    email: COMPANY_EMAIL,
                },
            ],


            cc: [
                {
                    email: CC_EMAIL,
                },
            ],


            subject: `New Enquiry from ${name}`,

            htmlContent: adminMail,
        };


        // ==========================================
        // CUSTOMER MAIL DATA
        // ==========================================

        const customerData = {

            sender: {
                name: COMPANY_NAME,
                email: COMPANY_EMAIL,
            },


            to: [
                {
                    email: rawEmail.trim(),
                },
            ],


            subject: `Thank you for contacting ${COMPANY_NAME}`,

            htmlContent: thankMail,
        };


        // ==========================================
        // SEND BOTH EMAILS
        // ==========================================

        await Promise.all([
            sendMail(adminData),
            sendMail(customerData),
        ]);


        // ==========================================
        // SUCCESS
        // ==========================================

        return NextResponse.json(
            {
                status: true,
                message: "Email sent successfully.",
            },
            {
                status: 200,
            }
        );


    } catch (error) {

        console.error("Mail Error:", error);


        return NextResponse.json(
            {
                status: false,
                message: "Failed to send email.",
            },
            {
                status: 500,
            }
        );

    }

}