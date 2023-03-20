var number = 1;
let count = 2;

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Finally: ' + i);
}

doSomething();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a'];
let g: object[] = [{ test: 'hi' }, {}];

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
  Purple = 3,
}

let backgroundColor = Color.Red;

let message;
message = 'abs';
let endsWithC = (<string>message).endsWith('c');
let altWay = (message as string).endsWith('c');

let now: string;
now = 'abc';
now.includes('b');

let log = function (message: string) {
  console.log(message);
};

let doLog = (message: string) => console.log(message);

interface Point {
  x: number;
  y: number;
}

let drawPoint = (point: Point) => {
  //...
};

let getDistance = (pointA: Point, pointB: Point) => {
  //...
};
