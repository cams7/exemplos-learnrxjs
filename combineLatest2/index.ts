// RxJS v6+
import { interval, combineLatest } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

const pares$ = interval(3000).pipe(
	filter(num => num % 2 === 0)
);
const impares$ = interval(7000).pipe(
	filter(num => num % 2 === 1)
);
  
const logItem = (p:any, i:any) => {
    let node: any = document.createElement("li");
    let textnode: any = document.createTextNode(`${p} - ${i}`);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
};

combineLatest(pares$, impares$).pipe(
	tap({
      next: val => {
        console.log('on next:', val);
      },
      error: error => {
        console.log('on error:', error.message);
      },
      complete: () => console.log('on complete')
    })
).subscribe(([p, i]: any) => logItem(p, i));