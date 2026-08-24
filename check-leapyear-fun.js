function leapyear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}


year = 2026;
check_year = leapyear(year);

if (check_year === false) {
    console.log(`The year ${year} is not a leap year.`);
} else {
    console.log(`The year ${year} is a leap year.`);
}