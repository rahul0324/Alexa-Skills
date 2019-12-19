'use strict';

var questions = [
        {
            'Who was responsible for the creation of the Night King?':[ 'The Children of the Forest', 'The Lord of Light', 'The Drowned God', 'The First Men']
        },
        {
            'In the TV show, what was Hodor called before he got his tragic door-holding nickname?':[ 'Wylis', 'Horys', 'Myrys', 'Gladys']
        },
        {
            'Who was the leader of the Golden Company sellswords when Dany ransacked King’s Landing?':[ 'Harry Strickland', 'Wes Borland', 'Kiefer Sutherland', 'Robert Westland']
        },
        {
            'Dany’s dragons are (or were) called Drogon, Viserion and ____?':[ 'Rhaegal', 'Dougal', 'Vhagar', 'Balerion']
        },
        {
            'Iwan Rheon, who played Ramsay Bolton, was almost cast as which character?':[ 'Jon Snow', 'Gendry', 'Podrick Payne', 'Robb Stark']
        },
        {
            'Who said: I don’t plan on knitting by the fire while men fight for me?':[ 'Lyanna Mormont', 'Sansa Stark', 'Ser Brienne of Tarth', 'Olenna Tyrell']
        },
        {
            'Who’s this grizzled chap with Ser Jorah and Daenerys?':[ 'Ser Barristan Selmy','Ser Elrick Sarsfield', 'Ser Belon Swann', 'Ser Royland Degore']
        },
        {
            'Which body part did Kit Harington say was in severe pain when filming the dragon-riding scenes in season eight?':[ 'His right testicle', 'His right arm', 'His right Knee', 'His right shoulder']
        },
        {
            'Which of these characters is dead?':[ 'Eddison Tollett', 'Jaqen H Gar', 'Nymeria the direwolf', 'Hot Pie']
        },
        {
            'What is the name of the giant dragon-slaying crossbow that failed to protect King’s Landing?':[ 'Scorpion', 'Millipede', 'Mantis', 'The You are Making Me Very Cross(bow)']
        },
        {
            'Where is the House of Black and White, the training temple of the Faceless Men?':[ 'Braavos', 'Qarth', 'Meereen', 'No one knows']
        },
        {
            'What is the go-to anaesthetic for maesters across Westeros called?':[ 'Milk of the poppy', 'Shade of the evening', 'Sourleaf', 'Having another wine']
        },
        {
            'Which relative did Euron Greyjoy murder to take the Salt Throne of the Iron Islands?':[ 'His brother', 'His uncle', 'His nephew', 'His cousin']
        },
        {
            'What is the name of Arya’s sword?':[ 'Needle', 'Ice','Pointry', 'Fang']
        },
        {
            'In which King’s Landing slum did Gendry grow up?':[ 'Flea Bottom', 'Rat Bottom', 'Rhaenys Hill', 'Dragonpit']
        },
        {
            'Who was Ned Stark’s predecessor as Robert Baratheon’s Hand?':[ 'Jon Arryn', 'Jaime Lannister', 'Tywin Lannister', 'Sir Jorah Mormont']
        },
        {
            'Whose last words were: Give me something for the pain, and let me die?':[ 'Robert Baratheon', 'Stannis Baratheon','Hodor', 'Walder Frey']
        },
        {
            'How many kings and queens of Westeros did Lord Varys serve?':[ 'four', 'three', 'two', 'five']
        },
        {
            'Who had the honour of killing Petyr Baelish?':[ 'Arya Stark', 'Jon Snow', 'Sansa Stark', 'Brienne']
        },
        {
            'What is the name of Jon Snow Direwolf?':[ 'Ghost', 'Grey Wind', 'Graham', 'Gargamel']
        },
        {
            'How did Daenerys Targaryen eventually hatch her dragon eggs?':[ 'In a funeral pyre', 'In a fireplace', 'In a frozen cave', 'In a lightning storm']
        },
        {
            'The phrase "Valar Morghulis" or "all men must die" is usually responded with?':[ 'Valar Dohaeris or all men must serve', 'Valar Rohnas or all men must live', 'Valar GoGo or all men must dance', 'Valar SoSo or all men must dance']
        },
        {
            'American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise?':[ 'The Chronicles of Narnia', 'The Legend of Zelda', 'Lord of the Rings', 'Highlander']
        },
        {
            'What is the only thing that can put out volatile Wildfire?':[ 'Sand', 'Water', 'Dragons blood', 'Sunlight']
        },
        {
            'Besides dragonglass, what is the only other substance capable of defeating White Walkers?':[ 'Valyrian Steel', 'Weirwood', 'Wildfire', 'Snowballs']
        },
        {
            'How many times has Beric Dondarrion been brought back to life?':[ 'Six times', 'Seven times', 'Three times', 'Five times']
        },
        {
            'Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?':[ 'Lady', 'Nymeria','Summer', 'Ghost']
        },
        {
            'Aryas punishment for stealing from the Many-Face God is?':[ 'Blindness', 'Uncontrollable laughter', 'Death', 'Memory Loss']
        },
        {
            'Its nothing were the last words of this infamous character?':[ 'King Joffrey', 'Renly Baratheon', ' Tywin Lannister', 'Robb Stark']
        },
        {
            'The name of King Tommens favorite cat is?':[ 'Ser Pounce', 'Prince Fuzzy', 'Battle Pus', 'Little Lion']
        },
        {
            'What was the name of Ned Stark greatsword?':[ 'Ice', 'Oathkeeper', 'Widow Wail', 'Northguard']
        },
        {
            'Who shoots the flaming arrow that subsequently destroy Stannis fleet in Blackwater Bay?':[ 'Bronn', 'Tyrion Lannister', 'King Joffrey', 'Jaime Lannister']
        },
        {
            'Prince Oberyn Martell is nicknamed the Red Viper because of his combat and?':[ 'Knowledge of poisons', 'Nighttime attacks', 'Ruby-colored armor', 'Pride in drawing blood first']
        },
        {
            'The Night King was created using a dagger made of?':[ 'Dragonglass', 'Weirwood', 'Valyrian Steel','Blue Ice']
        },
        {
            'How many arrows does Ramsay Bolton let loose at Rickon Stark?':[ 'Four', 'Three', 'Five', 'Two']
        },
        {
            'Who created the secret tunnel in the sewers under Casterly Rock?':[ 'Tyrion Lannister', 'Lord Baelish', 'Jaime Lannister', 'Varys']
        },
        {
            'What is Sansa Stark favorite treat?':[ 'Lemon cakes', 'Honey cakes', 'Apple cranberry crisp', 'Strawberry rhubarb pie']
        },
        {
            'Dead creatures revived by White Walkers are known as?':[ 'Wights', 'Zombie', 'Claws', 'Walkers']
        },
        {
            'For how many kings did Lord Tywin Lannister serve as Hand?':[ 'three', 'two', 'zero', 'five']
        },
        {
            'Which of these was The King Who Knelt?':[ 'Torrhen Stark', 'Mikken Stark', 'Eddard Stark', 'Tommen Baratheon']
        },
        {
            'What does Varys usually say is his goal?':[ 'To serve the realm', 'To avenge the Targaryens', 'To survive', 'To Eureka']
        },
        {
            'Patchface came from which of the Free Cities?':[ 'Volantis', 'Valyria', 'Lorath', 'Valgria']
        },
        {
            'House Tyrell’s castle is called?':[ 'Highgarden', 'Harrenhal', 'The Shadow Tower', 'Haffenhal']
        },
        {
            'Once Robert died, who became the king and protector of Westeros?':['Joffrey Baratheon','Renly Baratheon','Stannis Baratheon','Eddard Stark']
        },
        {
            'Where did Lyanna die?':[ 'The Tower of Joy', 'Winterfell', 'The Shadow Tower', 'Valyria']
        },
        {
            'Who is the second-youngest person in the Stark family?':[ 'Bran', 'Rickon', 'Arya', 'Eddard Stark']
        },
        {
            'Who founded House Stark?':[ 'Brandon Stark', 'Eddard Stark', 'Torrhen Stark', 'Lord Baelish']
        },
        {
            'The destruction of the Great Sept of Baelor directly caused which two deaths?':[ 'Margaery Tyrell and Lancel Lannister', 'Margaery Tyrell and Sansa Stark', 'Margaery Tyrell and Tommen Baratheon', 'Tommen Baratheon and Sansa Stark']
        },
        {
            'Which house has the sigil of a silver trout?':[ 'House Tully', 'House Targaryen', 'House Stark', 'House Baratheon']
        },
        {
            'Who created the first White Walker?':[ 'The Children of the Forest', 'The Night’s Watch', 'The First Men', 'The Second Men']
        },
        {
            'In which part of Westeros can you find The Dreadfort?':[ 'The North', 'The Riverlands', 'The Stormlands', 'The South']
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
var CARD_TITLE = "Game of Thrones Quiz"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Welcome to Game of Thrones Quiz! " + "I will ask you " + GAME_LENGTH.toString()
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
                + GAME_LENGTH.toString() + ". Thank you for playing Game Of Thrones Quiz. Have a good time. ";
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


    var speechOutput = "Welcome to Game of Thrones Quiz! " + " You have to find the correct answer. " +
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
        buildSpeechletResponseWithoutCard("Good bye!Thank you for using Game of Thrones Quiz ! Have a great time!", "", true));
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



