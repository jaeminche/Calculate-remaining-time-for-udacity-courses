var x = document.getElementsByClassName("duration--duration--3qykr");
var list = [];
var numbers = [];
for (var i = 0; i < x.length; i++) {
	var text = x[i].innerText;
	list += text;
}
numbers = list.match(/\d+/g).map(Number);

for (var j = 0; j < numbers.length; j++) {
	if (numbers[j] >= 10) {
		numbers[j] = numbers[j]/60;
	}
}
var sum = numbers.reduce(add, 0);

function add(a, b) {
    return a + b;
}
console.log(numbers);

console.log(sum + '시간 남았다으!');

