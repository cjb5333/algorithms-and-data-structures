const helpers = require('./linked-list-helpers');
const ListNode = require('./ListNode');

// Right-most significant
// Runtime: O(A + B)
// Space: O(1)    
function sumTwoLists (headA, headB) {
    let node, head;
    let carry = 0;

    while (headA || headB) {
        let sum = carry;
        if (headA) {
            sum += headA.val;
            headA = headA.next;
        }
        if (headB) {
            sum += headB.val;
            headB = headB.next;
        }
        let val = sum % 10;
        if (!node) {
            head = node = new ListNode(val);
        } else {
            node.next = new ListNode(val);
            node = node.next;
        }
        carry = (sum) > 9 ? 1 : 0;
    }
    if (carry) {
        node.next = new ListNode(carry);
    }
    return head;
}

// Left-most significant
// Runtime: O(A + B)
// Space: O(A + B)      --> creates a new linked list from sum
// function sumTwoLists (headA, headB) {
//     var len = 0;
//     var A = headA, B = headB;
//     while (A || B) {
//         len++;
//         if (A) A = A.next;
//         if (B) B = B.next;
//     }

//     var sum = 0;
//     A = headA, B = headB;
//     while (A || B) {
//         len--;
//         if (A) {
//             sum += A.val * (Math.pow(10, len));
//             A = A.next;
//         }
//         if (B) {
//             sum += B.val * (Math.pow(10, len));
//             B = B.next;
//         }
//     }

//     return helpers.buildLinkedList(sum.toString().split(''));
// }


const vals1 = [7, 2, 4];
const vals2 = [2, 5, 3];
const head1 = helpers.buildLinkedList(vals1);
const head2 = helpers.buildLinkedList(vals2);
helpers.printLinkedList(head1);
helpers.printLinkedList(head2);
const sumHead = sumTwoLists(head1, head2);
console.log(sumHead);
helpers.printLinkedList(sumHead);