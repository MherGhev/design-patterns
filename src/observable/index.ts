import Observable from "./Observable";
import Observer from "./Observer";

const observable = new Observable();

observable.subscribe((data: string) => {
    console.log("I am observer 1, data: ", data);
})

observable.subscribe((data: string) => {
    console.log("I am observer 2, data: ", data);
})

const observer3: Observer = (data: string) => {
    console.log("I am observer 3, I can unsubscribe!")
}

observable.subscribe(observer3);

setTimeout(() => {
    observable.notify("123456");
    // observable.unsubscribe(observer3);
}, 1000);

// Question for the audience: why won't this work?
observable.unsubscribe(observer3);

setTimeout(() => {
    observable.notify("789");
}, 2000);
