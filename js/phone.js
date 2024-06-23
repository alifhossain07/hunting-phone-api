const loadPhone = async (searchText,isShowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();

    const phones = data.data;
    // console.log(data.data);
    displayPhones(phones,isShowAll);
}


const displayPhones =(phones, isShowAll)=> {
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


if(!isShowAll)
  {
    phones = phones.slice(0,10);
  }




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
                   <div class="card-actions justify-center">
                     <button onclick ="handleShowDetail('${phone.slug}');show_details_modal.showModal() " class="btn first-letter:btn-primary">Show Details</button>
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
const handleSearch = (isShowAll) =>{
  toggleLoading(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText,isShowAll);

    
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
  
// handle show all
const handleShowAll = () =>
  {
    handleSearch(true);
  }

// loadPhone();

// Modal
const handleShowDetail = async (id) =>
  {
    console.log("clicked" , id);
// load Single Phone Data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    console.log(data);
    const phone = data.data;
    showPhoneDetails(data);


    

  }

  const showPhoneDetails = (phone) => {
    console.log(phone);
    // show the modal
    show_details_modal.showModal();
  }

