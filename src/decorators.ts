const MyFirstDecorator = () => {
  return (target: any) => {
    console.log('First Decorator:', target);
  };
}

const MySecondDecortor = () => {
  return (target: any) => {
    console.log('This my second decorator:', target);
  }
}

@MySecondDecortor()
@MyFirstDecorator()
export class Person {
  constructor(public name: string) {}

  getName = () => this.name;
}