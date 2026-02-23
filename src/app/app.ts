import { Component } from '@angular/core';
import { ProductsComponent } from './products/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `
    <nav class="navbar">
      <div class="nav-brand">
        <span class="brand-icon">👟</span>
        <span class="brand-name">SoleStep Shop</span>
      </div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="nav-cart">🛒 Cart</div>
    </nav>

    <app-products></app-products>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <span class="brand-icon">👟</span>
          <span class="brand-name">SoleStep Shop</span>
          <p>Your trusted footwear destination.<br/>Every step, a statement.</p>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Cagayan de Oro, Northern Mindanao</p>
          <p>📞 +63 912 345 6789</p>
          <p>✉️ hello&#64;solestep.ph</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 SoleStep Shop. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './app.css'
})
export class App {
  title = 'SoleStep Shop';
}