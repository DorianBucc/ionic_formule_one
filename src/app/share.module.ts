import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormuleTypeColorPipe } from './formule-type-color.pipe';

@NgModule({
  declarations: [FormuleTypeColorPipe],  // Declare the pipe
  imports: [CommonModule],              // Import necessary modules (CommonModule, etc.)
  exports: [FormuleTypeColorPipe]       // Export the pipe so other modules can use it
})
export class SharedModule {}
