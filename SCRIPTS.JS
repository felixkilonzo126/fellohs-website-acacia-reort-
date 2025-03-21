document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookingForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let roomType = document.getElementById("roomType").value;
        let contactMethod = document.getElementById("contactMethod").value;

        // Simple validation
        if (name === "" || phone === "" || email === "" || roomType === "" || contactMethod === "") {
            alert("Room is already booked or fields are missing.");
            return;
        }

        // Simulated success message (Replace this with actual booking logic)
        alert("Booking Successful!");
        
        // Optionally, reset the form
        document.getElementById("bookingForm").reset();
    });
});


        document.getElementById("bookingForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page refresh

            // Get form values
            let name = document.getElementById("name").value;
            let phone = document.getElementById("phone").value;
            let email = document.getElementById("email").value;
            let hallType = document.getElementById("hallType").value;
            let contactMethod = document.getElementById("contactMethod").value;

            // Validate inputs
            if (!name || !phone || !email || !hallType || !contactMethod) {
                alert("The hall is already booked or some fields are missing.");
                return;
            }

            // Simulated success message
            alert("Booking Successful!");

            // Optionally, reset the form
            document.getElementById("bookingForm").reset();
        });

        