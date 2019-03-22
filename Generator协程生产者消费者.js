function* Customer() {
    let res;
    while (true) {
        run = yield res;
        if (!run) {
            return
        }
        console.log(`[Consumer] Consuming ${run} ...`);
        res = '200 Ok';
    }
}

function Producer(c) {
    let run = 0;
    c.next();
    while (run < 5) {
        run++;
        console.log(`[Producer] producing ${run} ...`);
        res = c.next(run).value;
        console.log(`[Producer] Cosumer return ${res}`);
    }
    c.return();
}

async function ProducerAsync(c) {
    let run = 0;
    await c.next();
    while (run < 5) {
        run++;
        console.log(`[Producer] producing ${run} ...`);
        res = await c.next(run).value;
        console.log(`[Producer] Cosumer return ${res}`);
    }
    c.return();
}

console.log('Starting...')
let c = Customer();
Producer(c);
console.log('Producer是同步方法，所以我后执行')

console.log('...') ;
console.log('Starting Async version...') ;

let c2 = Customer();
ProducerAsync(c2);
console.log('ProducerAsync是异步方法，所以我先执行')