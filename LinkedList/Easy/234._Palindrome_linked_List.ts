function isPalindrome(head: ListNode | null): boolean {

    let slow : ListNode | null = head;
    let fast : ListNode | null = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next; 
    }

    let cur : ListNode | null = slow;
    let prev : ListNode | null = null;
    while(cur !=null){
     let next : ListNode | null = cur.next;
     cur.next = prev;
     prev = cur;
     cur =next;
    }

    let first: ListNode | null = head;
    let second: ListNode | null = prev;

    while(second!= null){
        if (first!.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }
    return true;
};