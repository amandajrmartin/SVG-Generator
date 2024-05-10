
const { Shapes, Circle, Square, Triangle } = require('./shapes')

describe('Shape Test', () => {
    test('Will this return an object', () => {
        const shape = new Shapes()
        expect(typeof shape).toEqual('object')
    })
})

describe('Circle Test', () => {
    test('Will this return a new circle', () => {
        const circle = new Circle('AJM', 'white', 'Sienna')
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="Sienna" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AJM</text>
      
      </svg>`)
    })
})

describe('Square Test', () => {
    test('Will this return a new circle', () => {
        const square = new Square('AJM', 'white', 'Sienna')
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="30" height="30"  fill="Sienna" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">AJM</text>
      
      </svg>`)
    })
})



