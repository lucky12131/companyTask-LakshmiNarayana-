import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';
import { reject } from 'q';

export class UniqueUser{
 
    static shouldBeUnique(username:AbstractControl):ValidationErrors | null{
        
        let userkey = [];
 
        for (var key in localStorage){
            userkey.push(key);
        }

        if(userkey.indexOf(username.value) !== -1) {
             return {shouldBeUnique:true}
        }
        return null;
    }
 
}