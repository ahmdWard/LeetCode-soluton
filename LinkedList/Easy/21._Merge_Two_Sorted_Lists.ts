function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    if(list1==null)
    return list2;

    if(list2==null)
    return list1;

    let head: ListNode | null = null;
    let tail: ListNode | null = null;

      if(list1.val < list2.val){
            head = tail = list1;
            list1 = list1.next;
        }else{
            head = tail = list2;
            list2 = list2.next;
        }

    while (list1 && list2) {
        if(list1.val<list2.val){
            tail.next=list1;
            list1 = list1.next;
        }else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;

    }

   tail.next = list1?? list2

    return head;
};

/// Recursion Solution 

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    if(list1===null) {return list2;}

    if(list2===null) {return list1;}

    if(list1.val < list2.val) {
       list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    }else{
      list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
};