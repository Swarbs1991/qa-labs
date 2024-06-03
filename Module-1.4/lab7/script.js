function multi() {
    let table = "<table>";
    for (let row = 1; row < 11; row++) {
        table += "<tr>";

        for (let column = 1; column < 11; column++) {
            let res = "<td>" + row * column + "</td>";
            if (res % 2 !== 0) {
                if (res < 10)
                    table += '0';
                table += res;
            } else {
                table += "</div>";
            }
        }

        table += "</tr>"
    }
    table += "</table>"
    document.write(table);
}
