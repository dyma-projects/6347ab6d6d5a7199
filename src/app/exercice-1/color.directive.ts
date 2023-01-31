import { Directive, ElementRef, HostListener} from "@angular/core";

@Directive({ selector: '[changeMyColor]' })
    
export class myColorDirective{

    constructor(private el : ElementRef) {
    }

    @HostListener('window:keyup', ['$event'])
        
    keyEvent(event: KeyboardEvent) {
        switch (event.code) {
            case 'ArrowUp':
                this.changeColorWithArrows('red')
                break;
            case 'ArrowDown':
                this.changeColorWithArrows('purple')
                break;
            case 'ArrowLeft':
                this.changeColorWithArrows('pink')
                break;
            case 'ArrowRight':
                this.changeColorWithArrows('blue')
                break;
            default: 
            this.changeColorWithArrows('black')
    }
}
    
    private changeColorWithArrows(color: string) {
        this.el.nativeElement.style.color = color;
      }
}

