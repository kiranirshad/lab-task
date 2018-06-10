let currentScore = 60;
userScore = 55;

if(userScore> currentScore){
    console.log("Congratulations!! Your new high score is <user's high score> ");
} else if (userScore < currentScore){
    console.log("Try Again. You just need <the number of more points needed to beat the high score>");
}