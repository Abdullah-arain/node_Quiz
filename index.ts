#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res,2000);
    })
}

async function welcome(){
    let rainbow = chalkAnimation.rainbow('Lets start Quiz')
    await sleep();
    rainbow.stop()
}
await welcome()


const answers = await inquirer.prompt([
    {
        type:'list',
        name:'question1',
        choices:['14 Aug','23 March'],
        message:'What is the independence day of pakistan: '
    },
    {
        type:'list',
        name:'question2',
        choices:['Allama Iqbal','Hafiz Jhalandri'],
        message:'Who is our national Poet? '
    },
    {
        type:'list',
        name:'question3',
        choices:['Imran khan','Showbaz'],
        message:'Who is current PM of pakistan? '
    }
])

if(answers.question1 === "14 Aug"){
    console.log(chalk.bgYellow('Your answer 1 is correct'))
}
else{
    console.log(chalk.bgRedBright('Your answer 1 is incorrect'))
}

if(answers.question2 === "Allama Iqbal"){
    console.log(chalk.bgCyan('Your answer 2 is correct'))
}
else{
    console.log(chalk.bgRedBright('Your answer 2 is incorrect'))
}
if(answers.question3 === "Showbaz"){
    console.log(chalk.bgMagenta('Your answer 3 is correct'))
}
else{
    console.log(chalk.bgRedBright('Your answer 3 is incorrect'))
}
