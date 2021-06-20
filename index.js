// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }


    set diameter(diameter) {
        this.radius = diameter / 2
    } 

    
    

    get circumference(){
        return 3.14 * this.diameter
    }

    set circumference(circumference) {
        this.radius = circumference / (3.14 * 2)
    }

   
    get area() {
        return 3.14 * (this.radius * this.radius)
    }

    set area( area ) {
        this.radius = Math.sqrt( area / 3.14 )
    }
}