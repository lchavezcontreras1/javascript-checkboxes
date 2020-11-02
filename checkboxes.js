$(document).ready(
    function () {
        // event handlers

        $(":checkbox").change(updateOrder);
        $("form").submit(placeOrder);

        function updateOrder() {
            // jQuery, get me all the inputs where the name is "soap"
            // that are checked
            var checkedBoxes = $("input[name=soap]:checked");

            // Update the button text with the number ordered
            $("#quantity").text(checkedBoxes.length);
        }

        function placeOrder(event) {
            // Don't actually submit the form!
            // Stops the flashing/resetting
            // event.preventDefault();

            // jQuery, get me every <input> where the name is "soap"
            // that are checked
            var checkedBoxes = $("input[name=soap]:checked");

            // Declare a variable to hold the subtotal
            var subtotal = 0;
            // Declare a variable to hold the soap names
            var soapNames = "";

            // For each checked box...
            checkedBoxes.each(function () {
                // Get the "data-price" attribute
                // jQuery converts this to a number -- hooray!!
                subtotal += $(this).data("price");
                // Also get the value attribute of the checkbox
                soapNames += $(this).val();
                soapNames += "<br>";
            });

            // jQuery, get me every <input> where the name is "shipping"
            // that are checked (should be only one because they are radio
            // buttons) and get its "data-shipping-fee" attribute
            var shipping = $("input[name=shipping]:checked").data("shipping-fee");

            // Declare a variable for the grand total
            var orderTotal = subtotal + shipping;

            // Put data on the screen
            // Using .html allows you to output tags to be rendered
            $("#itemsOutput").html(soapNames);
            // 2 decimal places for amounts
            $("#subtotalOutput").text(subtotal.toFixed(2));
            $("#shippingOutput").text(shipping.toFixed(2));
            $("#orderTotalOutput").text(orderTotal.toFixed(2));
        }

    });