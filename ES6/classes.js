class Car {
	constructor(name) {
		this.brand = name;
	}

	present() {
		return `I have a ${this.brand}`;
	}
}

class Model extends Car {
	constructor(name, model) {
		super(name);
		this.model = model;
	}

	show() {
		return `${this.present()}, It is a ${this.model}`;
	}
}

const myCar = new Model("Nova", "Tesla");
console.log(myCar.show());
