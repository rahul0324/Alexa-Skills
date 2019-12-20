'use strict';

var questions = [
        {
            'When was the first season was premiered of the show Narcos?':[ '2015', '2016', '2012', '2013']
        },
        {
            'Story type of the show Narcos?':[ 'Crime', 'Thriller', 'Horror', 'Musicial']
        },
        {
            'Production location of the show Narcos?':[ 'Colombia', 'US', 'UK', 'India']
        },
        {
            'Who played the role of Pablo Escobar in NARCOS?':[ 'Wagner Moura', 'Pedro Pascal', 'Bruno Bichir', 'Boyd Holbrook']
        },
        {
            'In which season Luis Gnecco has guest appearance?':[ 'Season 1', 'Season 2', 'Season 3', 'Season 4']
        },
        {
            'On the show, when Pablo was arrested in 1976, the DAS agents that confiscated the truck with cocaine were?':[ 'not corrupt', 'working for him', 'his friends', 'Agents']
        },
        {
            'What was Pablo biggest fear?':[ 'Being arrested','Staying in Columbia', 'Driving', 'Falling in love']
        },
        {
            'In which year was Escobar killed?':[ '1993', '1893', '2000', '1901']
        },
        {
            'Who played the character of Tata Escobar in the series?':[ 'Paulina Gaitán', 'Joanna Christie', 'Andrea Londo', 'Ana de la Reguera']
        },
        {
            'Gacha, enters the party to do what?':[ 'To murder everyone', 'To dance', 'To find someone', 'To make a deal']
        },
        {
            'Who narrates the series?':[ 'Murphy', 'Pablo', 'Gustavo', 'Tata Escobar']
        },
        {
            'According to the producer, Narcos was originally supposed to be?':[ 'A film', 'Only one season', 'Two seasons', 'Three seasons']
        },
        {
            'Where was Pablo murdered?':[ 'At a rooftop in Colombia', 'In his car', 'At a party', 'In his bedroom']
        },
        {
            'Who were the two characters, Murphy and Pena?':[ 'DEA agents', 'FBI agents','Sicarios', 'Columbian officers']
        },
        {
            'In the intro episode, Murphy says “The hippies had been replaced with _____”?':[ 'Columbians', 'King pins', 'Drug dealers', 'Murders']
        },
        {
            'On the show, when Pablo was arrested in 1976, the DAS agents that confiscated the truck with cocaine were _______?':[ 'Not corrupt', 'DEA agents', 'His friends', 'Working for him']
        },
        {
            'What is a Sicario?':[ 'A hitman', 'A dealer', 'A Columbian', 'An agent']
        },
        {
            'In the show, the character Gacha, is shown entering a party to do what?':[ 'Murder everyone', 'Capture a woman', 'Sell some cocaine', 'Dance']
        },
        {
            'Who is Gustavo?':[ 'Pablo brother', 'Cali Cartel member', 'DEA agent', 'Columbian Colonel']
        },
        {
            'Where does Pablo mom go, that ends up leading attackers back to the family?':[ 'Church', 'A funeral', 'To visit a friend', 'The market']
        },
        {
            'What country does Pablo family try to flee to?':[ 'Germany', 'Mexico', 'France', 'US']
        },
        {
            'What Platform is responsible for the show?':[ 'Netflix', 'Discovery Channel', 'Hulu', 'HBO']
        },
        {
            'What does Pablo father do?':[ 'He is a farmer', 'He is dead', 'He is a government official', 'He is an officer']
        },
        {
            'The names of the two founders of the Cali Cartel are Miguel and what?':[ 'Gilberto', 'Marty', 'Limon', 'Michaelangelo']
        },
        {
            'After the Medellin Cartel is diminished, who takes over?':[ 'The Cali Cartel', 'Los Pepes', 'The Mexican Cartel', 'Tata Escobar']
        },
        {
            'What is the name of Pablo wife?':[ 'Tata', 'Moura', 'Limon', 'Juan']
        },
        {
            'What was the name of the president of Columbia?':[ 'Gavira', 'Corillo','Murphy', 'Juan Pablo']
        },
        {
            'What was the name of Murphy wife?':[ 'Connie', 'Murphy', 'Moura', 'Tata']
        },
        {
            'Pablo is killed at the end of which season?':[ 'Season 2', 'He is alive!', 'Season 3', 'Season 1']
        },
        {
            'Who controlled Los Pepes?':[ 'The DEA', 'The United States Army', 'The Medellin Cartel', 'The Cali Cartel']
        },
        {
            'Where was Pablo murdered in the end of season 2?':[ 'A rooftop in Columbia', 'In a plane crash', 'At the German border', 'His house']
        },
        {
            'Who was the founder of the Medellin Cartel?':[ 'Pablo', 'Murphy', 'Juan', 'Guivarez']
        },
        {
            'What is the name of the actor who played Pablo?':[ 'Wagner Moura', 'Brad Pitt', 'Joey Tribianie', 'Murphy Pena']
        },
        {
            'When Pablo and his family are hiding out, his family gets very cold. What does Pablo burn to keep them warm?':[ 'Money', 'Books', 'Newspaper','Marijuana']
        },
        {
            'Who is Pablo son?':[ 'Juan Pablo Escobar', 'Mario Escobar', 'Lurel Escobar', 'Tata Escobar']
        },
        {
            'What was the name of the Colonel who led the Search Bloc for Pablo?':[ 'Colonel Carillo', 'Colonel Juarez', 'Colonel Murphy', 'Colonel Pena']
        },
        {
            'Who is “Los Pepes?”':[ 'Counterterrorist group', 'Mexican Cartel', 'Medellin Cartel', 'Pablos Cartel']
        },
        {
            'Who was the main Journalist whom had tied with Pablo?':[ 'Valeria Velez', 'Cesar Avarez', 'Connie Murphy', 'Juan Corillo']
        },
        {
            'These two men, helped writers fill in the gaps of the show.':[ 'Murphy and Pena', 'Pablo son and brother', 'Juan and Maura', 'Pena and Tata']
        },
        {
            'When does the Narcos series end?':[ 'It hasn not ended yet', 'When Pablo wife dies', 'When Los Pepes is defeated', 'When Pablo is killed']
        },
        {
            'Who did Los Pepes target?':[ 'Anyone who helped Pablo', 'Only Pablo', 'The DEA', 'The Cali Cartel']
        },
        {
            'Who was working with the DEA to bring Pablo down?':[ 'Columbian special forces', 'Pablos wife', 'Limon', 'Agent Murphy']
        },
        {
            'What was Limons cover job?':[ 'Driving prostitutes around', 'A columbian officer', 'A teacher', 'A pizza man']
        }
    ];


const Alexa = require('ask-sdk-core');

exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);


        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

}

function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

     if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

}

// ------- Skill specific logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Narcos Quiz"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Welcome to The Ultimate Narcos Quiz! " + "I will ask you " + GAME_LENGTH.toString()
            + " questions , try to get as many right as you can.  For every correct answer , your score increased by 1.  Just say the number of the answer like .  my answer is 1." 
            + " If you want to know more , kindly say help , otherwise let's begin the game. " ,
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), 
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {

    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {

        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {

        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) === correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }

        if (currentQuestionIndex === GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + ". Thank you for playing Narcos Quiz. Have a good time. ";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];

            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {

    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {

    session.attributes.userPromptedToContinue = true;


    var speechOutput = "Welcome to The Ultimate Quiz of Narcos! " + " You have to find the correct answer. " +
                        " I will ask you " + GAME_LENGTH + " multiple choice questions. " + " For every correct answer , your score increased by 1. " 
                        + "Respond with the number of the answer. "
        + "For example, say that. my answer is 1, 2, 3, or 4. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {

    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!Thank you for using Narcos Quiz ! Have a great time!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}

