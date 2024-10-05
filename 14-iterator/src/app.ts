class Item {
    constructor(public id: number, public date: Date, public title: string) {}
};
class ItemList {
    private items: Item[] = [];

    public addItem(item: Item) {
        this.items.push(item);
    }

    public getItems() {
        return this.items;
    }

    public getIterator(mode: 'id' | 'date', ascending: boolean) {
        return new ItemIterator(this, mode, ascending);
    }
}
interface IIterator<T> {
    current(): T | undefined;
    next(): T | undefined; 
    prev(): T | undefined;
    index(): number;
}

class ItemIterator implements IIterator<Item> {
    private position: number = 0;
    private items: Item[];

    constructor(itemList: ItemList, mode: 'id' | 'date', ascending: boolean) {
        this.items = [...itemList.getItems()]; 

        if (mode === 'id') {
            this.items.sort((a, b) => ascending ? a.id - b.id : b.id - a.id);
        } else { 
            this.items.sort((a, b) => ascending ? a.date.getTime() - b.date.getTime() : b.date.getTime() - a.date.getTime());
        }
    }

    current(): Item | undefined {
        return this.items[this.position];
    }

    next(): Item | undefined {
        if (this.position < this.items.length - 1) {
            this.position += 1;
        }
        return this.current();
    }

    prev(): Item | undefined {
        if (this.position > 0) {
            this.position -= 1;
        }
        return this.current();
    }

    index(): number {
        return this.position;
    }
}
const itemList = new ItemList();
itemList.addItem(new Item(3, new Date('2024-01-01'), 'First Item'));
itemList.addItem(new Item(1, new Date('2024-01-03'), 'Second Item'));
itemList.addItem(new Item(2, new Date('2024-01-02'), 'Third Item'));

const idIterator = itemList.getIterator('id', true);

console.log(idIterator.current());
console.log(idIterator.next());    
console.log(idIterator.next());    
console.log(idIterator.prev());     
console.log(idIterator.index());    


const dateIterator = itemList.getIterator('date', false);

console.log(dateIterator.current());
console.log(dateIterator.next());     
console.log(dateIterator.prev());     
console.log(dateIterator.index());    