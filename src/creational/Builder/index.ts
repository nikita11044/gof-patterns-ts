//  TODO: add description

class ProductOfBuider1 {
    private _essentialProp: string;
    private _additionalProp?: string;

    get essentialProp(): string { return this._essentialProp; }
    set essentialProp(val: string) { this._essentialProp = val; }

    get additionalProp(): string { return this._additionalProp; }
    set additionalProp(val: string) { this._additionalProp = val; }
}

interface IBuilder {
    setEssentialProp(): void;
    setAdditionalProp(): void;
}

class Builder1 implements IBuilder {
    private _result: ProductOfBuider1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this._result = new ProductOfBuider1();
    }

    public setEssentialProp(): void {
        this._result.essentialProp = 'essential value';
    }

    public setAdditionalProp(): void {
        this._result.additionalProp = 'additional value';
    }

    public retreiveResult(): ProductOfBuider1 {
        const result = this._result;
        this.reset();
        return result;
    }
}

class Director {
    private _builder: IBuilder;

    set builder(val: IBuilder) {
        this._builder = val;
    }

    public constructProductWithSingleProp(): void {
        this._builder.setEssentialProp();
    }

    public constructEnhancedProduct(): void {
        this._builder.setEssentialProp();
        this._builder.setAdditionalProp();
    }
}

function builderTest() {
    const director = new Director();
    const builder = new Builder1();
    director.builder = builder;

    console.log("First we'll create a product with one essential property");
    director.constructProductWithSingleProp();
    console.log("Here's the result: ");
    console.log(builder.retreiveResult());
    console.log('');
    console.log("Now we'll create a product with two properties, via the same director");
    director.constructEnhancedProduct();
    console.log("Here's the result: ");
    console.log(builder.retreiveResult());

}

builderTest();
