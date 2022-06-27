
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <!--CSS -->
  <link rel="stylesheet" href="style.css">
   <!-- Alpinejs -->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <title>Document</title>
</head>

<body>
 

<div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>

  <div class="Bdesign" x-data="{small:0, medium:0, large:0, Grandtotal:0, get total(){ return (this.small * 48.99 + this.medium * 78.99 + this.large * 114.99 ).toFixed(2)}, GrandTotal:0, checkout: false, paid:''}">
    <div>
      <h1 class="section-header" style="text-align: center;">Perfect Pizza</h1>
    </div>

    <div>
      <h3 class="section-header" style="text-align: center;">Pizza Orders</h3>
    </div>
   
    <div class="cart" x-show="small != 0 || medium != 0 || large != 0">

      <template x-if="small > 0">
        <div class="small-cart">
          Small:
          <template x-if="!checkout">
            <button class="Mdesign W Bdesign" @click="small++">+</button> </template
          ><span x-text="small"></span
          ><template x-if="!checkout"
            ><button class="Mdesign Y Bdesign" @click="small--">-</button></template
          >
          <span>Price: R<span x-text="(small * 48.99).toFixed(2)"></span></span>
        </div>
      </template>

      <template x-if="medium > 0">
        <div class="medium-cart">
          medium:
          <template x-if="!checkout">
            <button class="Mdesign W Bdesign" @click="medium++">+</button> </template
          ><span x-text="medium"></span
          ><template x-if="!checkout"
            ><button class="Mdesign Y Bdesign" @click="medium--">-</button></template
          >
          <span>Price: R<span x-text="(medium * 79.99).toFixed(2)"></span></span>
        </div>
      </template>

      <template x-if="large > 0">
        <div class="large-cart">
          Large:
          <template x-if="!checkout">
            <button class="Mdesign W Bdesign" @click="large++">+</button> </template
          ><span x-text="large"></span
          ><template x-if="!checkout"
            ><button class="Mdesign Y Bdesign" @click="large--">-</button></template
          >
          <span>Price: R<span x-text="(large * 114.99).toFixed(2)"></span></span>
        </div>
        <span>Grand total: R<span x-text="((small * 48.99) + (medium * 79.99) + (large * 114.99)).toFixed(2)"></span></span>
      </template>

      <!-- <template x-if="!checkout"
      > <span>Grand total: R<span x-text="(large * 114.99).toFixed(2)"></span></span></template> -->

        <template x-if="!checkout">
          <button class="Mdesign AW Bdesign" @click="checkout=!checkout">Checkout</button>
        </template>
        <template x-if="checkout">
          <label
            >Amount received from customer: R<input
              type="number"
              min="0"
              step="0.01"
              x-model="paid"
          /></label>
        </template>
        <template x-if="paid == total && checkout">
            <!-- <br> -->
          <span>
            <div style="color: green">Successful Payment! </div>
            <button class="Mdesign AW Bdesign" @click="small=0; medium=0; large=0; checkout=false;">
              Complete Order
            </button>
          </span>
        </template>
        <template x-if="(parseInt(paid) < total && paid != total && checkout)">
            <!-- <br> -->
          <span>
            <div style="color: red"><h2> Insufficient Funds! </h2></div>
            <button class="Mdesign AW Bdesign" @click="small=0; medium=0; large=0; checkout=false;">
              Cancel order
            </button>
          </span>
        </template>
        <template x-if="parseInt(paid) > total && checkout">
          <span>
            <div style="color: green">
                <br>
               
              Successful Payment, Here's your change: R<span
                x-text="(parseInt(paid) - total).toFixed(2)"
              ></span>
            </div>
            <button class="Mdesign AW Bdesign" @click="small=0; medium=0; large=0; checkout=false; paid=''"
            >
              Complete the Order
            </button>
          </span>
        </template>

    </div>
  

<div class="container mt-5">
      </div>
    <div class="specials">
      <div class="medium">
        <img src="med pizza.png"
          alt="" width="500" height="100">
        <h2>Medium Pizza</h2>
        <h3>R78.99</h3>
        <i>
          medium margeritha pizza with 3 toppings max.
          2 or less meat topping.
          3 or less other toppings.
        </i>

        <div>
          <button class="Mdesign W Bdesign" @click="medium++">Order Medium</button>
        </div>
      </div>
      <div class="large">
        <img src="lrg pizza.png"
          alt=""width="500" height="100">
        <h2>Large Pizza</h2>
        <h3>R99.99</h3>
        <i>
          large margeritha pizza with 3 toppings max.
          3 meat toppings max.
          3 or less other toppings.
        </i>
        <div>
          <button class="Mdesign W Bdesign" @click="large++">Order large</button>
        </div>
      </div>
      <div class="small">
        <img src="sml pizza.png"
          alt="" width="700" height="100">
        <h2>Small Pizza</h2>
        <h3>R59.99</h3>
        <i>
         
            small pizza with 3 toppings
            1 meat topping.
            3 or less other toppings.
   
        </i>

        <div>
          <button class="Mdesign W Bdesign" @click="small++">Order Small</button>
        </div>

      </div>
    </div>


    <div class="footer">
      <div class="contact">
        <strong>Contact us at:</strong>
        (021)-541-1000

        <strong>twitter /fb /insta </strong> @perfectpizza
      </div>
      <div class="address">
        Pizza Plaza
        <br>
        Dough Road
        <br>
        Base Town
        <br>
        7890
      </div>
    </div>
  </div>



  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
</body>

</html>











.footer {
    display: flex;
  }
 
  .footer div {
    flex: 1;
  /*   border: 1px solid;
     */  margin-top: 1em;
    padding: 1em;
    background-color: #fec89a;
  }
 
 
  @media (min-width: 768px){
 
    .specials {
      display: flex;
    }
   

  }
 
  .section-header{
    text-align: center;
  }


  .Mdesign{
    font-size:22px;
    border-width:2px;
    border-style:solid;
    text-decoration:none;
    padding-left:30px;
    padding-right:30px;
    border-radius:40px;
  }
 
  .Fdesign{
    font-family: 'Lobster', cursive;
    color:white;
  }
 
  .Bdesign{
    font-family: 'Amatic SC', cursive;
  }
 
  .S{
    background-color:#EC407A;
    border-color:#F8BBD0;
    color:#F8BBD0;
  }
 
  .W{
    background-color:#42A5F5;
    border-color:#BBDEFB;
    color:#BBDEFB;
  }
 
  .AW{
    background-color:#009688;
    border-color:#80CBC4;
    color:#80CBC4;
  }
 
  .Soypcw{
    background-color:#FFEB3B;
    border-color:#FFF9C4;
    color:#FFF9C4;
  }
 
  .Y{
    background-color:#621822;
    border-color:#c4bf94;
    color:#FFF9C4;
  }
 
 
  






