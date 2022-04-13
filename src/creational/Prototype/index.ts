class Prototype {
    public somePrimitive: any;
    public someObject: object;
    public circularRef: CircularReferenceObject;

    public clone(): Prototype {
        const clonedObj = Object.create(this);

        clonedObj.someObject = Object.create(this.someObject);

        clonedObj.circularRef = {
            ...this.circularRef,
            prototype: { ...this },
        };

        return clonedObj;
    }
}

class CircularReferenceObject {
    public prototype: object;

    constructor(prototype: object) {
        this.prototype = prototype;
    }
}

function testPrototype() {
    const prototype = new Prototype();

    prototype.somePrimitive = 42;
    prototype.someObject = {};
    prototype.circularRef = new CircularReferenceObject(prototype);

    const copy = prototype.clone();

    console.log(`Were primitive values cloned? ${prototype.somePrimitive === copy.somePrimitive ? 'YES!' : 'Nope'}`);
    console.log(`Were object values cloned? ${prototype.someObject !== copy.someObject ? 'YES!' : 'Nope'}`);
    console.log(`Were circural reference objects cloned and linked correctly? ${prototype.circularRef.prototype !== copy.circularRef.prototype ? 'YES!' : 'Nope'}`);
}

testPrototype();
