function checkEligibility(age, gender) {  
    // Convert gender to lowercase to handle inputs like "Male" or "MALE"
    const lowerGender = gender.toLowerCase();

    if ((lowerGender === "male" && age >= 21) || (lowerGender === "female" && age >= 18)) {
        console.log(`As a ${gender} of age ${age}, you are eligible for marriage.`);
    } else if (lowerGender !== "male" && lowerGender !== "female") {
        console.log("Invalid gender provided.");
    } else {
        console.log(`As a ${gender} of age ${age}, you are not eligible for marriage.`);
    }
}

// Test cases
console.log("Testing eligibility:");
checkEligibility(25, "male");    // Eligible
checkEligibility(19, "male");    // Not eligible (under 21)
checkEligibility(19, "female");  // Eligible
checkEligibility(17, "female");  // Not eligible (under 18)
