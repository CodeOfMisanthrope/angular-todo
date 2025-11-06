import { Component } from '@angular/core';
import {List} from '../../components/list/list';

@Component({
  selector: 'app-main',
  imports: [
    List
  ],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
