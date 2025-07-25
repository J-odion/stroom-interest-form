export const buildFormSubmissionEmail = (recipientName: string, data: any) => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #1e293b;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 24px;
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .logo {
          display: block;
          margin: 0 auto 20px auto;
          max-height: 50px;
        }
        h2 {
          color: #22c55e;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 16px;
        }
        td {
          padding: 8px 0;
          border-bottom: 1px solid #eee;
        }
        .footer {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #eee;
          font-size: 0.9em;
          color: #666;
        }
        .contact {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
          font-size: 0.95em;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .contact-item span {
          color: #1e293b;
        }
        .partners {
          margin-top: 32px;
          text-align: center;
        }
        .partners img {
          max-height: 40px;
          margin: 0 10px;
          vertical-align: middle;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="https://credit.kairoshof.com/kairos-logo.png" alt="Kairos Hof Logo" class="logo" />
        <h2>Hi ${recipientName},</h2>
        <p>Thank you for your submission. Here are the details:</p>
        <table>
          <tbody>
            <tr><td><strong>Full Name:</strong></td><td>${data.fullName}</td></tr>
            <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
            <tr><td><strong>Phone Number:</strong></td><td>${data.phoneNumber}</td></tr>
            <tr><td><strong>Residence State:</strong></td><td>${data.residenceState}</td></tr>
            <tr><td><strong>System Capacity:</strong></td><td>${data.systemCapacity}</td></tr>
            <tr><td><strong>System Price:</strong></td><td>${data.systemPrice}</td></tr>
            <tr><td><strong>System Price:</strong></td><td>${data.provider}</td></tr>
            <tr><td><strong>Occupation:</strong></td><td>${data.occupation}</td></tr>
            <tr><td><strong>Other Sector:</strong></td><td>${data.otherSector || 'N/A'}</td></tr>
            <tr><td><strong>Workplace Sector:</strong></td><td>${data.workplaceSector}</td></tr>
            <tr><td><strong>Place of Employment:</strong></td><td>${data.placeOfEmployment}</td></tr>
            <tr><td><strong>Salary Range:</strong></td><td>${data.salaryRange}</td></tr>
            <tr><td><strong>Home Address:</strong></td><td>${data.homeAddress}</td></tr>
            <tr><td><strong>Payment Plan:</strong></td><td>${data.paymentPlan}</td></tr>
          </tbody>
        </table>

        <div class="footer">
          <p>Have questions? Our team is here to help!</p>
          <div class="contact">
            <div class="contact-item">
              <img src="https://img.icons8.com/ios-filled/20/22c55e/phone.png" alt="Phone" />
              <span>+234 8170001441</span>
            </div>
            <div class="contact-item">
              <img src="https://img.icons8.com/ios-filled/20/22c55e/new-post.png" alt="Email" />
              <span>hello@kairoshofenergy.com</span>
            </div>
          </div>
          <div class="partners">
            <p style="margin-bottom: 10px; font-weight: bold;">In partnership with:</p>
            <img src="https://credit.kairoshof.com/creditcorp.png" alt="CreditCorp" />
            <img src="https://credit.kairoshof.com/Fidelity_Bank_Plc_Main_Logo.svg" alt="Fidelity Bank" />
          </div>
        </div>
      </div>
    </body>
  </html>
`;
