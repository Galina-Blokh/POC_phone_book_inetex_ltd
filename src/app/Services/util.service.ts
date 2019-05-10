import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

static getRequiredPatternError(fc: FormControl, requiredMsg: string, patternMsg: string): string{
  if (fc.hasError('required')){return requiredMsg;}
  if (fc.hasError('pattern')){return patternMsg;}
  return '';
}
}
