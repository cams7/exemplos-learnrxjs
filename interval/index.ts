import { of, interval, combineLatest } from 'rxjs';
import { takeWhile, tap, last} from 'rxjs/operators';

const intervalValue = 1000;

combineLatest(
	interval(intervalValue).pipe(
		tap(val => logItem(`Elapsed time is ${intervalValue*(1 + val)} millis`)),	
		takeWhile(val => val < (5-1)),
		last()
	),
	of('Teste')
).subscribe(
	([_,val]) => logItem(`The informed value is "${val}"`),
    (error: any) => logItem (`Error: ${error}`),
    () => logItem('Completed')
);
function logItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}