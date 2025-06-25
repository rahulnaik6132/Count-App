import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Count-App';
  count :number =  0

  increment(){
    this.count++;
  }

  decrement(){
    if(this.count == 0){
      alert('No Negative Values')
    }
    else{
      this.count--;
    }
  }

  reset(){
    this.count = 0;
  }
}
