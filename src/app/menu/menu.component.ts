import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
//interface Iproduto {nome: String, preco: Number}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  textoBotao = 'este texto eh do botao';
  email = 'teste@mail.com';
  emailEnviado = false;

 // qtdeProdutos: number = 200;  
  produtos: any;


  constructor(
    //public produtos: Array <any>,       
    
    private productService: ProductService
  ) { }

  ngOnInit()  { 
    // this.produtos = []
    // this.produtos.push({nome:"produtoXYZ", preco:100})
    // this.produtos.push({nome:"produtoABC", preco:222})
    // this.produtos.push({nome:"produtoHGT", preco:333})
    // this.produtos.push({nome:"produtoLGBT+", preco:333})
    // this.produtos.push({nome:"produtoSBT", preco:12})
    // this.produtos.push({nome:"produtoTHC", preco:420})
    // this.produtos.push({nome:"produtoCBD", preco:433})
    // this.produtos.push({nome:"produtoTABACO", preco:63})
    
     this.productService.getProducts().subscribe(
       (data) => {
         console.log(data)
         this.produtos = data
         console.log(data)
       },
       (error) => {
         console.log(error)
       }
     );
  }

  getQtdeProdutos(): number{
    return this.produtos.length;
  }

  onSubmitBotao(){
    this.textoBotao = "Clicou!!";
    this.emailEnviado = true

  }
  onEmailEnter(event: Event){
    console.log(event)
    this.email = (<HTMLInputElement>event.target).value;
  }

  //metodo para o ngStyle
 /* getCor(){
    if(this.emailEnviado){
      return 'green'
    }else{
      return 'yellow'
    }
  }*/



}
