export class Greeter{
  greeting: string;
  constructor(message: string){
    this.greeting = message;
  };

  getGlitter(){
    return 'bem vindo, ' + this.greeting;
  }

}