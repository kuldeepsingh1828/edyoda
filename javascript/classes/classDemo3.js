class A {
    constructor(a) {
        this.a = a;
    }
    getA() {
        return this.a;
    }
}

class B {
    constructor(b) {
        this.b = b;
    }
    getB() {
        return this.b;
    }
}

//multiple inheritance is not supported in js
class C extends A, B {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
    getC() {
        return this.c;
    }
}