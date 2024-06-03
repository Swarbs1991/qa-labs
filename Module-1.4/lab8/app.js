const url = 'https://txMike2.glitch.me/customers';
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                display(data);
            }).catch(function (error) {
                alert(error);
            });
        function display(data) {
            let count = 1;
            let tbl = '<table border=1>';
            data.forEach(x => {
                tbl += `<tr>
                                <td>${count++}</td>
                                <td>${x.CustomerID}</td>
                                <td>${x.ContactName}</td>
                                <td>${x.City}</td>
                            </tr>`;
            });
            tbl += '</table>';
            document.getElementById('tbl').innerHTML = tbl;
        }