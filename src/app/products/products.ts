import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {

  // Cart state (Bonus: cart counter & total price)
  cartCount = 0;
  cartTotal = 0;
  cartItems: { name: string; price: number; emoji: string }[] = [];

  // Selected category filter (Bonus: category filter)
  selectedCategory = 'All';

  categories = ['All', 'Running', 'Casual', 'Formal', 'Sandals'];

  // Product array with name, price, available, category, emoji
  products = [
    { name: 'AirStride Pro',       price: 4299,  available: true,  category: 'Running', emoji: '👟' },
    { name: 'UrbanWalk Classic',   price: 5799,  available: true,  category: 'Casual',  emoji: '🥾' },
    { name: 'ElegantStep Heels',   price: 2999,  available: false, category: 'Formal',  emoji: '👠' },
    { name: 'BreezySlide Max',     price: 1499,  available: true,  category: 'Sandals', emoji: '🩴' },
    { name: 'Oxford Elite',        price: 6499,  available: true,  category: 'Formal',  emoji: '👞' },
    { name: 'CloudFlat Loafer',    price: 2199,  available: false, category: 'Casual',  emoji: '🥿' },
    { name: 'TrailBlazer X',       price: 3899,  available: true,  category: 'Running', emoji: '👟' },
    { name: 'SummerBreeze Slip',   price: 999,   available: true,  category: 'Sandals', emoji: '🩴' },
  ];

  // Bonus: Category filter
  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

  // Event binding: Add to Cart
  addToCart(product: { name: string; price: number; available: boolean; emoji: string }) {
    if (!product.available) return;
    this.cartCount++;
    this.cartTotal += product.price;
    this.cartItems.push({ name: product.name, price: product.price, emoji: product.emoji });
    alert(`🛒 ${product.name} added to cart!\nCart total: ₱${this.cartTotal.toLocaleString()}`);
  }
}