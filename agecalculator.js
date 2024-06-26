

function calculateAge() {

    // elements targeted by ID and stored this value in a variable
    let userDate = document.getElementById("date").value;  // .value attribute gives you input of user from input field.
    let userMonth = document.getElementById("month").value;
    let userYear = document.getElementById("year").value;
    let months = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];  //month consist of these days only



// Targeting the div element to print / show msg

     function showMsg(msg1) {
        let msgDiv = document.getElementById("msg") //targeting the div element by ID,which target the result of calculator 
        msgDiv.innerText = msg1 //providing innertext to element through parameter msg1 of showMsg 
    }

  

    // creating funtion and validating input from user

    function validateInput(userDate, userMonth, userYear, months) {
        //In case user providing no details i.e. empty or null
        if (userDate == null || userDate == "") {
            showMsg("Please provide Date")
            return false; //showMsg here is function which is printing result msg after submitting the details
        }
        if (userMonth == null || userMonth == "") {
            showMsg("Please provide Month")
            return false; // why return is set everywhere false ?
        }
        if (userYear == null || userYear == "") {
            showMsg("Please provide Year")
            return false;
        }
        //If user details is out of range
        if (parseInt(userMonth) > 12) {
            showMsg("Please provide month value in range 1 to 12")
            return false;
        }
        if (String(userYear).length < 4) {
            showMsg("Please provide year in format YYYY")
            return false;
        }
        //If userdetails is NAN type then show msg

        //The first thing that isNaN() does is convert its parameter to a number .

        //If the parameter is an object, that's done by calling the .valueOf() method of the object.
        //In the case of Date instances that returns the timestamp, and it won't be NaN for any valid Date.
        //Whatever you pass in the parameter if that returns number successfully then it give you the result to be false
        // else it gives you the true.

        if (isNaN(userDate)) {
            showMsg("Please provide valid date")
            return false;
        }
        if (isNaN(userDate)) {
            showMsg("Please provide valid date")
            return false;
        }
        if (isNaN(userMonth)) {
            showMsg("Please provide valid month")
            return false;
        }
        if (isNaN(userYear)) {
            showMsg("Please provide valid year")
            return false;
        }

        //If user give input less than 0
        if (userDate <= 0) {
            showMsg("Date cannot be 0 or less than 0")
            return false;
        }
        if (userMonth <= 0) {
            showMsg("Month cannot be 0 or less than 0")
            return false;
        }
        if (userYear <= 0) {
            showMsg("Year cannot be 0 or less than 0")
            return false;
        }
        if (userDate > months[userMonth - 1]) {  //?
            showMsg("Please provide valid Date with respect to Month")
            return false;
        }
        return true //? is it working for whole if..? and how ? why ?
    }


//Note
// Comparison: userDate > months[userMonth - 1]: This checks if the userDate is greater than the value 
// in the months array at the index specified by userMonth - 1.
// months is predefined array of months .But userMonth is the input provided by user,so here user can be put anything,so we do index Adjustment

// Index Adjustment: userMonth - 1: JavaScript arrays are zero-indexed, meaning the first element is at index 0.
//  If userMonth represents a month (e.g., January is 1), subtracting 1 adjusts it to the correct array index. ***IMP

// Error Handling: If the condition is true (i.e., userDate is greater than the corresponding month value), 
// it displays an error message using the showMsg function and returns false. This suggests that 
// the date provided is not valid with respect to the month, and the execution is halted.

   



    if (validateInput(userDate, userMonth, userYear, months)) {//  4 parameters 
        let todaysDate = new Date(); //  new Date() method provides today's default time,date,year a/c to Indian standard time
        console.log(todaysDate)
        let currentDate
         = todaysDate.getDate(); //extract only today'sdate by .getDate() method from newDate() method.
        let currentMonth = 1 + todaysDate.getMonth();//extract only recent month by .getDate() method from todaysDate.

        // Get Current Month (Adjusted): let currentMonth = 1 + todaysDate.getMonth();: JavaScript months are zero-indexed (January is 0). 
        // Adding 1 adjusts the month value to a more intuitive range (January is 1).

       let currentYear = todaysDate.getFullYear();// extract only recent year by .getDate() method from todaysDate

        // console.log(currentMonth)
        // console.log(todaysDate)

        if (userDate > currentDate) { // i.e if user is putting futuristic date
            // console.log(`c date ${currentDate}`)  //@@???
            currentDate = currentDate + months[userMonth - 1]
            // let months = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];  //month consist of these days only
           // console.log("cdate + months" + currentDate)  //@@???
            currentMonth = currentMonth - 1
            //  console.log("currmonths",currentMonth) //@@???
        }
        if (userMonth > currentMonth) { //i.e if user is putting futuristic month
            currentMonth = currentMonth + 12  //@?
            currentYear = currentYear - 1      //@?
        }

        
        let numOfDays = currentDate - userDate;  //?
        let numOfMonths = currentMonth - userMonth;
        let numOfYears = currentYear - userYear;
        showMsg("your age is " + numOfYears + " years ," + numOfMonths + " months & " + numOfDays + " days")

    }
}








