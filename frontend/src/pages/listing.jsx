import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import wheat from "../assets/wheat.jpeg"


function Listing() {
  // State for dynamic inputs
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  // Function to generate PDF
  const downloadPDF = () => {
    const input = document.getElementById('agreement'); // Get the section you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // Set image width
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('wheat_contract_agreement.pdf'); // The name of the downloaded PDF file
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 text-[#64d2af]">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
        WHEAT CONTRACT FARMING AGREEMENT
      </h1>

      <div className="flex flex-col md:flex-row items-stretch" id="agreement"> {/* Added ID for PDF generation */}
        <div className="w-full md:w-1/2 flex flex-col">
          <img
            src={wheat}
            alt="A vast wheat field, ready for harvest"
            className="w-full h-60 md:h-auto mb-4 rounded-lg shadow-lg object-cover"
          />
          <div className="bg-[#f9f9f9] p-4 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold">Dealers Contact Details</h2>
            <article className="text-base text-[#4a4a4a]">
              <p>Name: Satya Pal Singh</p>
              <p>Phone Number: +917894561237</p>
              <p>Email: xyz@gmail.com</p>
              <p>Address: Sabour, Bhagalpur-813210, Bihar</p>
            </article>
          </div>
        </div>

        <div className="md:ml-6 w-full mt-6 md:mt-0">
          {/* Agreement Sections */}
          {[
            {
              title: "1. SCOPE OF AGREEMENT",
              content: (
                <>
                  The Farmer agrees to cultivate and deliver X[weight] tons of wheat on Y[location]
                  {/* <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Quantity"
                    className="border border-gray-300 p-1 mx-1"
                  /> */}
                   
                  
                  {/* <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Farm Location"
                    className="border border-gray-300 p-1 mx-1"
                  />. */}
                  . This must meet the quality standards and specifications outlined in the agreement. The Buyer agrees to purchase the wheat from the Farmer under the terms set forth.
                </>
              ),
            },
            {
              title: "2. QUALITY SPECIFICATIONS",
              content: (
                <>
                  The wheat to be delivered must meet the following specifications:
                  <ul className="list-disc list-inside mt-2">
                    <li><b>Moisture Content:</b> No more than [X]%</li>
                    <li><b>Protein Level:</b> At least [Y]%</li>
                    <li><b>Grain Size:</b> [Specific size or standard]</li>
                  </ul>
                  The wheat must pass a quality inspection at the time of delivery. Other quality requirements must be adhered to as agreed.
                </>
              ),
            },
            {
              title: "3. PROVISION OF INPUTS",
              content: (
                <>
                  The Buyer agrees to provide the following inputs to the Farmer:
                  <ul className="list-disc list-inside mt-2">
                    <li>Seeds (variety and quantity)</li>
                    <li>Fertilizers and pesticides</li>
                  </ul>
                  The cost of these inputs will either:
                  <ul className="list-disc list-inside mt-2">
                    <li>Be deducted from the final payment to the Farmer, or</li>
                    <li>Be provided at no additional cost to the Farmer as part of the agreement.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "4. DELIVERY SCHEDULE",
              content: (
                <>
                  The Farmer agrees to deliver the wheat to the Buyer at [Delivery Location] no later than [Delivery Date(s)]. The delivery schedule is as follows:
                  <ul className="list-disc list-inside mt-2">
                    <li><span className="font-semibold">First Delivery:</span> [Date and Quantity]</li>
                    <li><span className="font-semibold">Final Delivery:</span> [Date and Quantity]</li>
                  </ul>
                </>
              ),
            },
            {
              title: "5. PRICE AND PAYMENT TERMS",
              content: (
                <>
                  The Buyer agrees to purchase the wheat at a rate of [Agreed Price] per ton, subject to the wheat meeting the agreed-upon quality standards. Payment will be made:
                  <ul className="list-disc list-inside mt-2">
                    <li>Upon delivery and inspection, or</li>
                    <li>Within [X] days of delivery.</li>
                  </ul>
                  Any deductions for inputs will be clearly detailed in the payment breakdown provided to the Farmer.
                </>
              ),
            },
            {
              title: "6. INSPECTION AND QUALITY CONTROL",
              content: (
                <>
                  Upon delivery, the Buyer will inspect the wheat to ensure it meets the required quality specifications. If the wheat does not meet these standards, the Buyer reserves the right to:
                  <ul className="list-disc list-inside mt-2">
                    <li>Reject the wheat and return it to the Farmer, or</li>
                    <li>Renegotiate the price based on the quality delivered.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "7. RISK AND TITLE",
              content: (
                <>
                  Risk of loss or damage to the wheat remains with the Farmer until it is delivered and accepted by the Buyer. Once the wheat is inspected and accepted, the title and risk transfer to the Buyer.
                </>
              ),
            },
            {
              title: "8. FARMER'S OBLIGATIONS",
              content: (
                <ul className="list-disc list-inside mt-2">
                  <li>The Farmer agrees to follow the cultivation practices and guidelines provided by the Buyer.</li>
                  <li>The Farmer must notify the Buyer immediately in case of any unforeseen circumstances (e.g., natural disasters) that could affect production or delivery.</li>
                  <li>The Farmer is responsible for maintaining the crop's health and quality until the point of delivery.</li>
                </ul>
              ),
            },
            {
              title: "9. BUYER'S OBLIGATIONS",
              content: (
                <ul className="list-disc list-inside mt-2">
                  <li>The Buyer agrees to provide the Farmer with support as outlined under "Provision of Inputs."</li>
                  <li>The Buyer agrees to inspect the wheat upon delivery and process payments promptly.</li>
                  <li>The Buyer may conduct regular farm visits to monitor crop progress.</li>
                </ul>
              ),
            },
            {
              title: "10. DISPUTE RESOLUTION",
              content: (
                <>
                  In the event of a dispute arising out of this Agreement, both parties agree to attempt resolution through negotiation. If the dispute cannot be resolved, the matter will be referred to [Mediation/Arbitration].
                </>
              ),
            },
            {
              title: "11. TERMINATION",
              content: (
                <>
                  Either party may terminate this Agreement if the other party breaches any material obligation under this Agreement, provided that written notice is given, and the breach is not cured within [X] days.
                </>
              ),
            },
            {
              title: "12. MISCELLANEOUS",
              content: (
                <ul className="list-disc list-inside mt-2">
                  <li><b>Governing Law:</b> This Agreement shall be governed by the laws of [Jurisdiction].</li>
                  <li><b>Entire Agreement:</b> This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements or understandings.</li>
                  <li><b>Amendments:</b> Any changes to this Agreement must be made in writing and signed by both parties.</li>
                </ul>
              ),
            },
          ].map((section, index) => (
            <section className="mb-6" key={index}>
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-base text-[#7d7d7d]">{section.content}</p>
            </section>
          ))}

          <div className="flex flex-wrap justify-between mt-6">
            <button className="bg-[#64d2af] text-white px-4 py-2 rounded-lg hover:bg-[#58b89b] transition">APPLY</button>
            <button className="bg-[#64d2af] text-white px-4 py-2 rounded-lg hover:bg-[#58b89b] transition">CHAT</button>
            <button 
              onClick={downloadPDF} 
              className="bg-[#64d2af] text-white px-4 py-2 rounded-lg hover:bg-[#58b89b] transition">
              DOWNLOAD AS PDF
            </button>
            <button className="bg-[#64d2af] text-white px-4 py-2 rounded-lg hover:bg-[#58b89b] transition">CHANGES IN CONTRACT</button>
            {/* Other buttons like APPLY, CHAT, REQUEST ADDITION OF CLAUSE could be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
