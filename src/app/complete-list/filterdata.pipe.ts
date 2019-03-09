import { Pipe, PipeTransform } from '@angular/core';
import { model } from '../reg-model';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(value : model[], search : any, searchAbleList : any) : any[] {
    if(search){
      search = search.toLowerCase();
      return value.filter(function(data : any){
        var isTrue = false;
        for(var k in searchAbleList){
        if(data[ searchAbleList[k] ].toLowerCase().indexOf(search)>-1)
        {
          isTrue = true;
        }
        if(isTrue = true){
          return data.name.toLowerCase().indexOf(search)>-1 ||
        data.email.toLowerCase().indexOf(search)>-1 ||
        data.phone.toString().toLowerCase().indexOf(search)>-1||
        data.password.toLowerCase().indexOf(search)>-1;
        }
      }    
      })
    }

    return value;
  }

}
