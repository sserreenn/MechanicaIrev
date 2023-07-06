import { Component, OnInit } from '@angular/core';
import { htmlPrefilter } from 'jquery';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  dtOptions: DataTables.Settings = {};

  ngOnInit() {
    var table = $('#products').DataTable({
      pagingType: 'full_numbers',
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
      ],
      ajax: '../assets/data/products.json',
      columns: [
        {
          title: 'ID',
          data: 'id',
        },
        {
          title: 'Title',
          data: 'title',
        },
        {
          title: 'Description',
          data: 'description',
        },
        {
          title: 'Price',
          data: 'price',
        },
        {
          defaultContent:
            "<button  type='button' id='editButton' class='btn btn-success'data-bs-toggle='modal' data-bs-target='#exampleModal' > Düzenle </button>",
        },
        {
          defaultContent:
            "<button id='deleteButton' class='btn btn-warning' data-bs-toggle='modal' data-bs-target='#exampleModal' > Sil </button>",
        },
      ],
      initComplete: function (settings, json) {
        var _currClassRef = this;

        $('#products tbody td').unbind();

        $('#products tbody td').on('click', 'button', function () {
          var tr = $(this).closest('tr');
          var row = table.row(tr);
          var rowData: any = row.data();

          if (this.id == 'editButton') {
          } else if (this.id == 'deleteButton') {
          }
        });
      },
    });
  }
}
