// RxJS v6+
import { fromEvent, combineLatest } from 'rxjs';
import { mapTo, startWith, scan, tap, map } from 'rxjs/operators';

// elem refs
const redTotal = document.getElementById('red-total');
const blackTotal = document.getElementById('black-total');
const total = document.getElementById('total');

const addOneClick$ = (id: any) =>
  fromEvent(document.getElementById(id), 'click').pipe(
    // map every click to 1
    mapTo(1),
    // keep a running total
    scan((acc, curr) => acc + curr, 0),
    startWith(0)
  );

combineLatest(addOneClick$('red'), addOneClick$('black'))
  .subscribe(([red, black]: any) => {
    redTotal.innerHTML = red;
    blackTotal.innerHTML = black;
    total.innerHTML = red + black;
  });