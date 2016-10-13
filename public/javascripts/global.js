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

function sortTable(f,n){
    var rows = $('#mytable tbody  tr').get();

    rows.sort(function(a, b) {

        var A = getVal(a);
        var B = getVal(b);

        if(A < B) {
            return -1*f;
        }
        if(A > B) {
            return 1*f;
        }
        return 0;
    });

    function getVal(elm){
        var v = $(elm).children('td').eq(n).text().toUpperCase();
        if($.isNumeric(v)){
            v = parseInt(v,10);
        }
        return v;
    }

    $.each(rows, function(index, row) {
        $('#mytable').children('tbody').append(row);
    });
}
var date = 1;
var sleepstart = 1;
var sleepend = 1;
var exerciseactivity = 1;
var exercisereps = 1;
var exerciselocation = 1;
var exercisestart = 1;
var exerciseend = 1;
var dietbreakfastfood = 1;
var dietbreakfasthealthscore = 1;
var dietbreakfastcost = 1;
var dietbreakfastlocation = 1;
var dietbreakfaststart = 1;
var dietbreakfastend = 1;
var dietlunchfood = 1;
var dietlunchhealthscore = 1;
var dietlunchcost = 1;
var dietlunchlocation = 1;
var dietlunchstart = 1;
var dietlunchend = 1;
var dietdinnerfood = 1;
var dietdinnerhealthscore = 1;
var dietdinnercost = 1;
var dietdinnerlocation = 1;
var dietdinnerstart = 1;
var dietdinnerend = 1;
var movietitle = 1;
var moviedirector = 1;
var movierating = 1;
var moviethoughts = 1;
var moviestart = 1;
var movieend = 1;
var musictitle = 1;
var musicartist = 1;
var musicrating = 1;
var musicthoughts = 1;
var musicstart = 1;
var musicend = 1;
var readingtitle = 1;
var readingauthor = 1;
var readingrating = 1;
var readingthoughts = 1;
var readingstart = 1;
var readingend = 1;
var vgtitle = 1;
var vgcreator = 1;
var vgrating = 1;
var vgthoughts = 1;
var vgachivements = 1;
var vgstart = 1;
var vgend = 1;
var purchaseitem = 1;
var purchaselocation = 1;
var purchasecost = 1;
var purchasetime = 1;
var websitepagename = 1;
var websiteurl = 1;
var websitetime = 1;
var conversationperson = 1;
var conversationtopic = 1;
var conversationthoughts = 1;
var conversationlocation = 1;
var conversationstart = 1;
var conversationend = 1;
var careertask = 1;
var careernotes = 1;
var careercompleted = 1;
var careerstart = 1;
var careerend = 1;
var hygeinshower = 1;
var hygeinshowerstart = 1;
var hygeinshowerend = 1;
var hygeinbrushteeth = 1;
var hygeinfloss = 1;
var hygeinbrushstart = 1;
var hygeinbrushend = 1;
var hygeinnails = 1;
var hygeintoenails = 1;
var hygeinnailsstart = 1;
var hygeinnailsend = 1;
var sexperson = 1;
var sexposition = 1;
var sexrating = 1;
var sexlocation = 1;
var sexstart = 1;
var sexend = 1;
var programmingtask = 1;
var programmingdifficulity = 1;
var programmingsolution = 1;
var programmingstart = 1;
var programmingend = 1;
var writingentry = 1;
var writingtype = 1;
var dayrating = 1;

$("#date").click(function(){
    date *= -1;
    var n = $(this).prevAll().length;
    sortTable(date,n);
});
$("#sleepstart").click(function(){
    sleepstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(sleepstart,n);
});
$("#sleepend").click(function(){
    sleepend *= -1;
    var n = $(this).prevAll().length;
    sortTable(sleepend,n);
});
$("#exerciseactivity").click(function(){
    exerciseactivity *= -1;
    var n = $(this).prevAll().length;
    sortTable(exerciseactivity,n);
});
$("#exercisereps").click(function(){
    exercisereps *= -1;
    var n = $(this).prevAll().length;
    sortTable(exercisereps,n);
});
$("#exerciselocation").click(function(){
    exerciselocation *= -1;
    var n = $(this).prevAll().length;
    sortTable(exerciselocation,n);
});
$("#exercisestart").click(function(){
    exercisestart *= -1;
    var n = $(this).prevAll().length;
    sortTable(exercisestart,n);
});
$("#exerciseend").click(function(){
    exerciseactivity *= -1;
    var n = $(this).prevAll().length;
    sortTable(exerciseactivity,n);
});
$("#dietbreakfastfood").click(function(){
    dietbreakfastfood *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietbreakfastfood,n);
});
$("#dietbreakfasthealthscore").click(function(){
    dietbreakfasthealthscore *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietbreakfasthealthscore,n);
});

$("#dietbreakfastlocation").click(function(){
    dietbreakfastlocation *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietbreakfastlocation,n);
});

$("#dietbreakfaststart").click(function(){
    dietbreakfaststart *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietbreakfaststart,n);
});
$("#dietbreakfastend").click(function(){
    dietbreakfastend *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietbreakfastend,n);
});
$("#dietlunchfood").click(function(){
    dietlunchfood *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietlunchfood,n);
});

$("#dietlunchhealthscore").click(function(){
    dietlunchhealthscore *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietlunchhealthscore,n);
});

$("#dietlunchcost").click(function(){
    dietlunchcost *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietlunchcost,n);
});

$("#dietlunchlocation").click(function(){
    dietlunchlocation *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietlunchlocation,n);
});
$("#dietlunchstart").click(function(){
    dietlunchstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietlunchstart,n);
});

$("#dietlunchend").click(function(){
    dietlunchend *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietlunchend,n);
});

$("#dietdinnerfood").click(function(){
    dietdinnerfood *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietdinnerfood,n);
});

$("#dietdinnerhealthscore").click(function(){
    dietdinnerhealthscore *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietdinnerhealthscore,n);
});
$("#dietdinnercost").click(function(){
    dietdinnercost *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietdinnercost,n);
});

$("#dietdinnerlocation").click(function(){
    dietdinnerlocation *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietdinnerlocation,n);
});

$("#dietdinnerstart").click(function(){
    dietdinnerstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietdinnerstart,n);
});

$("#dietdinnerend").click(function(){
    dietdinnerend *= -1;
    var n = $(this).prevAll().length;
    sortTable(dietdinnerend,n);
});

$("#movietitle").click(function(){
    movietitle *= -1;
    var n = $(this).prevAll().length;
    sortTable(movietitle,n);
});
$("#moviedirector").click(function(){
    moviedirector *= -1;
    var n = $(this).prevAll().length;
    sortTable(moviedirector,n);
});
$("#movierating").click(function(){
    movierating *= -1;
    var n = $(this).prevAll().length;
    sortTable(movierating,n);
});
$("#moviethoughts").click(function(){
    moviethoughts *= -1;
    var n = $(this).prevAll().length;
    sortTable(moviethoughts,n);
});
$("#moviestart").click(function(){
    moviestart *= -1;
    var n = $(this).prevAll().length;
    sortTable(moviestart,n);
});
$("#movieend").click(function(){
    movieend *= -1;
    var n = $(this).prevAll().length;
    sortTable(movieend,n);
});
$("#musictitle").click(function(){
    musictitle *= -1;
    var n = $(this).prevAll().length;
    sortTable(musictitle,n);
});
$("#musicartist").click(function(){
    musicartist *= -1;
    var n = $(this).prevAll().length;
    sortTable(musicartist,n);
});
$("#musicrating").click(function(){
    musicrating *= -1;
    var n = $(this).prevAll().length;
    sortTable(musicrating,n);
});
$("#musicthoughts").click(function(){
    musicthoughts *= -1;
    var n = $(this).prevAll().length;
    sortTable(musicthoughts,n);
});
$("#musicstart").click(function(){
    musicstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(musicstart,n);
});
$("#musicend").click(function(){
    musicend *= -1;
    var n = $(this).prevAll().length;
    sortTable(musicend,n);
});
$("#readingtitle").click(function(){
    readingtitle *= -1;
    var n = $(this).prevAll().length;
    sortTable(readingtitle,n);
});
$("#readingauthor").click(function(){
    readingauthor *= -1;
    var n = $(this).prevAll().length;
    sortTable(readingauthor,n);
});
$("#readingrating").click(function(){
    readingrating *= -1;
    var n = $(this).prevAll().length;
    sortTable(readingrating,n);
});
$("#readingthoughts").click(function(){
    readingthoughts *= -1;
    var n = $(this).prevAll().length;
    sortTable(readingthoughts,n);
});
$("#readingstart").click(function(){
    readingstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(readingstart,n);
});
$("#readingend").click(function(){
    readingend *= -1;
    var n = $(this).prevAll().length;
    sortTable(readingend,n);
});
$("#vgtitle").click(function(){
    vgtitle *= -1;
    var n = $(this).prevAll().length;
    sortTable(vgtitle,n);
});
$("#vgcreator").click(function(){
    vgcreator *= -1;
    var n = $(this).prevAll().length;
    sortTable(vgcreator,n);
});
$("#vgrating").click(function(){
    vgrating *= -1;
    var n = $(this).prevAll().length;
    sortTable(vgrating,n);
});
$("#vgthoughts").click(function(){
    vgthoughts *= -1;
    var n = $(this).prevAll().length;
    sortTable(vgthoughts,n);
});
$("#vgachivements").click(function(){
    vgachivements *= -1;
    var n = $(this).prevAll().length;
    sortTable(vgachivements,n);
});
$("#vgstart").click(function(){
    vgstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(vgstart,n);
});
$("#vgend").click(function(){
    vgend *= -1;
    var n = $(this).prevAll().length;
    sortTable(vgend,n);
});
$("#purchaseitem").click(function(){
    purchaseitem *= -1;
    var n = $(this).prevAll().length;
    sortTable(purchaseitem,n);
});
$("#purchaselocation").click(function(){
    purchaselocation *= -1;
    var n = $(this).prevAll().length;
    sortTable(purchaselocation,n);
});
$("#purchasecost").click(function(){
    purchasecost *= -1;
    var n = $(this).prevAll().length;
    sortTable(purchasecost,n);
});
$("#purchasetime").click(function(){
    purchasetime *= -1;
    var n = $(this).prevAll().length;
    sortTable(purchasetime,n);
});
$("#websitepagename").click(function(){
    websitepagename *= -1;
    var n = $(this).prevAll().length;
    sortTable(websitepagename,n);
});
$("#websiteurl").click(function(){
    websiteurl *= -1;
    var n = $(this).prevAll().length;
    sortTable(websiteurl,n);
});
$("#websitetime").click(function(){
    websitetime *= -1;
    var n = $(this).prevAll().length;
    sortTable(websitetime,n);
});
$("#conversationperson").click(function(){
    conversationperson *= -1;
    var n = $(this).prevAll().length;
    sortTable(conversationperson,n);
});
$("#conversationtopic").click(function(){
    conversationtopic*= -1;
    var n = $(this).prevAll().length;
    sortTable(conversationtopic,n);
});
$("#conversationthoughts").click(function(){
    conversationthoughts *= -1;
    var n = $(this).prevAll().length;
    sortTable(conversationthoughts,n);
});
$("#conversationlocation").click(function(){
    conversationlocation *= -1;
    var n = $(this).prevAll().length;
    sortTable(conversationlocation,n);
});
$("#conversationstart").click(function(){
    conversationstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(conversationstart,n);
});
$("#conversationend").click(function(){
    conversationend *= -1;
    var n = $(this).prevAll().length;
    sortTable(conversationend,n);
});
$("#careertask").click(function(){
    careertask *= -1;
    var n = $(this).prevAll().length;
    sortTable(careertask,n);
});
$("#careernotes").click(function(){
    careernotes *= -1;
    var n = $(this).prevAll().length;
    sortTable(careernotes,n);
});
$("#careercompleted").click(function(){
    careercompleted *= -1;
    var n = $(this).prevAll().length;
    sortTable(careercompleted,n);
});
$("#careerstart").click(function(){
    careerstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(careerstart,n);
});
$("#careerend").click(function(){
    careerend *= -1;
    var n = $(this).prevAll().length;
    sortTable(careerend,n);
});
$("#hygeinshower").click(function(){
    hygeinshower *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinshower,n);
});
$("#hygeinshowerstart").click(function(){
    hygeinshowerstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinshowerstart,n);
});
$("#hygeinshowerend").click(function(){
    hygeinshowerend *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinshowerend,n);
});
$("#hygeinbrushteeth").click(function(){
    hygeinbrushteeth *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinbrushteeth,n);
});
$("#hygeinfloss").click(function(){
    hygeinfloss *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinfloss,n);
});
$("#hygeinbrushstart").click(function(){
    hygeinbrushstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinbrushstart,n);
});
$("#hygeinbrushend").click(function(){
    hygeinbrushend *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinbrushend,n);
});
$("#hygeinnails").click(function(){
    hygeinnails *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinnails,n);
});

$("#hygeintoenails").click(function(){
    hygeintoenails *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeintoenails,n);
});
$("#hygeinnailsstart").click(function(){
    hygeinnailsstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinnailsstart,n);
});

$("#hygeinnailsend").click(function(){
    hygeinnailsend *= -1;
    var n = $(this).prevAll().length;
    sortTable(hygeinnailsend,n);
});

$("#sexperson").click(function(){
    sexperson *= -1;
    var n = $(this).prevAll().length;
    sortTable(sexperson,n);
});

$("#sexposition").click(function(){
    sexposition *= -1;
    var n = $(this).prevAll().length;
    sortTable(sexposition,n);
});

$("#sexrating").click(function(){
    sexrating *= -1;
    var n = $(this).prevAll().length;
    sortTable(sexrating,n);
});
$("#sexlocation").click(function(){
    sexlocation *= -1;
    var n = $(this).prevAll().length;
    sortTable(sexlocation,n);
});

$("#sexstart").click(function(){
    sexstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(sexstart,n);
});
$("#sexend").click(function(){
    sexend *= -1;
    var n = $(this).prevAll().length;
    sortTable(sexend,n);
});

$("#programmingtask").click(function(){
    programmingtask *= -1;
    var n = $(this).prevAll().length;
    sortTable(programmingtask,n);
});
$("#programmingdifficulity").click(function(){
    programmingdifficulity *= -1;
    var n = $(this).prevAll().length;
    sortTable(programmingdifficulity,n);
});

$("#programmingsolution").click(function(){
    programmingsolution *= -1;
    var n = $(this).prevAll().length;
    sortTable(programmingsolution,n);
});
$("#programmingsolution").click(function(){
    programmingsolution *= -1;
    var n = $(this).prevAll().length;
    sortTable(programmingsolution,n);
});

$("#programmingstart").click(function(){
    programmingstart *= -1;
    var n = $(this).prevAll().length;
    sortTable(programmingstart,n);
});
$("#programmingend").click(function(){
    programmingend *= -1;
    var n = $(this).prevAll().length;
    sortTable(programmingend,n);
});

$("#writingentry").click(function(){
    writingentry *= -1;
    var n = $(this).prevAll().length;
    sortTable(writingentry,n);
});
$("#writingtype").click(function(){
    writingtype *= -1;
    var n = $(this).prevAll().length;
    sortTable(writingtype,n);
});

$("#dayrating").click(function(){
    dayrating *= -1;
    var n = $(this).prevAll().length;
    sortTable(dayrating,n);
});





$('.next').click(function(event){
    if($('.table').css('left') != '-1800px') {
    $(this).prop('disabled', true)    
        $('.table').animate({left:'-=198px'}, 250, function() {
              $('.next').prop('disabled', false)    
        });
}
});



$('.prev').click(function(event){
    if($('.table').css('left') != '0px') {
    $(this).prop('disabled', true)   
        $('.table').animate({left:'+=198px'}, 250, function() {
              $('.prev').prop('disabled', false)    
        });
}
});





