class Node {
    public:
        int key, value;
        Node* next; 
        Node(int key, int value, Node* next) : key(key), value(value), next(next) {}
    };
    
    
    class MyHashMap {
    public:
            const static int size = 19997;
            const static int mult = 12582917;
             Node* data[size] = {};
            int hash(int key) {
            return (int)((long)key * mult % size);
        }
        
        void put(int key, int value) {
            remove(key);
            int h = hash(key);
            Node* node = new Node(key, value, data[h]);
            data[h] = node;
        }
        
        int get(int key) {
           int h = hash(key);
           Node* node = data[h];
           for(; node!=NULL; node = node->next){
            if(node->key==key) return node->value;
           }
           return -1;
        }
        
        void remove(int key) {
           int h = hash(key);
           Node* node = data[h];
           if(node == NULL) return;
           if(node->key == key){
            data[h] = node->next;
            delete node;
           }else {
             for(; node->next!=NULL; node = node->next){
             if(node->next->key==key){
                Node* temp = node->next;
                node->next = temp->next;
                delete temp;
                return;
             } 
            }
           } 
        }
    };


    
    /**
     * Your MyHashMap object will be instantiated and called as such:
     * MyHashMap* obj = new MyHashMap();
     * obj->put(key,value);
     * int param_2 = obj->get(key);
     * obj->remove(key);
     */


    /// array approach

    class MyHashMap {
        vector<int>map;
    public:
        MyHashMap() {
           map = vector<int>(1000001,-1);
        }
        
        void put(int key, int value) {
            map[key] = value;
        }
        
        int get(int key) {
            return map[key];
        }
        
        void remove(int key) {
            map[key] = -1;
        }
    };
    
    /**
     * Your MyHashMap object will be instantiated and called as such:
     * MyHashMap* obj = new MyHashMap();
     * obj->put(key,value);
     * int param_2 = obj->get(key);
     * obj->remove(key);
     */