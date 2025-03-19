function reverseList(head: ListNode | null): ListNode | null {
        
    let prev: ListNode | null = null;
    let cur : ListNode | null = head;
    while(cur) {
        let next: ListNode | null = cur.next;
        cur.next = prev;
        prev=cur
        cur= next;
    }
    return prev;
};