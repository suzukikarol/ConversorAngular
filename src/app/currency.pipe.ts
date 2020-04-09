import { Pipe, PipeTransform } from '@angular/core'

@Pipe ({
    name: 'moeda'
})

export class MoedaPipe implements PipeTransform{
    transform(val:number){
        return "R$"+val;
    }
}