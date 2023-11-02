let readlineSync=require("readline-sync");
let kuler=require("kuler")
let score=0;
let userName=readlineSync.question("What is your name? ");
console.log(kuler(`\n Welcome ${userName}`,"#dc2626"));
/** Creating Data Base */
const database={
  data:[
    {
      question:`What is the capital of India?`,
      options:{
        a:`Delhi`,
        b:`Mumbai`,
        c:`Kolkata`,
        d:`Chennai`
      
      },
      answer:`a`
    
    },
    {
      question:`What is the capital of Telangana?`,
      options:{
        a:`Hyderabad`,
        b:`Chennai`,
        c:`Kolkata`,
        d:`Mumbai`
      },
      answer:`a`
    },
    {
      question:"What is the capital of Karnataka?",
      options:{
        a:`Bangalore`,
        b:`Mysore`,
        c:`Kolkata`,
        d:`Chennai`
    },
      answer:`a`,
    },
    {
      question:"What is the capital of Uttar Pradesh?",
      options:{
        a:`Lucknow`,  
        b:`Guwahati`,
        c:`Kolkata`,
        d:`Chennai`
      
    },
      answer:`a`
    },
    {
      question:"What is the capital of Maharashtra?",
        options:{
          a:`Mumbai`,
          b:`Pune`,
          c:`Kolkata`,
          d:`Chennai`
        },
      answer:`a`
    
    },
    {
      question:"What is the capital of West Bengal?",
      options:{
        a:`Kolkata`,
        b:`Mumbai`,
        c:`Chennai`,
        d:`Delhi`
        
    },
      answer:`a`
    },
  ]
}
/** Creating Leader Board Data*/
const leaderBoard={
  data:[
    {
      name:`Ashish`,
      score:`5`
    
    },
    
    {
      name:`Amit`,
      score:`4`
    },
    {
      name:`uday`,
      score:`4`
    }
  ]
}
/** Creating Function to display Questions */
function playGame(userAnswer,answer){
  if(userAnswer===answer){
    console.log(kuler("correct Answer","#84cc16"));
    score++
  }else{
    console.log(kuler("wrong Answer","#b91c1c"));
    console.log(kuler(`correct answer is ${answer}`,"#1d4ed8"))
  }
}
/** Creating Function to display Options */
function showQuestionandAnswers(database){
  for(let i=0;i<database.data.length;i++){
    console.log(`\n Q${i+1}-${database.data[i].question}\n`);
    for(let key in database.data[i].options){
      console.log(`${key}-${database.data[i].options[key]}\n`);
    } 
    let userAnswer=readlineSync.question("Enter your answer-(a/b/c/d)-").toLowerCase();
    playGame(userAnswer,database.data[i].answer);
  }
}
/** Creating Function to display Leader Board */
function highScore(leaderBoard){
  leaderBoard.data.push({name:userName,score:score})
  console.log(leaderBoard);
  let sortedLeaderBoard=leaderBoard.data.sort((a,b)=>b.score-a.score);
  console.log("\n Check your position on the Leader Board");
  for(let leader of sortedLeaderBoard){
    console.log(`${leader.name}--Score - ${leader.score}`);
  }
}
showQuestionandAnswers(database);
console.log(`your score is - ${score}`);
highScore(leaderBoard);