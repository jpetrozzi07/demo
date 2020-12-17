import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {DataService} from '../../shared/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  public product: any = {};

  constructor(private route:ActivatedRoute, 
              private dataSvc: DataService,
              private location: Location) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
  }

  onGoBack(): void {
    this.location.back();
  }

}
