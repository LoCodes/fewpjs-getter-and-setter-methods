// Add your Circle class here

// Circle
// ✓ correctly returns the radius property of a Circle instance using `circle.radius`
// gets
//   ✓ the diameter of a circle using the pseudo-property `circle.diameter`
//   ✓ the circumference of a circle using the pseudo-property `circle.circumference`
//   ✓ the area of a circle using the pseudo-property `circle.area`
// sets
//   ✓ the radius using the pseudo-property `circle.diameter`
//   ✓ the radius using the pseudo-property `circle.circumference`
//   ✓ the radius using the pseudo-property `circle.area`



class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference(){
        return 3.14 * this.diameter
    }

    get area() {
        return 3.14 * (this.radius * this.radius)
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    } 

    set circumference(circumference) {
        this.radius = circumference / (3.14 * 2)
    }

    set area( area ) {
        this.radius = Math.sqrt( area / 3.14 )
    }
}


