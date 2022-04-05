//  TODO: add description

interface ICommon {
    doSomething(): string
}

class ProductA implements ICommon {
    public doSomething(): string {
        return 'something is done by instance of ProductA\n'
    }
}

class ProductB implements ICommon {
    public doSomething(): string {
        return 'something is done by instance of ProductB\n'
    }
}

abstract class Creator {
    public abstract factoryMethod(): ICommon

    public work(): string {
        const product = this.factoryMethod()

        return `Creator is at work: ${product.doSomething()}`
    }
}

class ProductACreator extends Creator {
    public factoryMethod() {
        return new ProductA()
    }
}

class ProductBCreator extends Creator {
    public factoryMethod() {
        return new ProductB()
    }
}

function testFactoryMethod(creator: Creator) {
    console.log(creator.work());
}

console.log('Launching ProductACreator')
testFactoryMethod(new ProductACreator())

console.log('Launching ProductBCreator')
testFactoryMethod(new ProductBCreator())