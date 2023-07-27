function skillsMember() {
    // 1. get the skills from the input
    var skills = document.getElementById("skills").value;
    // 2. split the skills into an array
    var skillsArray = skills.split(",");
    // 3. sort the array
    skillsArray.sort();
    // 4. create a string from the array
    var skillsString = skillsArray.join(", ");
    // 5. display the string
    document.getElementById("sortedSkills").innerHTML = skillsString;
}