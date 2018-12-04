function* Customer() {
    let res;
    while (true) {
        run = yield res;
        if (!run) {
            return
        }
        console.log(`[Consumer] Consuming ${run}...`);
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
console.log('Starting...')
let c = Customer();
Producer(c);


