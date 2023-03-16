class c3 {
    constructor(
        private requests: string[],
        private expOut: string[]
    ) {}

    getResults(): string {
        return 'expOut: ' + String(this.expOut) + ' | myOut: ' + String(shoppingCart(this.requests));
    }
}

function shoppingCart(requests: string[]): string[] {
    class Item {
        constructor(        
            readonly item: string,
            public quantity: number,
        ) {}

        format(): string {
            return this.item + ` : ${this.quantity}`;
        }
    }

    let sC: Item[] = [];
    requests.forEach((request: string) => {
        const instruction: string = request.charAt(0);
        let product: string = '';
        // add
        if (instruction === 'a') {                  
            product = request.slice(6);
            sC.push(new Item(product, 1));
        } 
        // remove
        else if (instruction === 'r') {           
            product = request.slice(9);
            for (let i = 0; i < sC.length; i++) {
                const item: Item = sC[i];
                if (item.item === product) {
                    sC.splice(i, 1);
                }
            }
        } 
        // update quantity
        else if (instruction === 'q') {           
            product = request.slice(15, request.lastIndexOf(':') - 1);
            const qUpdate: number = Number(request.substring(request.length - 3));
            for (let i =0; i < sC.length; i++) {
                const item: Item = sC[i];
                if (item.item === product) {
                    sC[i].quantity  += qUpdate; 
                }
            }
        } 
        // checkout
        else {                                  
            sC.length = 0;
        }
    });
    
    return sC.map((item: Item) => item.format());
}

const c3_1: c3 = new c3(
    ["add : milk", 
     "add : pickles", 
     "remove : milk", 
     "add : milk", 
     "quantity_upd : pickles : +4"],
    ["pickles : 5", 
     "milk: 1"]
)
console.log(c3_1.getResults());