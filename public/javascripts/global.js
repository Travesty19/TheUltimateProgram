// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

    // Username link click
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);

    // Add User button click
    $('#btnAddUser').on('click', addUser);

    // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {

    // Stick our user data array into a userlist variable in the global object
    userListData = data;

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.date + '">' + this.date + '</a></td>';
            tableContent += '<td>' + this.dayrating + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#userList table tbody').html(tableContent);
    });
};

// Show User Info
function showUserInfo(event) {

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
    var thisUserName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.date; }).indexOf(thisUserName);

    // Get our User Object
    var thisUserObject = userListData[arrayPosition];

    //Populate Info Box
    $('#llDate').text(thisUserObject.date);
    $('#llSleepStart').text(thisUserObject.sleepstart);
    $('#llSleepEnd').text(thisUserObject.sleepend);
    $('#llExerciseActivity').text(thisUserObject.exerciseactivity);
    $('#llExerciseTime').text(thisUserObject.exercisetime);
    $('#llDietBreakfastFood').text(thisUserObject.dietbreakfastfood);
    $('#llDietBreakfastHealthScore').text(thisUserObject.dietbreakfasthealthscore);
    $('#llDietBreakfastCost').text(thisUserObject.dietbreakfasthealthscore);
    $('#llDietLunchFood').text(thisUserObject.dietlunchfood);
    $('#llDietLunchHealthScore').text(thisUserObject.dietlunchhealthscore);
    $('#llDietLunchCost').text(thisUserObject.dietlunchhealthscore);
    $('#llDietDinnerFood').text(thisUserObject.dietdinnerfood);
    $('#llDietDinnerHealthScore').text(thisUserObject.dietdinnerhealthscore);
    $('#llDietDinnerCost').text(thisUserObject.dietdinnerhealthscore);

    $('#llMovieTitle').text(thisUserObject.movietitle);
    $('#llMovieDirector').text(thisUserObject.moviedirector);
    $('#llMusicTitle').text(thisUserObject.musictitle);
    $('#llMusicArtist').text(thisUserObject.musicartist);
    $('#llReadingTitle').text(thisUserObject.readingtitle);
    $('#llVGTitle').text(thisUserObject.vgtitle);
    $('#llVGCreator').text(thisUserObject.vgcreator);
    $('#llPurchaseItem').text(thisUserObject.purchaseitem);
    $('#llPurchaseLocation').text(thisUserObject.purchaselocation);
    $('#llPurchaseCost').text(thisUserObject.purchasecost);
    $('#llPurchaseTime').text(thisUserObject.purchasetime);
    $('#llWebsitePageName').text(thisUserObject.websitepagename);
    $('#llWebsiteURL').text(thisUserObject.websiteurl);
    $('#llDayRating').text(thisUserObject.dayrating);
};

// Add User
function addUser(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addUser input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newUser = {
            'date': $('#addUser fieldset input#inputDate').val(),
            'sleepstart': $('#addUser fieldset input#inputSleepStart').val(),
            'sleepend': $('#addUser fieldset input#inputSleepEnd').val(),
            'exerciseactivity': $('#addUser fieldset input#inputExerciseActivity').val(),
            'exercisetime': $('#addUser fieldset input#inputExerciseTime').val(),
            'dietbreakfastfood': $('#addUser fieldset input#inputDietBreakfastFood').val(),
            'dietbreakfasthealthscore': $('#addUser fieldset input#inputDietBreakfastHealthScore').val(),
            'dietbreakfastcost': $('#addUser fieldset input#inputDietBreakfastCost').val(),
            'dietlunchfood': $('#addUser fieldset input#inputDietLunchFood').val(),
            'dietlunchhealthscore': $('#addUser fieldset input#inputDietLunchHealthScore').val(),
            'dietlunchcost': $('#addUser fieldset input#inputDietLunchCost').val(),
            'dietdinnerfood': $('#addUser fieldset input#inputDietDinnerFood').val(),
            'dietdinnerhealthscore': $('#addUser fieldset input#inputDietDinnerHealthScore').val(),
            'dietdinnercost': $('#addUser fieldset input#inputDietDinnerCost').val(),

            'movietitle': $('#addUser fieldset input#inputMovieTitle').val(),
            'moviedirector': $('#addUser fieldset input#inputMovieDirector').val(),
            'musictitle': $('#addUser fieldset input#inputMusicTitle').val(),
            'musicartist': $('#addUser fieldset input#inputMusicArtist').val(),
            'readingtitle': $('#addUser fieldset input#inputReadingTitle').val(),
            'readingauthor': $('#addUser fieldset input#inputReadingAuthor').val(),
            'vgtitle': $('#addUser fieldset input#inputVGTitle').val(),
            'vgcreator': $('#addUser fieldset input#inputVGCreator').val(),
            'purchaseitem': $('#addUser fieldset input#inputPurchaseItem').val(),
            'purchaselocation': $('#addUser fieldset input#inputPurchaseLocation').val(),
            'purchasecost': $('#addUser fieldset input#inputPurchaseCost').val(),
            'purchasetime': $('#addUser fieldset input#inputPurchaseTime').val(),
            'websitepagename': $('#addUser fieldset input#inputWebsitePageName').val(),
            'websiteurl': $('#addUser fieldset input#inputWebsiteURL').val(),
            'dayrating': $('#addUser fieldset input#inputDayRating').val()


        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newUser,
            url: '/users/adduser',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addUser fieldset input').val('');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Delete User
function deleteUser(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this user?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deleteuser/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

