import IPrinter from "./PrinterInterface";

class Printer implements IPrinter {
    public isFree: boolean = true;

    print(document: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.isFree = false;
            setTimeout(() => {
                this.isFree = true;
                resolve(`Printed ${document}`);
            }, 1000);
        })
    }
}


export default Printer;