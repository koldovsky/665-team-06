class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector('.artic');
    this.productService = new ProductsService();
    this.sortDirection = 'ascending';
    this.productService
      .getProducts()
      .then(() => this.renderProducts())
      .then(() => this.addEventListeners()); 
    document.querySelector('.artic').addEventListener('keydown', async () => {
      await this.renderProducts();
      this.addEventListeners();
    });   
  }
  async renderProducts() {
    const searchInput = document.querySelector('.artic');
    let productListDomString = '';
    const products = await this.productService.getProducts();
    [...products]
      .forEach(product => {
      productListDomString += `
                  <section class="card_product">
                    <img class="card-img-top" src="${product.image}" 
                        alt="${product.title}">
                    <div class="cardInfo">
                      <h5 class="cardTitle">${product.title}</h5>
                       <p class="cardPrice">$${product.price}</p>
                      <button class="buy , btn btn-danger" data-id="${product.id}">
                          Buy
                        </button>
                      </div>
                    </section>
                   `;
    });
    this.container.innerHTML = productListDomString;
  }
  async addEventListeners() {
    document
      .querySelectorAll(
        '.card_product button.buy, #productInfoModal button.buy'
      )
      .forEach(button =>
        button.addEventListener('click', event =>
          this.handleProductBuyClick(event)
        )
      );
    document.querySelector('.sort-asc').addEventListener('click', async () => {
        this.sortDirection = 'ascending';
        await this.renderProducts();
        this.addEventListeners();
    });
    document.querySelector('.sort-desc').addEventListener('click', async () => {
        this.sortDirection = 'descending';
        await this.renderProducts();
        this.addEventListeners();
    });
  }
  async handleProductInfoClick(event) {
    const button = event.target; // Button that triggered the modal
    const id = button.dataset.id; // Extract info from data-* attributes
    const product = await this.productService.getProductById(id);
    const modal = document.querySelector('#productInfoModal');
    const productImg1 = modal.querySelector('.modal-body .image-one');
    productImg1.setAttribute('src', product.additionalImages[0]);
    productImg1.setAttribute('alt', product.additionalImages[0]);
    const productImg2 = modal.querySelector('.modal-body .image-two');
    productImg2.setAttribute('src', product.additionalImages[1]);
    productImg2.setAttribute('alt', product.additionalImages[1]);
    modal.querySelector('.modal-body .card-title').innerText = product.title;
    modal.querySelector('.modal-body .card-text').innerText = product.description;
    const btnBuy = modal.querySelector('button.buy');
    btnBuy.innerText = `${product.price} - Buy`;
    btnBuy.dataset.id = id;
  }
  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert('Product added to cart');
  }
}
