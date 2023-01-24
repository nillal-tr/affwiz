import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  showAccordionContent: boolean = false;
  btnActiveStyle: string = 'btn-notactive';

  onClickAccordionBtn() {
    if(this.showAccordionContent) {
      this.showAccordionContent = false
      this.btnActiveStyle = 'btn-notactive'

    } else {
      this.showAccordionContent = true
      this.btnActiveStyle = 'btn-active'
    }
  }

}
