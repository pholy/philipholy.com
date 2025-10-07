//Google Apps Script to handle form submissions
//https://script.google.com/
function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

    const fields = ["name", "email", "company", "message"];

    const row = [
        new Date(),
        ...fields.map(field => e.parameter[field] || "")
    ];

    sheet.appendRow(row);

    return ContentService
        .createTextOutput()
        .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
    Logger.log("GET not implemented: " + JSON.stringify(e));
    return ContentService
        .createTextOutput("GET not supported")
        .setMimeType(ContentService.MimeType.TEXT);
}
