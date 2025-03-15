class Node{
    public:
    int key;
    Node* next;
    Node(int key , Node* next) : key(key), next(next){};
};

class MyHashSet {
public:
    const static int size = 19997;
    const static int mult = 12582917;
    Node* data[size] = {};
    int hash(int key){
        return (int)((long)key * mult %size);
    }
    
    void add(int key) {
        int h = hash(key);
        Node* node = data[h];
        for(;node!=NULL;node=node->next){
            if(node->key==key){
             return ; }
        }
        data[h] = new Node(key, data[h]);  
    }
    
    void remove(int key) {
        int h = hash(key);
        Node* node = data[h];
        if(node == NULL) return;

        if(node->key == key){
            data[h] = node->next;
            delete node;
            return;
        }

        for(;node->next!=NULL;node =node->next){
            if(node->key==key){
                Node* temp = node->next;
                node->next= temp->next;
                delete temp;
                return;
            }
        }

    }
    
    bool contains(int key) {
        int h = hash(key);
        Node* node = data[h];

        for(;node!=NULL;node=node->next){
            if(node->key==key){
                return true;
            }
        }
        return false;
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */