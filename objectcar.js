let car = {
  color: 'Black',
  power: 500,
  printPower: function(){
    console.log(this.power)
   }

}
car.color = 'Green';
console.log(car.color);
car.printPower()


