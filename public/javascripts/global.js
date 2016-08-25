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
    $('#llExerciseReps').text(thisUserObject.exercisereps);
    $('#llExerciseLocation').text(thisUserObject.exerciselocation);
    $('#llExerciseStart').text(thisUserObject.exercisestart);
    $('#llExerciseEnd').text(thisUserObject.exerciseend);
   
    $('#llDietBreakfastFood').text(thisUserObject.dietbreakfastfood);
    $('#llDietBreakfastHealthScore').text(thisUserObject.dietbreakfasthealthscore);
    $('#llDietBreakfastCost').text(thisUserObject.dietbreakfasthealthscore);
    $('#llDietBreakfastLocation').text(thisUserObject.dietbreakfastlocation);
    $('#llDietBreakfastStart').text(thisUserObject.dietbreakfaststart);
    $('#llDietBreakfastEnd').text(thisUserObject.dietbreakfastend);

    $('#llDietLunchFood').text(thisUserObject.dietlunchfood);
    $('#llDietLunchHealthScore').text(thisUserObject.dietlunchhealthscore);
    $('#llDietLunchCost').text(thisUserObject.dietlunchhealthscore);
    $('#llDietLunchLocation').text(thisUserObject.dietlunchlocation);
    $('#llDietLunchStart').text(thisUserObject.dietlunchstart);
    $('#llDietLunchEnd').text(thisUserObject.dietlunchend);

    $('#llDietDinnerFood').text(thisUserObject.dietdinnerfood);
    $('#llDietDinnerHealthScore').text(thisUserObject.dietdinnerhealthscore);
    $('#llDietDinnerCost').text(thisUserObject.dietdinnerhealthscore);
    $('#llDietDinnerLocation').text(thisUserObject.dietdinnerlocation);
    $('#llDietDinnerStart').text(thisUserObject.dietdinnerstart);
    $('#llDietDinnerEnd').text(thisUserObject.dietdinnerend);

    $('#llMovieTitle').text(thisUserObject.movietitle);
    $('#llMovieDirector').text(thisUserObject.moviedirector);
    $('#llMovieRating').text(thisUserObject.movierating);
    $('#llMovieThoughts').text(thisUserObject.moviethoughts);
    $('#llMovieStart').text(thisUserObject.moviestart);
    $('#llMovieEnd').text(thisUserObject.movieend);
   
    $('#llMusicTitle').text(thisUserObject.musictitle);
    $('#llMusicArtist').text(thisUserObject.musicartist);
    $('#llMusicRating').text(thisUserObject.musicrating);
    $('#llMusicThoughts').text(thisUserObject.musicthoughts);
    $('#llMusicStart').text(thisUserObject.musicstart);
    $('#llMusicEnd').text(thisUserObject.musicend);
   
    $('#llReadingTitle').text(thisUserObject.readingstart);
    $('#llReadingAuthor').text(thisUserObject.readingauthor);
    $('#llReadingRating').text(thisUserObject.readingrating);
    $('#llReadingThoughts').text(thisUserObject.readingthoughts);
    $('#llReadingStart').text(thisUserObject.readingstart);
    $('#llReadingEnd').text(thisUserObject.readingend);
  
    $('#llVGTitle').text(thisUserObject.vgtitle);
    $('#llVGCreator').text(thisUserObject.vgcreator);
    $('#llVGRating').text(thisUserObject.vgrating);
    $('#llVGThoughts').text(thisUserObject.vgthoughts);
    $('#llVGAchivements').text(thisUserObject.vgachivements);
    $('#llVGStart').text(thisUserObject.vgstart);
    $('#llVGEnd').text(thisUserObject.vgend);
   
    $('#llPurchaseItem').text(thisUserObject.purchaseitem);
    $('#llPurchaseLocation').text(thisUserObject.purchaselocation);
    $('#llPurchaseCost').text(thisUserObject.purchasecost);
    $('#llPurchaseTime').text(thisUserObject.purchasetime);
  
    $('#llWebsitePageName').text(thisUserObject.websitepagename);
    $('#llWebsiteURL').text(thisUserObject.websiteurl);
    $('#llWebsiteTime').text(thisUserObject.websitetime);

    $('#llConversationsPerson').text(thisUserObject.conversationperson);
    $('#llConversationsTopic').text(thisUserObject.conversationtopic);
    $('#llConversationsThoughts').text(thisUserObject.conversationthoughts);
    $('#llConversationsLocation').text(thisUserObject.conversationlocation);
    $('#llConversationsStart').text(thisUserObject.conversationstart);
    $('#llConversationsEnd').text(thisUserObject.conversationend);

    $('#llCareerTask').text(thisUserObject.careertask);
    $('#llCareerNotes').text(thisUserObject.careernotes);
    $('#llCareerCompleted').text(thisUserObject.careercompleted);
    $('#llCareerStart').text(thisUserObject.careerstart);
    $('#llCareerEnd').text(thisUserObject.careerend);

    $('#llHygeinShower').text(thisUserObject.hygeinshower);
    $('#llHygeinShowerStart').text(thisUserObject.hygeinshowerstart);
    $('#llHygeinShowerEnd').text(thisUserObject.hygeinshowerend);
    $('#llHygeinBrushteeth').text(thisUserObject.hygeinbrushteeth);
    $('#llHygeinFloss').text(thisUserObject.hygeinfloss);
    $('#llHygeinBrushStart').text(thisUserObject.hygeinbrushstart);
    $('#llHygeinBrushEnd').text(thisUserObject.hygeinbrushend);
    $('#llHygeinNails').text(thisUserObject.hygeinnails);
    $('#llHygeinToenails').text(thisUserObject.hygeintoenails);
    $('#llHygeinNailsStart').text(thisUserObject.hygeinnailsstart);
    $('#llHygeinNailsEnd').text(thisUserObject.hygeinnailsend);

    $('#llSexPerson').text(thisUserObject.sexperson);
    $('#llSexPosition').text(thisUserObject.sexposition);
    $('#llSexRating').text(thisUserObject.sexrating);
    $('#llSexThoughts').text(thisUserObject.sexthoughts);
    $('#llSexLocation').text(thisUserObject.sexlocation);
    $('#llSexStart').text(thisUserObject.sexstart);
    $('#llSexEnd').text(thisUserObject.sexend);

    $('#llProgrammingTask').text(thisUserObject.programmingtask);
    $('#llProgrammingDifficulity').text(thisUserObject.programmingdifficulity);
    $('#llProgrammingSolution').text(thisUserObject.programmingsolution);
    $('#llProgrammingStart').text(thisUserObject.programmingstart);
    $('#llProgrammingEnd').text(thisUserObject.programmingend);

    $('#llWritingEntry').text(thisUserObject.writingentry);
    $('#llWritingType').text(thisUserObject.writingtype);

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
            'exercisereps': $('#addUser fieldset input#inputExerciseReps').val(),
            'exerciselocation': $('#addUser fieldset input#inputExerciseLocation').val(),
            'exercisestart': $('#addUser fieldset input#inputExerciseStart').val(),
            'exerciseend': $('#addUser fieldset input#inputExerciseEnd').val(),

            'dietbreakfastfood': $('#addUser fieldset input#inputDietBreakfastFood').val(),
            'dietbreakfasthealthscore': $('#addUser fieldset input#inputDietBreakfastHealthScore').val(),
            'dietbreakfastcost': $('#addUser fieldset input#inputDietBreakfastCost').val(),
            'dietbreakfastlocation': $('#addUser fieldset input#inputDietBreakfastLocation').val(),
            'dietbreakfaststart': $('#addUser fieldset input#inputDietBreakfastStart').val(),
            'dietbreakfastend': $('#addUser fieldset input#inputDietBreakfastEnd').val(),
            'dietlunchfood': $('#addUser fieldset input#inputDietLunchFood').val(),
            'dietlunchhealthscore': $('#addUser fieldset input#inputDietLunchHealthScore').val(),
            'dietlunchcost': $('#addUser fieldset input#inputDietLunchCost').val(),
            'dietlunchlocation': $('#addUser fieldset input#inputDietLunchLocation').val(),
            'dietlunchstart': $('#addUser fieldset input#inputDietLunchStart').val(),
            'dietlunchend': $('#addUser fieldset input#inputDietLunchEnd').val(),
            'dietdinnerfood': $('#addUser fieldset input#inputDietDinnerFood').val(),
            'dietdinnerhealthscore': $('#addUser fieldset input#inputDietDinnerHealthScore').val(),
            'dietdinnercost': $('#addUser fieldset input#inputDietDinnerCost').val(),
            'dietdinnerlocation': $('#addUser fieldset input#inputDietDinnerLocation').val(),
            'dietdinnerstart': $('#addUser fieldset input#inputDietDinnerStart').val(),
            'dietdinnerend': $('#addUser fieldset input#inputDietDinnerEnd').val(),

            'movietitle': $('#addUser fieldset input#inputMovieTitle').val(),
            'moviedirector': $('#addUser fieldset input#inputMovieDirector').val(),
            'movierating': $('#addUser fieldset input#inputMovieRating').val(),
            'moviethoughts': $('#addUser fieldset input#inputMovieThoughts').val(),
            'moviestart': $('#addUser fieldset input#inputMovieStart').val(),
            'movieend': $('#addUser fieldset input#inputMovieEnd').val(),
            
            'musictitle': $('#addUser fieldset input#inputMusicTitle').val(),
            'musicartist': $('#addUser fieldset input#inputMusicArtist').val(),
            'musicrating': $('#addUser fieldset input#inputMusicRating').val(),
            'musicthoughts': $('#addUser fieldset input#inputMusicThoughts').val(),
            'musicstart': $('#addUser fieldset input#inputMusicStart').val(),
            'musicend': $('#addUser fieldset input#inputMusicEnd').val(),
            
            'readingtitle': $('#addUser fieldset input#inputReadingTitle').val(),
            'readingauthor': $('#addUser fieldset input#inputReadingAuthor').val(),
            'readingrating': $('#addUser fieldset input#inputReadingRating').val(),
            'readingthoughts': $('#addUser fieldset input#inputReadingThoughts').val(),
            'readingstart': $('#addUser fieldset input#inputReadingStart').val(),
            'readingend': $('#addUser fieldset input#inputReadingEnd').val(),
            
            'vgtitle': $('#addUser fieldset input#inputVGTitle').val(),
            'vgcreator': $('#addUser fieldset input#inputVGCreator').val(),
            'vgrating': $('#addUser fieldset input#inputRating').val(),
            'vgthoughts': $('#addUser fieldset input#inputVGThoughts').val(),
            'vgachivements': $('#addUser fieldset input#inputVGAchivements').val(),
            'vgstart': $('#addUser fieldset input#inputVGStart').val(),
            'vgend': $('#addUser fieldset input#inputVGEnd').val(),
            
            'purchaseitem': $('#addUser fieldset input#inputPurchaseItem').val(),
            'purchaselocation': $('#addUser fieldset input#inputPurchaseLocation').val(),
            'purchasecost': $('#addUser fieldset input#inputPurchaseCost').val(),
            'purchasetime': $('#addUser fieldset input#inputPurchaseTime').val(),
            
            'websitepagename': $('#addUser fieldset input#inputWebsitePageName').val(),
            'websiteurl': $('#addUser fieldset input#inputWebsiteURL').val(),
            'websitetime': $('#addUser fieldset input#inputWebsiteTime').val(),

            'conversationperson': $('#addUser fieldset input#inputConversationPerson').val(),
            'conversationtopic': $('#addUser fieldset input#inputConversationTopic').val(),
            'conversationthoughts': $('#addUser fieldset input#inputConversationThoughts').val(),
            'conversationlocation': $('#addUser fieldset input#inputConversationLocation').val(),
            'conversationstart': $('#addUser fieldset input#inputConversationStart').val(),
            'conversationend': $('#addUser fieldset input#inputConversationEnd').val(),

            'careertask': $('#addUser fieldset input#inputCareerTask').val(),
            'careernotes': $('#addUser fieldset input#inputCareerNotes').val(),
            'careercompleted': $('#addUser fieldset input#inputCareerCompleted').val(),
            'careerstart': $('#addUser fieldset input#inputCareerStart').val(),
            'careerend': $('#addUser fieldset input#inputCareerEnd').val(),

            'hygeinshower': $('#addUser fieldset input#inputHygeinShower').val(),
            'hygeinshowerstart': $('#addUser fieldset input#inputHygeinShowerStart').val(),
            'hygeinshowerend': $('#addUser fieldset input#inputHygeinShowerEnd').val(),
            'hygeinbrushteeth': $('#addUser fieldset input#inputHygeinBrushteeth').val(),
            'hygeinfloss': $('#addUser fieldset input#inputHygeinFloss').val(),
            'hygeinbrushstart': $('#addUser fieldset input#inputHygeinBrushStart').val(),
            'hygeinbrushend': $('#addUser fieldset input#inputHygeinBrushEnd').val(),
            'hygeinnails': $('#addUser fieldset input#inputHygeinNails').val(),
            'hygeintoenails': $('#addUser fieldset input#inputHygeinToenails').val(),
            'hygeinnailsstart': $('#addUser fieldset input#inputHygeinNailsStart').val(),
            'hygeinnailsend': $('#addUser fieldset input#inputHygeinNailsEnd').val(),

            'sexperson': $('#addUser fieldset input#inputSexPerson').val(),
            'sexposition': $('#addUser fieldset input#inputSexPosition').val(),
            'sexrating': $('#addUser fieldset input#inputSexRating').val(),
            'sexthoughts': $('#addUser fieldset input#inputSexThoughts').val(),
            'sexlocation': $('#addUser fieldset input#inputSexLocation').val(),
            'sexstart': $('#addUser fieldset input#inputSexStart').val(),
            'sexend': $('#addUser fieldset input#inputSexEnd').val(),

            'programmingtask': $('#addUser fieldset input#inputProgrammingTask').val(),
            'programmingdifficulity': $('#addUser fieldset input#inputProgrammingDifficulity').val(),
            'programmingsolution': $('#addUser fieldset input#inputProgrammingSolution').val(),
            'programmingstart': $('#addUser fieldset input#inputProgrammingStart').val(),
            'programmingend': $('#addUser fieldset input#inputProgrammingEnd').val(),

            'writingentry': $('#addUser fieldset input#inputWritingEntry').val(),
            'writingtype': $('#addUser fieldset input#inputWritingType').val(),

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

