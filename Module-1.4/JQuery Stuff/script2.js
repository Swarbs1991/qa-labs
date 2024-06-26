
    async function getCustomers() {
        //const response = await $.get("https://txmike2.glitch.me/customers");
        //display(response);
        //const response = await axios.get("https://txmike2.glitch.me/customers");
        //display(response.data);
        const response = await fetch("https://txmike2.glitch.me/customers");
        let data = await response.json();
        display(data);
    }

    function display(customersData) {
        customersData.forEach(cus => {
            let row = $(`<tr><td>${cus.CustomerID}</td><td>${cus.ContactName}</td><td>${cus.City}</td></tr>`);
            row.appendTo($("#customersTable"));
            row.cusID = cus.CustomerID;
            row.click(function () {
                alert(row.cusID);
                $.get("http://txMike2.glitch.me/orders/" + row.cusID,
                    function (data) {
                        displayOrders(data);
                    }
                );
            })
        });
    }
