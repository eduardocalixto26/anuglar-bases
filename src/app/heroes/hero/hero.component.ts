import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

getHeroDescription(): string {

  return  ` ${ this.name } - ${ this.age }`;
}

changeHero():void{
  this.name = 'Spider Man';
}

changeAge():void{
  this.age = 23;
}

resetForm():void{
  this.age = 45;
  this.name = 'Ironman';
}

}
