$(document).ready(function () {
    $('#calculateBtn').click(function () {
        // Clear previous error messages
        $('#error-message').hide();
        $('#total').val('');

        // Get the hours input
        var hours = $('#hours').val();

        // Validate input
        if (hours === '' || isNaN(hours) || hours <= 0) {
            $('#error-message').text('Please enter a valid positive number for hours.').show();
            return;
        }

        // Calculate total
        var hourlyRate = 50.00;
        var total = hours * hourlyRate;

        // Display result
        $('#total').val('$' + total.toFixed(2));
    });

    // Clear error on input change
    $('#hours').on('input', function () {
        $('#error-message').hide();
    });
});