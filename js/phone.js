const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();

    const phones = data.data;
    // console.log(data.data);
    displayPhones(phones);
}


const displayPhones = phones => {
// console.log(phones);

const phoneContainer = document.getElementById('phone-container');
phoneContainer.textContent = " ";



    phones.forEach(phone => {
        console.log(phone);
        // create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 p-4 mb-5  bg-gray-100 shadow-xl`;
        // Set innerHTML
        phoneCard.innerHTML =`
          <figure><img src="${phone.image}" alt="Shoes" /></figure>
                 <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                   <p>If a dog chews shoes whose shoes does he choose?</p>
                   <div class="card-actions justify-end">
                     <button class="btn first-letter:btn-primary">Buy Now</button>
                      </div>
                    </div>
        `
        // append child
        phoneContainer.appendChild(phoneCard);
    })

}
// handle Search Button
const handleSearch = () =>{
  const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

// loadPhone();



