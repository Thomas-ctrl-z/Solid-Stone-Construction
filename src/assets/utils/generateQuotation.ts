
import { jsPDF } from "jspdf";

type quotationData = {
    clientName: string;
    companyName: string;
    phoneNumber: string;
    email: string;
    projectName: string;
    projectSize: string;
    siteAddress: string;
    startDate: string;
    endDate: string;
    projectDescription: string;
    companyAddress: string;
    selectedService: string;
}



export function generateQuotation(data: quotationData) {
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
    });

    // ===== REPLACE THESE PLACEHOLDERS =====
    const company = {
        name: data.companyName,
        address: data.companyAddress,
        phone: data.phoneNumber,
        email: data.email,
        // registration: "Company Registration No.",
    };

    const quote = {
        number: "QT-2026-001",
        date: new Date().toLocaleDateString("en-GB"),
        validUntil: "30 days from issue",
        currency: "JMD",
    };

    const client = {
        name: data.clientName,
        phone: data.phoneNumber,
        email: data.email,
        address: data.companyAddress,
    };

    const project = {
        name: data.projectName,
        location: data.siteAddress,
        description: data.projectDescription,
    };

    // Replace with actual form data when ready.
    const items = [
        {
            description: "Labour",
            details: "Labour for agreed construction activities",
            qty: 1,
            unit: "Job",
            rate: 150000,
        },
        {
            description: "Materials",
            details: "Construction materials as specified",
            qty: 1,
            unit: "Lot",
            rate: 250000,
        },
        {
            description: "Equipment & Transport",
            details: "Equipment hire and transportation",
            qty: 1,
            unit: "Lot",
            rate: 35000,
        },
    ];

    const subtotal = items.reduce(
        (sum, item) => sum + item.qty * item.rate,
        0
    );

    // Only apply tax if applicable to the business.
    const taxRate = 0;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const money = (amount: number) =>
        amount.toLocaleString("en-JM", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    // ===== PAGE SETTINGS =====
    const pageWidth = 210;
    const pageHeight = 297;
    const margin = 16;
    const right = pageWidth - margin;

    // Colours
    const navy: [number, number, number] = [29, 48, 70];
    const gold: [number, number, number] = [205, 151, 65];
    const grey: [number, number, number] = [105, 115, 125];
    const light: [number, number, number] = [241, 244, 247];

    // White background
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, pageWidth, pageHeight, "F");

    // ===== COMPANY HEADER =====
    doc.setFillColor(...navy);
    doc.rect(0, 0, pageWidth, 43, "F");

    doc.setFillColor(...gold);
    doc.rect(0, 43, pageWidth, 1.5, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(17);
    doc.text(company.name, margin, 15);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.text(company.address, margin, 23);
    doc.text(`${company.phone}  |  ${company.email}`, margin, 29);
    // doc.text(company.registration, margin, 35);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(21);
    doc.text("QUOTATION", right, 17, { align: "right" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(quote.number, right, 25, { align: "right" });

    // ===== CLIENT DETAILS =====
    let y = 54;

    doc.setTextColor(...navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("PREPARED FOR", margin, y);

    doc.text("QUOTATION DETAILS", 125, y);

    doc.setDrawColor(...gold);
    doc.setLineWidth(0.5);
    doc.line(margin, y + 3, 105, y + 3);
    doc.line(125, y + 3, right, y + 3);

    y += 11;

    doc.setTextColor(40, 45, 50);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(client.name, margin, y);

    doc.setFont("helvetica", "normal");
    doc.text(`Phone: ${client.phone}`, margin, y + 6);
    doc.text(`Email: ${client.email}`, margin, y + 12);

    doc.setFont("helvetica", "bold");
    doc.text("Issue Date:", 125, y);
    doc.text("Valid For:", 125, y + 6);

    doc.setFont("helvetica", "normal");
    doc.text(quote.date, right, y, { align: "right" });
    doc.text(quote.validUntil, right, y + 6, { align: "right" });

    // ===== PROJECT INFORMATION =====
    y = 91;

    doc.setFillColor(...light);
    doc.roundedRect(margin, y, pageWidth - margin * 2, 27, 2, 2, "F");

    doc.setTextColor(...navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("PROJECT INFORMATION", margin + 4, y + 7);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(50, 55, 60);
    doc.setFontSize(8.5);

    doc.text(`Project: ${project.name}`, margin + 4, y + 14);
    doc.text(
        `Location: ${project.location}`,
        margin + 4,
        y + 21,
        { maxWidth: 170 }
    );

    // ===== SCOPE OF WORK =====
    y = 128;

    doc.setTextColor(...navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("SCOPE OF WORK", margin, y);

    doc.setDrawColor(...gold);
    doc.line(margin, y + 3, right, y + 3);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(55, 60, 65);
    doc.setFontSize(8.5);

    const descriptionLines = doc.splitTextToSize(
        project.description,
        pageWidth - margin * 2
    );

    doc.text(descriptionLines, margin, y + 9);

    // ===== ITEMIZED COSTS =====
    y += 18 + descriptionLines.length * 4;

    const tableX = margin;
    const tableW = pageWidth - margin * 2;
    const rowH = 10;

    // Column positions
    const descX = tableX + 3;
    const qtyX = 139;
    const rateX = 166;
    const amountX = right - 3;

    // Table heading
    doc.setFillColor(...navy);
    doc.rect(tableX, y, tableW, 10, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);

    doc.text("DESCRIPTION", descX, y + 6.5);
    doc.text("QTY", qtyX, y + 6.5, { align: "center" });
    doc.text("RATE", rateX, y + 6.5, { align: "right" });
    doc.text("AMOUNT", amountX, y + 6.5, { align: "right" });

    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);

    items.forEach((item, index) => {
        doc.setFillColor(
            ...(index % 2 === 0 ? [248, 249, 250] as [number, number, number] : [255, 255, 255] as [number, number, number])
        );
        doc.rect(tableX, y, tableW, rowH, "F");

        doc.setTextColor(45, 50, 55);
        doc.text(item.description, descX, y + 4.2, {
            maxWidth: 78,
        });

        doc.setTextColor(...grey);
        doc.setFontSize(7);
        doc.text(item.details, descX, y + 8, {
            maxWidth: 82,
        });

        doc.setFontSize(8.5);
        doc.setTextColor(45, 50, 55);
        doc.text(`${item.qty} ${item.unit}`, qtyX, y + 6, {
            align: "center",
        });

        doc.text(money(item.rate), rateX, y + 6, {
            align: "right",
        });

        doc.setFont("helvetica", "bold");
        doc.text(money(item.qty * item.rate), amountX, y + 6, {
            align: "right",
        });

        doc.setFont("helvetica", "normal");
        y += rowH;
    });

    // ===== TOTALS =====
    y += 7;

    const labelX = 135;
    const valueX = right - 3;

    doc.setTextColor(...grey);
    doc.setFontSize(9);
    doc.text("Subtotal", labelX, y);
    doc.text(money(subtotal), valueX, y, { align: "right" });

    y += 7;
    doc.text(`Tax (${(taxRate * 100).toFixed(0)}%)`, labelX, y);
    doc.text(money(tax), valueX, y, { align: "right" });

    y += 4;
    doc.setFillColor(...gold);
    doc.rect(labelX, y, right - labelX, 0.6, "F");

    y += 8;
    doc.setFillColor(...navy);
    doc.roundedRect(labelX - 3, y - 5, right - labelX + 3, 13, 1, 1, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`TOTAL (${quote.currency})`, labelX, y + 3);
    doc.text(money(total), valueX, y + 3, { align: "right" });

    // ===== PAYMENT TERMS =====
    y += 20;

    doc.setTextColor(...navy);
    doc.setFontSize(9);
    doc.text("PAYMENT & CONDITIONS", margin, y);

    doc.setDrawColor(...gold);
    doc.line(margin, y + 3, right, y + 3);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(70, 75, 80);

    const terms = [
        "1. This quotation is valid for the period stated above.",
        "2. Work and payment milestones are subject to written agreement.",
        "3. Variations or additional work require written approval and may incur extra costs.",
        "4. Start date and completion schedule will be agreed before work begins.",
    ];

    terms.forEach((term, index) => {
        doc.text(term, margin, y + 9 + index * 4);
    });

    // ===== ACCEPTANCE =====
    y += 30;

    doc.setTextColor(...navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("CLIENT ACCEPTANCE", margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(...grey);
    doc.text(
        "Signing below confirms acceptance of the quoted scope, price and agreed terms.",
        margin,
        y + 5
    );

    doc.setDrawColor(160, 165, 170);
    doc.line(margin, y + 19, 90, y + 19);
    doc.line(112, y + 19, right, y + 19);

    doc.setFontSize(7);
    doc.text("Client signature / name", margin, y + 23);
    doc.text("Date", 112, y + 23);

    // ===== FOOTER =====
    doc.setFillColor(...navy);
    doc.rect(0, pageHeight - 10, pageWidth, 10, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(7);
    doc.text(
        `${company.name} | Thank you for considering our services.`,
        pageWidth / 2,
        pageHeight - 4,
        { align: "center" }
    );

    // Download PDF
    doc.save(`${quote.number}.pdf`);

    return doc;
}
