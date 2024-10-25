import moment from 'moment';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators {
  static isValidDate(): ValidatorFn {
    return () => null
  }
}
