class ProdManager {
    #productos = [];
    #id = 1;
  
    constructor(data) {
      this.id = this.#id++;
      this.title = data.name;
      this.photo = data.photo;
      this.price = data.price;
      this.stock = data.stock;
    }
  
    create(data) {
      const producto = {
        id: this.#id++,
        title: data.name,
        photo: data.photo,
        price: data.price,
        stock: data.stock,
      };
      this.#productos.push(producto);
    }
  
    read() {
      return this.#productos;
    }
  
    readById(id) {
      return this.#productos.find((producto) => producto.id === id);
    }
  }
  
  const manager = new ProdManager({
    name: "Natura",
    photo: "photo1.jpg",
    price: 2200,
    stock: 100,
  });
  
  manager.create({
    name: "Playadito 1KG",
    photo: "photo2.jpg",
    price: 3000,
    stock: 50,
  });
  
  manager.create({
    name: "Mondongo",
    photo: "photo3.jpg",
    price: 1500,
    stock: 75,
  });
  
  const todosLosProductos = manager.read();
  console.log("Todos los productos:", todosLosProductos);
  
  const productoConId1 = manager.readById(1);
  console.log("Producto con ID 1:", productoConId1);
  
  const productoConId2 = manager.readById(2);
  console.log("Producto con ID 2:", productoConId2);
  