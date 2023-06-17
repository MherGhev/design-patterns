import Printer from "./PrinterClass";
import PrinterProxy from "./PrinterProyx";

const printer1: Printer = new Printer();
const printer2: Printer = new Printer();
const printer3: Printer = new Printer();

const printerProxy: PrinterProxy = new PrinterProxy([printer1, printer2, printer3]);

printerProxy.print("Document1").then(data => console.log(data)).catch(err => console.log(err));
printerProxy.print("Document2").then(data => console.log(data)).catch(err => console.log(err));
printerProxy.print("Document3").then(data => console.log(data)).catch(err => console.log(err));
printerProxy.print("Document4").then(data => console.log(data)).catch(err => console.log(err));
