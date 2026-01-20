
const boleta= new Boleta();

const pendrive= new Tecnologia("Pendrive",15000,"16GB");
const pan= new Alimento("Bolsa Pan 1K",1500,"01-09-2026");
const rosas = new Jardin("Cinco docenas de rosas", 25000, "01-09-2026");
const claveles= new Jardin("Una docena de claveles", 5000, "01-01-2026")

boleta.agregarProducto(pendrive);
boleta.agregarProducto(pan);
boleta.agregarProducto(rosas);
boleta.agregarProducto(claveles);


boleta.imprimir();



  


