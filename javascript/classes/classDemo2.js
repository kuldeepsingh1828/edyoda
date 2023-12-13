class A {
    constructor(a) {
        this.a = a;
    }
    getA() {
        return this.a;
    }
}

class B extends A {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    getB() {
        return this.b;
    }
}


class C extends B {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
    getC() {
        return this.c;
    }
}