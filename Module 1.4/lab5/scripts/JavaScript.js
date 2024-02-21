//alert('Hello World!')

function save() {
    let text = "Would you like to save your work?";
    while (true) {
        if (confirm(text)) {
            text = "Saved!";
            break;
        } else {
            if (confirm("Are you sure?")) {
                text = "Save cancelled";
                break;
            } else {
                text = "Would you like to save your work?";
            }
        }
    }
    document.getElementById("confirmation").innerHTML = text;
}