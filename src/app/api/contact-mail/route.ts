import { NextRequest, NextResponse } from "next/server";

const MAIL_API = process.env.MAIL_API;
const MAIL_API_KEY = process.env.MAIL_API_KEY;

const COMPANY_NAME = "Yulanto Web Creations";
// const COMPANY_EMAIL = "info@yulanto.com";
const COMPANY_EMAIL = "yulantodevelopers@gmail.com";
const CC_EMAIL = "yulantodevelopers@gmail.com";
const WEBSITE_URL = "https://yulanto-web.vercel.app";
const COMPANY_PHONE = "+91 99621 57250";
const COMPANY_WHATSAPP = "+91 99621 57250";
const COMPANY_ADDRESS =
    "Yulanto Web Creations Pvt Ltd Web Design & Development Company in ChennaiF3, #4/608, First Floor, V.O.C Street,Kottivakkam, OMR, Chennai - 600 041, India.";
const COMPANY_LOGO = `${WEBSITE_URL}/assets/img/logo/L2.png`

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

        if (!rawName?.trim() || !rawPhone?.trim() || !rawEmail?.trim()) {
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
        const lookingFor = escapeHtml(rawLookingFor?.trim() || "Not specified");
        const message = escapeHtml(rawMessage?.trim() || "No message provided");

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
      <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 20px 0;
        }

        .container {
            max-width: 650px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        /* Header Styling */
        .header {
            background: linear-gradient(135deg,
                    #53ae7d 0%,
                    #2f8060 45%,
                    #053456 100%);
            padding: 32px 20px;
            text-align: center;
            color: #ffffff;
        }

        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.3px;
        }

        .header p {
            margin: 8px 0 0;
            font-size: 15px;
            font-weight: 500;
            opacity: 0.95;
        }

        /* Content Styling */
        .content {
            padding: 32px 28px 0px;
        }

        .section-title {
            font-size: 18px;
            font-weight: 700;
            color: #53ae7d;
            margin-top: 24px;
            margin-bottom: 14px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-title:first-child {
            margin-top: 0;
        }

        /* Table Layout for Key-Value Data */
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
            border-radius: 8px;
            overflow: hidden;
        }

        .info-table tr {
            border-bottom: 1px solid #f0f2f5;
        }

        .info-table tr:last-child {
            border-bottom: none;
        }

        .label-cell {
            background-color: #f8fafc;
            width: 35%;
            padding: 12px 16px;
            font-weight: 700;
            color: #2d3748;
            font-size: 14px;
            vertical-align: top;
        }

        .value-cell {
            padding: 12px 16px;
            color: #4a5568;
            font-size: 14px;
            line-height: 1.5;
            vertical-align: top;
        }

        .value-cell a {
            color: #053456;
            text-decoration: none;
            font-weight: 600;
        }

        /* Message Box */
        .message-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 16px;
            font-size: 14px;
            color: #4a5568;
            white-space: pre-line;
            line-height: 1.6;
        }

        /* Footer & Note */
        .note {
            color: #d9534f;
            font-weight: 600;
            font-size: 13px;
            margin-top: 28px;
            padding: 10px 14px;
            background: #fff5f5;
            border-radius: 6px;
            text-align: center;
            border: 1px solid #fed7d7;
        }

        .footer {
            background: #f8fafc;
            padding: 18px;
            text-align: center;
            font-size: 13px;
            color: #718096;
            border-top: 1px solid #edf2f7;
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Banner Header -->
        <div class="header">
            <h1>🎉 New Lead Received</h1>
            <p>${lookingFor}</p>
        </div>

        <div class="content">
            <!-- Client Information Section -->
            <div class="section-title">📋 Client Information</div>

            <table class="info-table">
                <tr>
                    <td class="label-cell">Name</td>
                    <td class="value-cell">${name}</td>
                </tr>
                <tr>
                    <td class="label-cell">Email</td>
                    <td class="value-cell"><a href="mailto:${customerEmail}">${customerEmail}</a></td>
                </tr>
                <tr>
                    <td class="label-cell">Phone</td>
                    <td class="value-cell"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr>
                    <td class="label-cell">Date & Time</td>
                    <td class="value-cell">${datetime}</td>
                </tr>
            </table>

            <!-- Enquiry Details Section -->
            <div class="section-title">🌐 Enquiry Details</div>

            <table class="info-table">
                <tr>
                    <td class="label-cell">Looking For</td>
                    <td class="value-cell"><strong>${lookingFor}</strong></td>
                </tr>
            </table>

            <!-- Message Details Section -->
            <div class="section-title">💬 Message Details</div>
            <div class="message-box">${message}</div>

            <div class="note">⚠ Note: Do not reply directly to this automated notification.</div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <strong>${COMPANY_NAME}</strong> Internal Notification System
        </div>
    </div>
</body>

</html>
    `;

        // ==========================================
        // CUSTOMER THANK YOU EMAIL
        // ==========================================

        const thankMail = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        /* =========================================
           GLOBAL
           ========================================= */

        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 650px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 12px 35px rgba(5, 52, 86, 0.10);
        }


        /* =========================================
           HEADER
           ========================================= */

        .header {
            background:
                linear-gradient(135deg,
                    #53ae7d 0%,
                    #2f8060 45%,
                    #053456 100%);

            padding: 42px 25px;
            text-align: center;
            color: #ffffff;
            position: relative;
        }

        .header h1 {
            margin: 0;
            font-size: 27px;
            font-weight: 800;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .header-subtitle {
            margin: 9px 0 0;
            font-size: 12px;
            color: rgba(255, 255, 255, 0.82);
            letter-spacing: 1.5px;
        }


        /* =========================================
           CONTENT
           ========================================= */

        .content {
            padding: 38px 32px 0px;
        }

        .greeting {
            font-size: 20px;
            font-weight: 700;
            color: #053456;
            margin-top: 0;
            margin-bottom: 12px;
        }

        .body-text {
            font-size: 15px;
            color: #4a5568;
            line-height: 1.7;
            margin: 12px 0;
        }

        .highlight-text {
            color: #53ae7d;
            font-weight: 700;
        }


        /* =========================================
           ELITE CORE SPECIALIZATIONS
           ========================================= */

        .specializations {
            margin: 32px 0;

            padding: 10px;

            background:
                linear-gradient(145deg,
                    #f9fcfa 0%,
                    #f3f8f5 55%,
                    #edf5f1 100%);

            border: 1px solid #dce9e3;

            border-radius: 17px;

            position: relative;

            overflow: hidden;
        }


        /* Decorative circles */

        .specializations::before {
            content: "";

            position: absolute;

            width: 145px;
            height: 145px;

            right: -75px;
            top: -75px;

            background: rgba(83, 174, 125, 0.10);

            border-radius: 50%;
        }

        .specializations::after {
            content: "";

            position: absolute;

            width: 110px;
            height: 110px;

            left: -60px;
            bottom: -60px;

            background: rgba(5, 52, 86, 0.045);

            border-radius: 50%;
        }


        /* Section heading */

        .specializations-header {
            position: relative;
            z-index: 2;

            margin-bottom: 23px;
        }

        .specializations-label {
            display: inline-block;

            color: #53ae7d;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 2px;

            text-transform: uppercase;

            margin-bottom: 7px;
        }

        .specializations-title {
            margin: 0;

            color: #053456;

            font-size: 20px;

            line-height: 1.3;

            font-weight: 800;

            letter-spacing: -0.3px;
        }

        .specializations-description {
            margin: 8px 0 0;

            color: #718096;

            font-size: 12px;

            line-height: 1.6;

            max-width: 480px;
        }


        /* =========================================
           SPECIALIZATION GRID
           ========================================= */

        .specialization-grid {
            position: relative;

            z-index: 2;

            width: calc(100% + 10px);

            margin: -5px;

            border-collapse: separate;

            border-spacing: 10px;
        }

        .specialization-cell {
            width: 50%;

            vertical-align: top;
        }


        /* =========================================
           SPECIALIZATION CARD
           ========================================= */

        .specialization-card {
            background: #ffffff;

            border: 1px solid #e0ebe5;

            border-radius: 14px;

            padding: 18px 17px;

            min-height: 70px;

            box-shadow:
                0 5px 15px rgba(5, 52, 86, 0.035);
        }


        /* Number */

        .specialization-number {
            color: #53ae7d;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 1.5px;

            margin-bottom: 8px;
        }


        /* Accent line */

        .specialization-line {
            width: 30px;

            height: 2px;

            background: #53ae7d;

            margin-bottom: 10px;
        }


        /* Card title */

        .specialization-card-title {
            margin: 0 0 7px;

            color: #053456;

            font-size: 12px;

            font-weight: 800;

            line-height: 1.4;

            text-transform: uppercase;

            letter-spacing: 0.45px;
        }


        /* Card description */

        .specialization-card-text {
            margin: 0;

            color: #667085;

            font-size: 11px;

            line-height: 1.55;
        }


        /* =========================================
           SPECIALIZATION FOOTER
           ========================================= */

        .specializations-footer {
            position: relative;

            z-index: 2;

            margin-top: 20px;

            padding-top: 15px;

            border-top: 1px solid #dce9e3;

            text-align: center;
        }

        .specializations-footer-text {
            margin: 0;

            color: #053456;

            font-size: 11px;

            font-weight: 700;

            letter-spacing: 0.1px;
        }

        .specializations-footer-text span {
            color: #53ae7d;
        }


        /* =========================================
           CONTACT CARD
           ========================================= */

        .contact-card {
            background: #ffffff;

            border-radius: 14px;

            padding: 25px;

            margin: 30px 10px;

            border: 1px solid #e2e8f0;

            box-shadow:
                0 5px 18px rgba(0, 0, 0, 0.035);

            position: relative;
        }

        .contact-title {
            font-size: 16px;

            font-weight: 800;

            color: #053456;

            margin-top: 0;

            margin-bottom: 16px;

            border-bottom: 2px solid #f0f4f2;

            padding-bottom: 9px;
        }
.loc-cls {
            display: flex;
            align-items: first baseline;
        }
        .contact-row {
            width: 100%;

            border-collapse: collapse;

            margin-bottom: 14px;
        }

        .contact-icon-bg {
            width: 38px;
            height: 38px;

            background: #f0f7f3;

            border-radius: 10px;

            text-align: center;

            vertical-align: middle;
        }

        .contact-icon-bg img {
            width: 18px;
            height: 18px;

            vertical-align: middle;
        }

        .contact-details {
            padding-left: 14px;

            font-size: 14px;

            color: #4a5568;

            line-height: 1.5;
        }

        .contact-details strong {
            color: #053456;

            font-weight: 700;
        }

        .contact-details a {
            color: #53ae7d;

            text-decoration: none;

            font-weight: 700;
        }


        /* =========================================
           WEBSITE BUTTON
           ========================================= */

        .btn-container {
            text-align: center;

            margin-top: 15px;

            margin-bottom: 12px;
        }

        .btn-website {
            display: inline-block;

            background:
                linear-gradient(135deg,
                    #53ae7d 0%,
                    #43966a 100%);

            color: #ffffff !important;

            padding: 14px 32px;

            border-radius: 9px;

            text-decoration: none;

            font-weight: 700;

            font-size: 15px;

            box-shadow:
                0 5px 14px rgba(83, 174, 125, 0.30);
        }


        /* =========================================
           NOTE
           ========================================= */

        .note {
            color: #a0aec0;

            font-size: 15px;

            text-align: center;

            margin-top: 35px;
            margin-bottom: 15px;

            border-top: 1px solid #edf2f7;

            padding-top: 18px;
        }
        .text-red {
            color: #d64545;

            font-weight: 700;
        }


        /* =========================================
           FOOTER
           ========================================= */

        .footer {
            background: #f5f5f5;
            padding: 42px 25px;
            text-align: center;

            position: relative;
        }

        .footer img{
            height:70px;
        }

        .footer-title {
            font-weight: 700;

            font-size: 16px;

            margin-bottom: 6px;

            color: #ffffff;

            letter-spacing: 0.5px;
        }

        .footer p {
            margin: 4px 0;

            color: #a0aec0;
        }


        /* =========================================
           MOBILE
           ========================================= */

        @media only screen and (max-width: 600px) {

            .container {
                width: 94%;

                margin: 15px auto;

                border-radius: 14px;
            }

            .content {
                padding: 28px 20px;
            }

            .header {
                padding: 35px 20px;
            }

            .header h1 {
                font-size: 23px;
            }

            .specializations {
                padding: 20px 15px;
            }

            .specialization-grid {
                border-spacing: 7px;
            }

            .specialization-card {
                padding: 15px 12px;

                min-height: 110px;
            }

            .specialization-card-title {
                font-size: 11px;
            }

            .specialization-card-text {
                font-size: 10px;
            }

            .contact-card {
                padding: 20px 17px;
            }
        }
    </style>
</head>


<body>

    <div class="container">


        <!-- =========================================
             HEADER
             ========================================= -->

        <div class="header">

            <h3>
                Thank you for reaching out to
                <strong>${COMPANY_NAME}</strong>! 🎉
            </h3>

        </div>



        <!-- =========================================
             CONTENT
             ========================================= -->

        <div class="content">


            <!-- Greeting -->

            <p class="greeting">
                Dear ${name},
            </p>


            <!-- Introduction -->

           <!-- <p class="body-text">

                Thank you for reaching out to
                <strong>${COMPANY_NAME}</strong>! 🎉

            </p> -->


            <p class="body-text">

                We’ve received your enquiry regarding
                <span class="highlight-text">
                    "${lookingFor}"
                </span>.

                Our team is excited to learn more about your project
                and help bring your vision to life.

            </p>



            <!-- =========================================
                 ELITE CORE SPECIALIZATIONS
                 ========================================= -->





            <!-- =====================================
                     SPECIALIZATION GRID
                     ===================================== -->

            <!-- =========================================
     ELITE CORE SPECIALIZATIONS
     ========================================= -->



        <!-- =========================================
                 CONTACT SECTION
                 ========================================= -->

        <div class="contact-card">


            <div class="contact-title">
                Get in Touch Directly
            </div>



            <!-- PHONE -->

            <table class="contact-row">

                <tr>

                    <td class="contact-icon-bg">

                        <img src="https://cdn-icons-png.flaticon.com/512/126/126509.png" alt="Phone" />

                    </td>


                    <td class="contact-details">

                        <strong>
                            Phone:
                        </strong>

                        <a href="tel:${COMPANY_PHONE.replace(/\s+/g, '')}">
                            ${COMPANY_PHONE}
                        </a>

                    </td>

                </tr>

            </table>



            <!-- WHATSAPP -->

            <table class="contact-row">

                <tr>

                    <td class="contact-icon-bg">

                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />

                    </td>


                    <td class="contact-details">

                        <strong>
                            WhatsApp:
                        </strong>

                        <a href="https://wa.me/${COMPANY_WHATSAPP.replace(/[^0-9]/g, '')}" target="_blank">
                            ${COMPANY_WHATSAPP}
                        </a>

                    </td>

                </tr>

            </table>



            <!-- EMAIL -->

            <table class="contact-row">

                <tr>

                    <td class="contact-icon-bg">

                        <img src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="Email" />

                    </td>


                    <td class="contact-details">

                        <strong>
                            Email:
                        </strong>

                        <a href="mailto:${COMPANY_EMAIL}">
                            ${COMPANY_EMAIL}
                        </a>

                    </td>

                </tr>

            </table>



            <!-- ADDRESS -->

            <table class="contact-row" style="margin-bottom: 0;">

                <tr class='loc-cls'>

                    <td class="contact-icon-bg" style="vertical-align: top;">

                        <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Location"
                            style="margin-top: 3px;" />

                    </td>


                    <td class="contact-details">

                        <strong>
                            Address:
                        </strong>

                       Yulanto Web Creations Pvt Ltd <br/>
Web Design & Development Company in Chennai <br/>
F3, #4/608, First Floor, V.O.C Street, <br/> Kottivakkam,
Chennai - 600 041, India.

                    </td>

                </tr>

            </table>


        </div>



        <!-- =========================================
                 WEBSITE BUTTON
                 ========================================= -->

        <div class="btn-container">

            <a href="${WEBSITE_URL}" target="_blank" class="btn-website">
                Explore Our Website
            </a>

        </div>



        <!-- =========================================
                 NOTE
                 ========================================= -->

        <div class="note">

            ⚠

            <span class="text-red">
                Do not reply to this mail.
            </span>

        </div>
        <div class="footer">

            <img src="${COMPANY_LOGO}" alt='yulanto-logo'  </div>


        </div>

    </div>



    <!-- =========================================
             FOOTER
             ========================================= -->



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
            subject: `Thank You for Your Enquiry  – ${COMPANY_NAME} `,
            htmlContent: thankMail,
        };

        // ==========================================
        // SEND BOTH EMAILS
        // ==========================================

        await Promise.all([sendMail(adminData), sendMail(customerData)]);

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