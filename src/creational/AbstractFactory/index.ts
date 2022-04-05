//  TODO: add description
//  TODO: add \n to logs 

interface IProductA {
    someAction(): string
    workWith(cooperator: IProductB): string
}

interface IProductB {
    anotherAction(): string
    workWith(cooperator: IProductA): string
}

class SpecificProductA1 implements IProductA {
    public someAction(): string {
        return 'result of action done by ProductA1'
    }

    public workWith(cooperator: IProductB): string {
        return `result of action done by ProductA1 is working with ${cooperator.anotherAction()}`
    }
}

class SpecificProductB1 implements IProductB {
    public anotherAction(): string {
        return 'result of action done by ProductB1'
    }

    public workWith(cooperator: IProductA): string {
        return `result of action done by ProductB1 is working with ${cooperator.someAction()}`
    }
}

class SpecificProductA2 implements IProductA {
    public someAction(): string {
        return 'result of action done by ProductA2'
    }

     public workWith(cooperator: IProductB): string {
        return `result of action done by ProductA2 is working with ${cooperator.anotherAction()}`
    }
}

class SpecificProductB2 implements IProductB {
    public anotherAction(): string {
        return 'result of action done by ProductB2'
    }

    public workWith(cooperator: IProductA): string {
        return `result of action done by ProductB2 is working with ${cooperator.someAction()}`
    }
}

interface IAbstractFactory {
    createProductA(): IProductA
    createProductB(): IProductB
}

class SpecificFactoryV1 implements IAbstractFactory {
    public createProductA(): IProductA {
        return new SpecificProductA1()
    }

    public createProductB(): IProductB {
        return new SpecificProductB1()
    }
}

class SpecificFactoryV2 implements IAbstractFactory {
    public createProductA(): IProductA {
        return new SpecificProductA2()
    }

    public createProductB(): IProductB {
        return new SpecificProductB2()
    }
}

function testAbstractFactory(factory: IAbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    
    console.log(productA.someAction())
    console.log(productA.workWith(productB))
}

console.log('Testing specific factory v1')
testAbstractFactory(new SpecificFactoryV1())

console.log('Testing specific factory v2')
testAbstractFactory(new SpecificFactoryV2())