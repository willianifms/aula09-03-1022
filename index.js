class Retangulo{
  constructor(largura, altura, sla){
    this.altura = altura;
    this.largura = largura;
    this.sla = sla;
  }
  calcularArea(){
    return this.altura * this.largura + this.sla
  }
  area(){
  return this.calcularArea()
}

}
let quadrado = new Retangulo("10", "10" , "1");
let retangulo = new Retangulo("30", "60" ,"1");
console.log(quadrado.area())
console.log(retangulo.area())

