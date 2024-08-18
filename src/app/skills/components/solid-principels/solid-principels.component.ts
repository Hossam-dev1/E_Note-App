import { Component } from '@angular/core';

interface IPlayer {
  attack(): any,
  defence(): any,
  strike(): any,
}
@Component({
  selector: 'app-solid-principels',
  standalone: true,
  imports: [],
  templateUrl: './solid-principels.component.html',
  styleUrl: './solid-principels.component.css'
})
export class SolidPrincipelsComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let rectangle1: Rectangle = new Rectangle(5, 2);
    let square1: Rectangle = new Square(5);
    square1.setWidth(5)
    console.log(square1.getArea());
  }
}
// Liskov Substitution (Replacement) principle LSP
class Rectangle {
  constructor(public width: number, public height: number) { }
  setHiegt(value: number) {
    this.height = value;
  }
  setWidth(value: number) {
    this.width = value;
  }
  getArea() {
    return this.width * this.height;
  }
}
// Liskov Substitution (Replacement) principle LSP

class Square extends Rectangle {
  constructor(public side: number) {
    super(side, side);
  }
  override setWidth(width: number) {
    super.height = width;
    super.width = width;
  }
}
// so i has to use all medthod and this is Wrong
// as a best practive i sholud to Segregate IPlayer interface to seperate interfaces like attck & defence and implement it any where.
class CR7 implements IPlayer {
  attack() { }
  defence() { }
  strike() { }
}


// Example for dependency Inversion Princable
class UserDetails {
  // httpReq

  constructor(public user: {}, private httpReq: any) {
    this.user = user;
    this.httpReq = httpReq // => it's good practice : DIP achieved by lossly copling (ترابط)
    // this.httpReq = new HttpReq() // => it's bad practice : now it highly coupling my
  }

  getDetails() {
    return this.httpReq.get('http.test.com')
  }
}
class HttpReq {
  get(url: string) {
    // http logic
  }
}

const userDetails = new UserDetails({ id: 1 }, new HttpReq()); // so it's easy when need to pass other class instance & (Open-closed is achieved also)
