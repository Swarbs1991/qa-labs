function multiplicationTable(maxRows, maxColumns) {
    
    document.write("<table border='1'>");

    for (let i = 1; i <= maxRows; i++) {
        document.write("<tr>");

        for (let j = 1; j <= maxColumns; j++) {

            let result = i * j;
            
            document.write("<td>" + result + "</td>");
        }

        document.write("</tr>");
    }

    document.write("</table>");
}

multiplicationTable(5, 5);

let tableResult = multiplicationTable(10, 8);
document.write("<br><br>Returned Table:<br>");
document.write(tableResult);
