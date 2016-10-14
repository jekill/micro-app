import {Component} from "@angular/core";
@Component({
    selector: 'ma-last-uploads',
    styles: [`
    ul,li{
    list-style: none;
    display: block;
    justify-content: center;
    
    }
    ul{
     display: flex;
    }
    li{
        margin: 0 10px;
        width: 100px;
        height: 70px;
    }
`],
    template: `
    <ul class="last-uploads">
        <li><img class="img-rounded" src="http://pipsum.com/100x70.jpg?image=0" alt=""></li>
        <li><img class="img-rounded" src="http://pipsum.com/100x70.jpg?image=1" alt=""></li>
        <li><img class="img-rounded" src="http://pipsum.com/100x70.jpg?image=2" alt=""></li>
        <li><img class="img-rounded" src="http://pipsum.com/100x70.jpg?image=3" alt=""></li>
        <li><img class="img-rounded" src="http://pipsum.com/100x70.jpg?image=4" alt=""></li>
        <li><img class="img-rounded" src="http://pipsum.com/100x70.jpg?image=5" alt=""></li>
        <li><img class="img-rounded" src="http://pipsum.com/100x70.jpg?image=6" alt=""></li>
    </ul>`
})
export class LastUploadsComponent {

}