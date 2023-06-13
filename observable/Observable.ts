import Observer from "./Observer";

class Observable {
    private observers: Observer[];
    constructor() {
        this.observers = [];
    }

    subscribe = (observer: Observer) => {
        this.observers.push(observer);
    }

    unsubscribe = (observer: Observer) => {
        this.observers = this.observers.filter(o => o != observer);
    }

    notify = (data: string) => {
        this.observers.forEach(observer => {
            observer(data);
        })
    }
}


export default Observable;