interface IPrinter {
    print(document: string): Promise<string>;
}

export default IPrinter