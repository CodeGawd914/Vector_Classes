/*
Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]);

a.add(b);      // should return a new Vector([4, 6, 8])
a.subtract(b); // should return a new Vector([-2, -2, -2])
a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c);      // throws an error

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

*/

const Vector = (components) => {
  // in order to pair vectors you have to make it a class and each function in the calss can be called on the instance just like OOP
  this.components = components
  this.add = (b) => {
    // check and see if vectors are the same length
    if ( this.components.length !== b.components.length ) {
      throw Error( 'Vectors are not same length.' );
    }
    //somewhere to put the sum of vectors.
      let sum = []
      for (let i = 0, length = this.components.length; i < length; i++){
      sum.push(this.components[i]+ b.components[i])
    }
    return new Vector(sum)
  }

  this.subtract =(b)=> {
    if ( this.components.length !== b.components.length ) {
      throw Error( 'Vectors are not same length.' );
    }
      let minus = []
      for (let i = 0, length = this.components.length; i<length; i++ ){
        minus.push(this.components[i]- b.components[i])
      }
    return new Vector(minus)
  }

  this.dot =(b) => {
    if(this.components.length !== b.components.length){
      throw Error('Vectors are not same length.');
    }
    let products =[]
    for (let i = 0, length = this.components.length; i<length; i++){
      products.push(this.components[i] * b.components[i])
    }
    return products.reduce((a,b)=>{a+b})
  }

  this.dot = ( b )=> {
    if ( this.components.length !== b.components.length ) {
      throw Error( 'Vectors must be the same length.' );
    }
    var products = [];
    for( let i = 0, length = this.components.length; i < length; i++ ) {
      products.push( this.components[i] * b.components[i] );
    }
    return products.reduce((a,b)=> {return a + b});
  }

  this.norm = ()=> {
  return Math.sqrt(this.components.reduce((a,b)=>{
    return a + Math.pow(b,2)
  }))
  }
  this.equals = function( b ) {
    if ( this.components.length !== b.components.length ) {
      return false;
    }
    for ( var i = 0, length = this.components.length; i < length; i++ ) {
      if ( this.components[ i ] !== b.components[ i ] ) {
        return false;
      }
    }
    return true;
  };
  this.toString = function(){
    return '(' + this.components.join(',') + ')';
  };

}
