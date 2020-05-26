class LinkedList
{
    constructor()
    {
        this.size=0;
        this.head=null;
    }


    add(info) 
    {   
        var aux = new Node(info);
        console.log(aux);
        console.log(this.head);
        if(this.head==null)
        {
            this.head = aux;           
        }else
        {
             this.head.next=aux;
             aux.previous=this.head;
             this.head=aux;
        }
        this.size=this.size+1;
    }

    delete()
    {
        this.head=this.head.previous;
    }

    isEmpty() 
    {   
        if(this.head==null){
            return true;    
        }
        else{
            return false;
        }
        
    }

    size()
    {
        return this.size;
    }

    top()
    {
        return this.head.value;
    }
}

class Node
{
     constructor(value)
    {
        this.value=value;
        this.next=null;
        this.previous=null;
    }

}

