
let numbers = [];


function Insert() {
    const numInput = document.getElementById('num');
    const num = parseFloat(numInput.value);

    
    if (!isNaN(num) && num !== 0) {
        numbers.push(num);
        updateResults();
    } else {
        
        alert('You should fill out the given entry with a valid number.');
    }

    
    numInput.value = '';
}


function DeleteAll() {
    numbers = [];
    updateResults();
}


function updateResults() {
    const numbersSpan = document.getElementById('numbers');
    const sumTxtSpan = document.getElementById('sumTxt');
    const highestTxtSpan = document.getElementById('highestTxt');
    const lowestTxtSpan = document.getElementById('lowestTxt');

    if (numbers.length > 0) {
     
      const numbersContent = numbers.map(num => ' ' + num).join('<br>');
      numbersSpan.innerHTML = 'Numbers:<br>' + numbersContent + '<br>';

     
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      sumTxtSpan.innerHTML = 'Sum: <span style="color: blue; font-weight: bold;">' + sum + '</span><br>';

      
      const highest = Math.max(...numbers);
      const lowest = Math.min(...numbers);
      highestTxtSpan.innerHTML = 'Highest: <span style="color: green; font-weight: bold;">' + (isFinite(highest) ? highest : 'N/A') + '</span><br>';
      lowestTxtSpan.innerHTML = 'Lowest: <span style="color: red; font-weight: bold;">' + (isFinite(lowest) ? lowest : 'N/A') + '</span><br>';
  } else {
     
      numbersSpan.innerHTML = 'Numbers:<br>';
      sumTxtSpan.innerHTML = 'Sum: <br>';
      highestTxtSpan.innerHTML = 'Highest: <br>';
      lowestTxtSpan.innerHTML = 'Lowest: <br>';
  }
}