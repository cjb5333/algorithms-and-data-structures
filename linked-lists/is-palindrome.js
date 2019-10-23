const ListNode = require('./ListNode');
const helpers = require('./linked-list-helpers');
const testcase = require('../utils/testcase');

// Runtime: O(n*log(n))
// Space: O(1)
function isPalindrome (head) {
    if (!head) return false;
    let len = 0;
    let node = head;
    while(node) {
        len++;
        node = node.next;
    }
    node = head;
    for (let i=0; i<len/2; i++) {
        let runner = node;
        for (let j=i; j<len-i-1; j++){
            runner = runner.next;
        }
        if (runner.val !== node.val) return false;
        node = node.next;
    }
    return true;
}

testcase(isPalindrome, false, helpers.buildLinkedList('hello'.split('')));
testcase(isPalindrome, true, helpers.buildLinkedList('helleh'.split('')));
testcase(isPalindrome, true, helpers.buildLinkedList('hh'.split('')));
testcase(isPalindrome, true, helpers.buildLinkedList('heh'.split('')));
testcase(isPalindrome, true, helpers.buildLinkedList('heeh'.split('')));
testcase(isPalindrome, false, helpers.buildLinkedList('heesh'.split('')));
testcase(isPalindrome, true, helpers.buildLinkedList('h'.split('')));