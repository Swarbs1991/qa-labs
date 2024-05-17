    function getNames() {
        let divNames = document.getElementById('names');
        var names = ['Bobby', 'Joey', 'Mindy'];
        var ages = [21, 18, 20];
        
        var result = '';

        for (var i = 0; i < names.length; i++) {
            result += names[i] + " is " + ages[i] + " years old <br />";
        }

        divNames.innerHTML = result;
    }

    function highlightBigNumber() {
        let numbers = [5, 10, 15, 20, 25, 50, 100];
        let olNumbers = document.querySelectorAll('#numbersList');

        for (var i = 0; i < numbers.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = numbers[i];
            olNumbers[0].appendChild(li);
            if (parseInt(olNumbers[i].innerText) > 10) {
                li.classList.add('highlight');
            } 
        };

    }

    document.addEventListener("DOMContentLoaded", function () {
        getNames();
        highlightBigNumber();
    });