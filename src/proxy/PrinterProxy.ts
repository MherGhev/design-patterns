import Printer from "./PrinterClass";
import IPrinter from "./PrinterInterface";

class PrinterProxy implements IPrinter {
    private printers: Printer[];
    constructor(printers: Printer[]) {
        this.printers = printers;
    }

    print = async (document: string): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            for (let printer of this.printers) {
                if (printer.isFree)
                    return printer.print(document).then(data => resolve(data));
            }
            return reject(`All printers are busy, try again later. [${document}]`)
            // Or you can add a queue logic here.
        })
    }
}

export default PrinterProxy;