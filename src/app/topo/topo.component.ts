import { Component } from '@angular/core';

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    //template: '<p>Template em line, utilizando meta dado</p>'
    styleUrls: ['./topo.component.css'],
    //styles: ['.exemplo{color:red}']
})
export class TopoComponent{
    public titulo:string = 'Aprendendo Ingles'
}