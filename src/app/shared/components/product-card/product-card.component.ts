import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../models/products.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: IProduct;
  @Output() addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  public addItemToCart(product: IProduct): void {
    this.addToCart.emit(product);
  }

  public viewProduct(): void {

  }
}
