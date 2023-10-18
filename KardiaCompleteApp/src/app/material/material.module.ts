import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialComponents: any[] = [
  MatSelectModule,
  MatFormFieldModule
]



@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
