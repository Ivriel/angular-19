import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CurrencyConverterPipe } from '../../pipe/currency-converter.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,CurrencyConverterPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit, OnDestroy {
  title: string = 'f0rgotten'
  name: string = 'John Doe'
  today: Date = new Date()
  amount:number = 10000
  amountCustom:number = 100000

  currentTime: Date = new Date()
  private intervalId: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) { // agar hanya berjalan di client side
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      try {
        // update waktu setiap satu detik
        this.intervalId = setInterval(() => {
          try {
            this.currentTime = new Date()
          } catch (error) {
            console.error('Error updating time:', error)
            this.clearInterval()
          }
        }, 1000)
      } catch (error) {
        console.error('Error in ngOnInit:', error)
      }
    }
  }

  ngOnDestroy(): void {
    this.clearInterval()
  }

  private clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }
}
