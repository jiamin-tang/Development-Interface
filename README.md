# Development Interface

This is a furniture shopping app interface with live filtering and sorting functionality, and a shopping cart for adding/removing items and displaying the total price. It is created using React.js and React Bootstrap framework.

### Organization of Components

The general architecture of the app consists of three js files:

App.js contains the product list as an array of (key, value) pairs with 6 properties: name, color, category, price, quantity and src(used for displaying components of images).

FilteredList.js contains filtering and sorting methods and the Navbar component  with HTML buttons.

DisplayList.js contains HTML elements of the App layout and maps each product from App.js to an HTML element or component for rendering. It also contains aggregator methods which are used to generate the live shopping cart session.


### Data Passing Flow

The productList in App.js is passed to the FilteredList and DisplayList components as a prop.

OnSelectFilter/Sort functions are passed to the onSelect event handler of HTML buttons as eventKey.

MatchesFilter/Sort functions are called inside the built-in filter() and sort() function to display the corresponding items.

The functions of adding/removing items and handling quantities are called once there is a click on the button. The quantity of the items which needs to be updated are passed into the handleIncrement/Decrement function by assigning a new variable inheriting the cart state.

### State Changes Trigger

We track the state of the selected filtering/sorting category in FilteredList.js. Inside the constructor, three states are created and will change dynamically depending on the filter or the sorting method selected. 

When the user selects one of the options of the filtering category, onSelectFilterCategory() will be called and the eventKey will be passed to the function. The default state is All which displays items of all the categories. Similar flows also work for filtering color and sorting with a dropdown menu.

We also create states of cart and total price to keep track of the items in the shopping cart.  The quantity of items remaining in the cart are passed to the handleIncrement/Decrement function by a new variable newCart. After the operations of the newCart, we set the cart state as newCart to update the quantity of items in the cart.

When the user clicks on the add to cart button, if the item is not in the cart list, then it is appended to the list and the state total gets updated with addtoCart() function. If the user adds more of an item which is already in the cart, the quantity and total price gets updated accordingly by the handleIncrement() function. If the user removes the item from the cart, then the state cart is filtered without the item and the total price also gets updated. 
