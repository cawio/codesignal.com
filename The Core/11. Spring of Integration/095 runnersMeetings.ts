function runnersMeetings(startPosition: number[], speed: number[]): number {
    let meetings: any = {};
    
    for(let i = 1; i < startPosition.length ; i++){
        for(let j = 0; j < i; j++){
            if((speed[j]-speed[i]) != 0){
                let t: number =(startPosition[i] - startPosition[j]) / (speed[j] - speed[i]);
                if(t > 0) {
                    let x: number = startPosition[i] + t * speed[i];       
                    if(!meetings[t]) {
                        meetings[t] = {};
                    }

                    if(!meetings[t][x]) {
                        meetings[t][x] = {};
                    } 

                    meetings[t][x][i] = true;
                    meetings[t][x][j] = true;                    
                }
                console.table(meetings);
            }
        }        
    }
    
    let best: number = -1;
    
    for(let T in meetings){        
        for(let X in meetings[T]){
            if(Object.keys(meetings[T][X]).length > best){
                best = Object.keys(meetings[T][X]).length
            }
        }
    }
    
    return best;
}

console.log('3', runnersMeetings([1, 4, 2], [27, 18, 24]));
console.log('2', runnersMeetings([1, 4, 2], [5, 6, 2]));

