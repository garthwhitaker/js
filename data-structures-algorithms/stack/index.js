var {Stack} = require('./model/stack');

var isPalindrome = (word) => {

    var stack = new Stack();
    for (var i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }

    var rword = "";

    while (stack.length() > 0) {
        rword += stack.pop();
    }

    if (word === rword) {
        return `${word} is a palindrome.`;
    }
    else {
        return `${word} is not a palindrome.`;
    }

}

console.log(isPalindrome("racecaer"));