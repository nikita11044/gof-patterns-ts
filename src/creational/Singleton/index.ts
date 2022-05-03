//  TODO: add description

class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return this.instance;
    }
}

function testSingleton() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    if (instance1 === instance2) {
        console.log('Voth variables refer to the same instance');
    } else {
        console.log('Something went wrong');
    }
}

testSingleton();
