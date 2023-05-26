import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList : Character [] = [{
    name: 'Trunks',
    power: 10
  }]

  //@Output ()
  // public onDelete: EventEmitter <number> = new EventEmitter();

  // public onDeleteCharacter(index:number): void{
  //   // TODO: Emitir el ID del personaje
  //       this.onDelete.emit(index);
  // }

  @Output ()
  public onDelete: EventEmitter <string> = new EventEmitter();

  public onDeleteCharacter(id?:string): void{

    if (!id) return;
    this.onDelete.emit(id);
  }


}