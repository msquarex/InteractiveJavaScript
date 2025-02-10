document.getElementById('even-numbers-button').onclick = displayEvenNumbers;
document.getElementById('factorial-button').onclick = computeFactorial;
document.getElementById('sum-button').onclick = sumArray;
document.getElementById('student-button').onclick = createStudent;
document.getElementById('palindrome-button').onclick = checkPalindrome;
document.getElementById('background-button').onclick = changeBackgroundColor;
document.getElementById('api-button').onclick = fetchApiData;

function displayEvenNumbers() {
    let evenNumbers = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    document.getElementById('even-numbers').innerText = evenNumbers.join(', ');
}

function computeFactorial() {
    let number = parseInt(document.getElementById('factorial-input').value);
    let result = factorial(number);
    document.getElementById('factorial-result').innerText = `Factorial of ${number} is ${result}`;
}

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function sumArray() {
    let array = [1, 2, 3, 4, 5];
    let sum =0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
  
    document.getElementById('sum-result').innerText = `Sum of array: ${sum}`;
}


function createStudent() {
    let student = {
        name: 'Madhav Mittal',
        age: 20,
        grades: [85, 90, 78, 92],
        calculateAverage: function () {
            let sum = this.grades.reduce((acc, curr) => acc + curr, 0);
            return sum / this.grades.length;
        }
    };

    document.getElementById('student-average').innerText = `Student ${student.name} has an average grade of ${student.calculateAverage()}`;
}

function checkPalindrome() {
    let str = document.getElementById('palindrome-input').value;
    let reversedStr = str.split('').reverse().join('');
    let result = (str === reversedStr) ? 'is a palindrome' : 'is not a palindrome';
    document.getElementById('palindrome-result').innerText = `The string "${str}" ${result}`;
}

function changeBackgroundColor() {
    let colors = ['violet','indigo','blue','green','yellow','orange','red'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function fetchApiData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-data').innerText = `Fetched Data: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('api-data').innerText = `Error fetching data: ${error}`;
        });
}
