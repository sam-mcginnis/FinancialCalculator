var refinedDate;

$(function () {
    // INITIALIZE DATEPICKER PLUGIN
    $('.datepicker').datepicker({
        clearBtn: true,
        format: "mm/dd"
    });


    // FOR DEMO PURPOSE
    $('#reservationDate').on('change', function () {
        refinedDate = $('#reservationDate').val();
    });
});