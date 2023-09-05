// Default selected icon is bike
selected = 'Bike'
locations = locations_with_bikes
const bikeIcon = document.getElementById("bike-icon");
bikeIcon.classList.add("selected");
const scooterIcon = document.getElementById("scooter-icon");
const service = document.getElementById("service");
const price = document.getElementById("cost");
service.innerHTML = "Service Fee: $0." + bike_service_fee
price.innerHTML = "Cost per minute: $0." + bike_cost

// When bike icon is clicked
bikeIcon.addEventListener("click", () => {
    if (selected == 'Bike')
        return;
    locations = locations_with_bikes
    removeMarkers()
    addMarkers()
    service.innerHTML = "Service Fee: $0." + bike_service_fee
    price.innerHTML = "Cost per minute: $0." + bike_cost
    bikeIcon.classList.add("selected");
    scooterIcon.classList.remove("selected");
    selected = 'Bike'
});

// When scooter icon is clicked
scooterIcon.addEventListener("click", () => {
    if (selected == 'Scooter')
        return;
    locations = locations_with_scooters
    removeMarkers()
    addMarkers()
    service.innerHTML = "Service Fee: $0." + scooter_service_fee
    price.innerHTML = "Cost per minute: $0." + scooter_cost

    scooterIcon.classList.add("selected");
    bikeIcon.classList.remove("selected");
    selected = 'Scooter'
});

//AJAX POST REQUEST: CREATE ORDER
function createOrder(){
    fetch('/create_order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
          username: username,
          vehicle_type: selected,
          loc_id: loc_id
        })
      }).then(function(response) {
        if (response.ok) {
          window.location.href = success_url; // Redirect to the success page
        } else {
          // Handle errors
        }
      }).catch(function(error) {
        // Handle errors
      });
}

function loginEvent(){
  window.location.href = login_url;
}