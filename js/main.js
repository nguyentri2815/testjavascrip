$(function () {

    // ========================================================
    //data mẫu
    var data = {
        products: [
        {
            handle: "ega-botconn",
            id: 1,
            title: "egaBotConn",
            vendor: "EGANY",
            tags:
            "platform__cross-platform, type__apps, doc__ega-botconn, demo__https://egany.com",
            image: {
            id: 11,
            src: "https://picsum.photos/id/14/600",
            },
            variants: [
            {
                id: 111,
                sku: "egabotconn",
                price: "0",
                compare_at_price: "0",
                inventory_management: null,
                inventory_policy: "deny",
                inventory_quantity: 1,
            },
            ],
        },
        {
            handle: "ega-shop",
            id: 2,
            title: "egaShop",
            vendor: "EGANY",
            tags:
            "platform__haravan_sapo_cross-platform, type__apps, doc__ega-shop, demo__https://egany.com",
            image: {
            id: 22,
            src: "https://picsum.photos/id/15/600",
            },
            variants: [
            {
                id: 222,
                sku: "egashop",
                price: "149000",
                compare_at_price: "199000",
                inventory_management: null,
                inventory_policy: "deny",
                inventory_quantity: 1,
            },
            ],
        },
        {
            handle: "ega-countdown",
            id: 3,
            title: "egaCountdown",
            vendor: "EGANY",
            tags:
            "platform__haravan_cross-platform, type__apps, doc__ega-countdown, demo__https://egany.com",
            image: {
            id: 33,
            src: "https://picsum.photos/id/16/600",
            },
            variants: [
            {
                id: 333,
                sku: "egabotconn",
                price: "99000",
                compare_at_price: "149000",
                inventory_management: "manual",
                inventory_policy: "allow",
                inventory_quantity: 0,
            },
            ],
        },
        {
            handle: "ega-salebox",
            id: 4,
            title: "egaSaleBox",
            vendor: "EGANY",
            tags:
            "platform__haravan_cross-platform, type__apps, doc__ega-salebox, demo__https://egany.com",
            image: {
            id: 44,
            src: "https://picsum.photos/id/14/600",
            },
            variants: [
            {
                id: 444,
                sku: "egasalebox",
                price: "99000",
                compare_at_price: "149000",
                inventory_management: "manual",
                inventory_policy: "allow",
                inventory_quantity: -1,
            },
            ],
        },
        {
            handle: "ega-cro",
            id: 5,
            title: "egaCRO",
            vendor: "EGANY",
            tags:
            "platform__haravan_cross-platform_sapo, type__apps, doc__ega-salebox, demo__https://egany.com",
            image: {
            id: 55,
            src: "https://picsum.photos/id/14/600",
            },
            variants: [
            {
                id: 555,
                sku: "egasalebox",
                price: "99000",
                compare_at_price: "149000",
                inventory_management: null,
                inventory_policy: "deny",
                inventory_quantity: 10,
            },
            ],
        },
        ],
    };
    //==========================================================================
    //render data
    var html = "";
    data.products.map((value, key) => {
        var priceNew=parseInt(value.variants[0].price);
        var price=parseInt(value.variants[0].compare_at_price);
        var sale=Math.ceil(priceNew/price*100);
        var salehtml=()=>{
            if(price!==0){
                return `<label class="pg-orange tt display-block" for="">${sale}%</label>`
            }else{
                return ""
            }
        }
        var saleprice=()=>{
            if(priceNew!==0){
                return `<span class="price-old">${price}Đ</span>`
            }else{
                return ""
            }
        }
        var quantity=()=>{
            if( value.variants[0].inventory_quantity==0 && value.variants[0].inventory_policy!="deny"){
                return `<label class="pg-green tt display-block" for="">không thể đặt hàng</label>`
            }else if(value.variants[0].inventory_policy=="allow"){
                return `<label class="pg-green tt display-block" for="">có thể đặt hàng </label>`
            
            }else{
                return ""
            }
        }
        var management=()=>{
            if(value.variants[0].inventory_management==null){
                return `<label class="pg-green tt display-block" for="">ko có kho</label>`
            }else{
                return `<label class="pg-green tt display-block" for=""> kho ${value.variants[0].inventory_management}</label>`
            }
        }
        var btnBuy=()=>{
            if( value.variants[0].inventory_quantity==0 && value.variants[0].inventory_policy!="deny"){
                return `<div class="product__desc-btncart d-flex">
                            <div class="stepper">
                                <input disabled class="form-control stepper-number" type="text" value="0" step="1" min="1" data-minimum="1">
                                <span>
                                    <button disabled class="fa fa-angle-up plus "></button>
                                    <button disabled class="fa fa-angle-down minus "></button>
                                </span>
                            </div>
                            <button disabled class="btn btn-cart" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <span>Add to Cart</span>
                            </button>
                        </div>
            `
            }else{
                return `
                    <div class="product__desc-btncart d-flex">
                        <div class="stepper">
                            <input class="form-control stepper-number" type="text" value="1" step="1" min="1" data-minimum="1">
                            <span>
                                <button class="fa fa-angle-up plus "></button>
                                <button class="fa fa-angle-down minus "></button>
                            </span>
                        </div>
                        <button class="btn btn-cart" data-toggle="modal" data-target=".bd-example-modal-lg">
                            <span>Add to Cart</span>
                        </button>
                    </div>
                `
            }
        }
        html +=`<div class="col-3 mb-4">
                    <div class="products__item">
                        <div class="product">
                            <div class="product__img" id="product__img">
                                <img class="img1" src="${value.image.src}" alt="">
                                <img class="img2" src="${value.image.src}" alt="">
                                <div class="product__img-search d-flex align-items-center justify-content-center"><a class="icon-tooltip" href="" title="Quickview" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fas fa-search-plus"></i><span class="tooltip">Quickview</span></a></div>
                                <div class="product__label --right">
                                    <label class="pg-orange tt display-block" for="">quantity: ${value.variants[0].inventory_quantity}</label>
                                    ${salehtml()}
                                    ${quantity()}
                                    ${management()}
                                </div>
                                <div class="product__label --left">
                                <label class="pg-orange tt display-block"> <b>${value.handle}</b></label>
                                </div>
                            </div>
                            <div class="product__caption">
                                <div class="product__desc-brand d-flex justify-content-between">
                                    <span class="brand-name">
                                        <a href="">${value.vendor}</a>
                                    </span>
                                    <span class="brand-name">
                                        <span>${value.variants[0].sku}</span>
                                    </span>
                                </div>
                                <div class="product__desc">
                                <h3 class="product__desc-title"><a href="">${value.title}</a></h3>
                                <div class="product__desc-price">
                                    <div class="price">
                                        <span class="price-new">${priceNew}Đ</span>
                                        ${saleprice()}
                                    </div>
                                </div>
                                <div class="product__desc-btn d-flex align-items-center justify-content-between flex-wrap">
                                    ${btnBuy()}
                                </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            `
    });
    document.querySelector('#Featured').innerHTML=html;

  
    //=========================================================
    //click search
    $('.input-group-append').click(function(){
        var html=""
        var textSearch=$('.form-control').val().toLowerCase();
        console.log(textSearch);
        var dataSearch=data.products.filter(value=>value.title.toLowerCase()===textSearch);
        if(textSearch!=="" && dataSearch!==-1){
            dataSearch.map((value, key) => {
                var priceNew=parseInt(value.variants[0].price);
                var price=parseInt(value.variants[0].compare_at_price);
                var sale=Math.ceil(priceNew/price*100);
                var salehtml=()=>{
                    if(price!==0){
                        return `<label class="pg-orange tt display-block" for="">${sale}%</label>`
                    }else{
                        return ""
                    }
                }
                var saleprice=()=>{
                    if(priceNew!==0){
                        return `<span class="price-old">${price}Đ</span>`
                    }else{
                        return ""
                    }
                }
                var quantity=()=>{
                    if( value.variants[0].inventory_quantity==0 && value.variants[0].inventory_policy!="deny"){
                        return `<label class="pg-green tt display-block" for="">không thể đặt hàng</label>`
                    }else if(value.variants[0].inventory_policy=="allow"){
                        return `<label class="pg-green tt display-block" for="">có thể đặt hàng </label>`
                    
                    }else{
                        return ""
                    }
                }
                var management=()=>{
                    if(value.variants[0].inventory_management==null){
                        return `<label class="pg-green tt display-block" for="">ko có kho</label>`
                    }else{
                        return `<label class="pg-green tt display-block" for=""> kho ${value.variants[0].inventory_management}</label>`
                    }
                }
                var btnBuy=()=>{
                    if( value.variants[0].inventory_quantity==0 && value.variants[0].inventory_policy!="deny"){
                        return `<div class="product__desc-btncart d-flex">
                                    <div class="stepper">
                                        <input disabled class="form-control stepper-number" type="text" value="0" step="1" min="1" data-minimum="1">
                                        <span>
                                            <button disabled class="fa fa-angle-up plus "></button>
                                            <button disabled class="fa fa-angle-down minus "></button>
                                        </span>
                                    </div>
                                    <button disabled class="btn btn-cart" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                    `
                    }else{
                        return `
                            <div class="product__desc-btncart d-flex">
                                <div class="stepper">
                                    <input class="form-control stepper-number" type="text" value="1" step="1" min="1" data-minimum="1">
                                    <span>
                                        <button class="fa fa-angle-up plus "></button>
                                        <button class="fa fa-angle-down minus "></button>
                                    </span>
                                </div>
                                <button class="btn btn-cart" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        `
                    }
                }
                html +=`<div class="col-3 mb-4">
                            <div class="products__item">
                                <div class="product">
                                    <div class="product__img" id="product__img">
                                        <img class="img1" src="${value.image.src}" alt="">
                                        <img class="img2" src="${value.image.src}" alt="">
                                        <div class="product__img-search d-flex align-items-center justify-content-center"><a class="icon-tooltip" href="" title="Quickview" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fas fa-search-plus"></i><span class="tooltip">Quickview</span></a></div>
                                        <div class="product__label --right">
                                            <label class="pg-orange tt display-block" for="">quantity: ${value.variants[0].inventory_quantity}</label>
                                            ${salehtml()}
                                            ${quantity()}
                                            ${management()}
                                        </div>
                                        <div class="product__label --left">
                                        <label class="pg-orange tt display-block"> <b>${value.handle}</b></label>
                                        </div>
                                    </div>
                                    <div class="product__caption">
                                        <div class="product__desc-brand d-flex justify-content-between">
                                            <span class="brand-name">
                                                <a href="">${value.vendor}</a>
                                            </span>
                                            <span class="brand-name">
                                                <span>${value.variants[0].sku}</span>
                                            </span>
                                        </div>
                                        <div class="product__desc">
                                        <h3 class="product__desc-title"><a href="">${value.title}</a></h3>
                                        <div class="product__desc-price">
                                            <div class="price">
                                                <span class="price-new">${priceNew}Đ</span>
                                                ${saleprice()}
                                            </div>
                                        </div>
                                        <div class="product__desc-btn d-flex align-items-center justify-content-between flex-wrap">
                                            ${btnBuy()}
                                        </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
            });
            document.querySelector('#Featured').innerHTML=html;
        }else{
            data.products.map((value, key) => {
                var priceNew=parseInt(value.variants[0].price);
                var price=parseInt(value.variants[0].compare_at_price);
                var sale=Math.ceil(priceNew/price*100);
                var salehtml=()=>{
                    if(price!==0){
                        return `<label class="pg-orange tt display-block" for="">${sale}%</label>`
                    }else{
                        return ""
                    }
                }
                var saleprice=()=>{
                    if(priceNew!==0){
                        return `<span class="price-old">${price}Đ</span>`
                    }else{
                        return ""
                    }
                }
                var quantity=()=>{
                    if( value.variants[0].inventory_quantity==0 && value.variants[0].inventory_policy!="deny"){
                        return `<label class="pg-green tt display-block" for="">không thể đặt hàng</label>`
                    }else if(value.variants[0].inventory_policy=="allow"){
                        return `<label class="pg-green tt display-block" for="">có thể đặt hàng </label>`
                    
                    }else{
                        return ""
                    }
                }
                var management=()=>{
                    if(value.variants[0].inventory_management==null){
                        return `<label class="pg-green tt display-block" for="">ko có kho</label>`
                    }else{
                        return `<label class="pg-green tt display-block" for=""> kho ${value.variants[0].inventory_management}</label>`
                    }
                }
                var btnBuy=()=>{
                    if( value.variants[0].inventory_quantity==0 && value.variants[0].inventory_policy!="deny"){
                        return `<div class="product__desc-btncart d-flex">
                                    <div class="stepper">
                                        <input disabled class="form-control stepper-number" type="text" value="0" step="1" min="1" data-minimum="1">
                                        <span>
                                            <button disabled class="fa fa-angle-up plus "></button>
                                            <button disabled class="fa fa-angle-down minus "></button>
                                        </span>
                                    </div>
                                    <button disabled class="btn btn-cart" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                    `
                    }else{
                        return `
                            <div class="product__desc-btncart d-flex">
                                <div class="stepper">
                                    <input class="form-control stepper-number" type="text" value="1" step="1" min="1" data-minimum="1">
                                    <span>
                                        <button class="fa fa-angle-up plus "></button>
                                        <button class="fa fa-angle-down minus "></button>
                                    </span>
                                </div>
                                <button class="btn btn-cart" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        `
                    }
                }
                html +=`<div class="col-3 mb-4">
                            <div class="products__item">
                                <div class="product">
                                    <div class="product__img" id="product__img">
                                        <img class="img1" src="${value.image.src}" alt="">
                                        <img class="img2" src="${value.image.src}" alt="">
                                        <div class="product__img-search d-flex align-items-center justify-content-center"><a class="icon-tooltip" href="" title="Quickview" data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fas fa-search-plus"></i><span class="tooltip">Quickview</span></a></div>
                                        <div class="product__label --right">
                                            <label class="pg-orange tt display-block" for="">quantity: ${value.variants[0].inventory_quantity}</label>
                                            ${salehtml()}
                                            ${quantity()}
                                            ${management()}
                                        </div>
                                        <div class="product__label --left">
                                        <label class="pg-orange tt display-block"> <b>${value.handle}</b></label>
                                        </div>
                                    </div>
                                    <div class="product__caption">
                                        <div class="product__desc-brand d-flex justify-content-between">
                                            <span class="brand-name">
                                                <a href="">${value.vendor}</a>
                                            </span>
                                            <span class="brand-name">
                                                <span>${value.variants[0].sku}</span>
                                            </span>
                                        </div>
                                        <div class="product__desc">
                                        <h3 class="product__desc-title"><a href="">${value.title}</a></h3>
                                        <div class="product__desc-price">
                                            <div class="price">
                                                <span class="price-new">${priceNew}Đ</span>
                                                ${saleprice()}
                                            </div>
                                        </div>
                                        <div class="product__desc-btn d-flex align-items-center justify-content-between flex-wrap">
                                            ${btnBuy()}
                                        </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
            });
            document.querySelector('#Featured').innerHTML=html;
        }
    })

    // =====================================
    // + -
    const product = {
        init: function () {
        this.numberProduct();
        },
        numberProduct: function () {
        var count = 1;
        var plus = document.querySelectorAll(".plus");
        var minus = document.querySelectorAll(".minus");
        plus.forEach((element) => {
            element.addEventListener("click", function () {
            var stepNumber = this.parentNode.previousElementSibling;
            count++;
            stepNumber.value = count;
            });
        });
        minus.forEach((element) => {
            element.addEventListener("click", function () {
            var stepNumber = this.parentNode.previousElementSibling;
            if (count > 1) {
                count--;
                stepNumber.value = count;
            }
            });
        });
        },
    };
    product.init();

});
