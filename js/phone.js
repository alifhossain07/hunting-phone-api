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

// display show all button if there are more than 12 phones
const showAllContainer = document.getElementById('show-all-container');
if(phones.length > 12)
  {
    showAllContainer.classList.remove('hidden');
  }
else{
  showAllContainer.classList.add('hidden');
}



phones = phones.slice(0,10);



    phones.forEach(phone => {
        // console.log(phone);
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
    });
    // hide loading Spinner
    toggleLoading(false);

}
// handle Search Button
const handleSearch = () =>{
  toggleLoading(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);

    
}

const toggleLoading = (isLoading) =>{

  const loadingSpinner = document.getElementById('spinner');
  if(isLoading == true){
    loadingSpinner.classList.remove('hidden');
  }
  else
  {
    loadingSpinner.classList.add('hidden');
  }
  }
  


// loadPhone();



