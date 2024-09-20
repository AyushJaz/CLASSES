let singleOrder
let allOrder
let container = document.getElementById('container');
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((res) => {
        console.log(res);
        allOrder = res.products

        for (let i = 0; i < res.products.length; i++) {
            // let stock = (res.products[i].availabilityStatus == 'Low Stock') ? 'red' : 'green';
            // let reviewsArray = res.products[i].reviews;
            // let reviews = "";
            // for (let j = 0; j < reviewsArray.length; j++) {
            //     let date = reviewsArray[j].date.slice(0, 10);
            //     let stars ="";
            //     for (let k = 0; k < reviewsArray[j].rating; k++) { stars += `<i class="fa fa-solid fa-star"></i>` }
            //     reviews += `
            //         <li  class="reviews flex">
            //          <section class="user flex">
            //             <i class="fa-solid fa-user"></i>
            //          </section>
            //          <section class="commentsNRatings">
            //             ${reviewsArray[j].comment}
            //             <div class="flex"> 
            //             ${date} 
            //             <div><div class="stars">${stars}
            //             </div></div>
                        
            //             </div>
            //         </section>
            //         </li>
            //     `
            // }
            // let mainRatings="";
            // let k = 0;
            // for (let j = 1; j <= 5; j++) {
            //     console.log(Math.floor(res.products[i].rating));

            //     if (j <= Math.floor(res.products[i].rating)) {
            //         mainRatings += `<i class="fa fa-solid fa-star"></i>`
            //     }
            //     else if((5 - Math.floor(res.products[i].rating)) > 0 && k == 0)
            //     {
            //         mainRatings += `<i class="fa fa-star-half-o" aria-hidden="true"></i>`;
            //         k++;
            //     }
            //     else {
            //         mainRatings += `<i class="fa fa-solid fa-star grey"></i>`
            //     }

            // }
            container.innerHTML += `
             <div class="card-closed flex" >
                    <section class="left-closed">
                        <button class="heart icon" >
                            <i class="fa-solid fa-heart not-clicked"></i>
                        </button>
                       <button class="cart icon"><i class="fa-solid fa-cart-shopping not-clicked"></i></button>
                        <button id="buy">Buy Now</button>
                        <img src="${res.products[i].thumbnail}"
                            class="images" alt="${res.products[i].title
                }">
                       
                    </section>
                    <section class="right-closed" id="${i}" onClick="singleOrderCreator(${i} )">
                        <section class="top">
                            <h2 class="title">${res.products[i].title
                }</h2>
                            <p><div class="stars mainRatings">mainRatings
                                </div>
                                <sub>(${res.products[i].reviews.length})</sub>
                                </p>
                            <h3 class="price">$${res.products[i].price
                } </h3><sub> <s> $${(Math.round(100 * (eval((res.products[i].price) * (100 / (100 - res.products[i].discountPercentage))))) / 100)} </s></u> <em class="green">${res.products[i].discountPercentage}% off</em></sub>
                            <h3 class="availabilityStatus ">${res.products[i].availabilityStatus
                }</h3>
                        </section>
                        <section class="midle">
                            <p class="description
                            ">${res.products[i].description}.</p>
                            <h4 class="warrantyInformation
                            ">1 month warranty</h4>
                            <div class="returnPolicy flex">
                                 <div class="flex">
                                    <i class="fa-solid fa-right-left"></i>
                                    ${res.products[i].returnPolicy}
                                </div>
                                <div class="flex">
                                    <i class="fa-solid fa-truck-fast"></i>
                                     ${res.products[i].shippingInformation}
                                 </div>
                                 <div class="flex">
                                     <i class="fa-solid fa-lock"></i>
                                     Secure Transection
                                 </div>
                                 </div>
                            <h3>Reviews</h3>
                            <p class="ratings"> <div class="stars">mainRatings
                                </div> <sub>(${res.products[i].reviews.length})</sub></p>
                            <ul>
                            ...
                            </ul>
                        </section>
                        <section class="bottom">
                            <table>
                                <tr>
                                    <td>Product name</td>
                                    <td>${res.products[i].title}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>$${res.products[i].price}</td>
                                </tr>
                                <tr>
                                    <td>reviev</td>
                                    <td>mainRatings</td>
                                </tr>
                                <tr>
                                    <td>Item weight</td>
                                    <td>${res.products[i].weight}g</td>
                                </tr>
                                <tr>
                                    <td>Shipping info</td>
                                    <td>${res.products[i].shippingInformation}</td>
                                </tr>
                                <tr>
                                    <td>Dimension</td>
                                    <td>${res.products[i].dimensions.depth}D X ${res.products[i].dimensions.height}H X  ${res.products[i].dimensions.width}W (cm x cm x cm)</td>
                                </tr>
                            </table>
                        </section>
                    </section>
                </div>`;
        }
        let icon = document.getElementsByClassName('icon');
        for (let i = 0; i < icon.length; i++) {
            icon[i].addEventListener('click', () => {
                let child = Array.from(icon[i].children);
                let clList = child[0].classList;
                clList = Array.from(clList)
                if (clList.length === 3) {
                    clList.pop()
                }
                else {
                    clList.push('not-clicked')
                }
                icon[i].children[0].classList = "";
                for (let j = 0; j < clList.length; j++)
                    icon[i].children[0].classList += `${clList[j]} `;
            })
        }
        
       
    //     for (let i = 0; i < cardBottom.length; i++) 
    //         { 
    //           cardBottom[i].setAttribute("id",i)  
    //             cardBottom[i].addEventListener('click', (e,i) => {
    //            console.log(e.target,"mlk")

    //         singleOrderCreator(singleOrder)
    //     })
    // }
        // for (let i = 0; i < cardBottom.length; i++) {
        //     cardBottom[i].addEventListener('click', () => {
        //         console.log(i);
                
        //         cardContainer[i].classList = "card-open flex";
        //         cardBottom[i].classList="right-open";
        //         card[i].classList="left-open"
        //     })
        // }
        // let xMark = document.getElementsByClassName("fa-xmark");
        // for(let i=0;i<xMark.length;i++)
        // {
        //     xMark[i].addEventListener('click',()=>{
        //         cardOpen[i].classList="card-closed flex";
        //         cardDetails[i].classList="right-closed";
        //         cardthumbnail[i].classList="left-closed"
        //         cardBottom[i].addEventListener('click', () => {
        //         cardContainer[i].classList = "card-open flex";
        //         cardBottom[i].classList="right-open";
        //         card[i].classList="left-open"
        //     })
        //     })
        // }
    })




    function singleOrderCreator(i,mainRatings)
    {
        document.getElementById("popShadow").classList="popupdta";
        document.getElementById("popup").style.display="flex";

        let dta = allOrder[i]
        let popup=document.getElementById("popup");
        popup.innerHTML= `
        <section class="left-open">
            <button class="heart icon" >
                <i class="fa-solid fa-heart not-clicked"></i>
            </button>
           <button class="cart icon"><i class="fa-solid fa-cart-shopping not-clicked"></i></button>
            <button id="buy">Buy Now</button>
            <img src="${dta.thumbnail}"
                class="images" alt="${dta.title
    }">
           
        </section>
        <section class="right-open" >
        <i class="fa-solid fa-xmark" id="cross" ></i>
            <section class="top">
                <h2 class="title">${dta.title
    }</h2>
                <p><div class="stars mainRatings">${mainRatings}
                    </div>
                    <sub>(${dta.reviews.length})</sub>
                    </p>
                <h3 class="price">$${dta.price
    } </h3><sub> <s> $${(Math.round(100 * (eval((dta.price) * (100 / (100 - dta.discountPercentage))))) / 100)} </s></u> <em class="green">${dta.discountPercentage}% off</em></sub>
                <h3 class="availabilityStatus">${dta.availabilityStatus
    }</h3>
            </section>
            <section class="midle">
                <p class="description
                ">${dta.description}.</p>
                <h4 class="warrantyInformation
                ">1 month warranty</h4>
                <div class="returnPolicy flex">
                     <div class="flex">
                        <i class="fa-solid fa-right-left"></i>
                        ${dta.returnPolicy}
                    </div>
                    <div class="flex">
                        <i class="fa-solid fa-truck-fast"></i>
                         ${dta.shippingInformation}
                     </div>
                     <div class="flex">
                         <i class="fa-solid fa-lock"></i>
                         Secure Transection
                     </div>
                     </div>
                <h3>Reviews</h3>
                <p class="ratings"> <div class="stars">${mainRatings}
                    </div> <sub>(${dta.reviews.length})</sub></p>
                <ul>
                ....
                </ul>
            </section>
            <section class="bottom">
                <table>
                    <tr>
                        <td>Product name</td>
                        <td>${dta.title}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>$${dta.price}</td>
                    </tr>
                    <tr>
                        <td>reviev</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>Item weight</td>
                        <td>${dta.weight}g</td>
                    </tr>
                    <tr>
                        <td>Shipping info</td>
                        <td>${dta.shippingInformation}</td>
                    </tr>
                    <tr>
                        <td>Dimension</td>
                        <td>${dta.dimensions.depth}D X ${dta.dimensions.height}H X  ${dta.dimensions.width}W (cm x cm x cm)</td>
                    </tr>
                </table>
            </section>
        </section>
    `
      console.log(dta,"mlk")
      document.getElementById("cross").addEventListener('click',()=>{
        console.log("hello");
        document.getElementById("popShadow").classList="";
        document.getElementById("popup").style.display="none";
    })
    //   document.getElementsByClassName("card-closed")[dta].classList= "card-open flex"
    }
    
  