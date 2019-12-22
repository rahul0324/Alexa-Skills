'use strict';

var questions = [
       {
            'To whom Kaleen Bhaiya said "आप जिस शहर में नौकर बनके आए है हम मालिक है उस शहर के"?':[ 'मौर्या', 'कम्पाउण्डर', 'रतन सिंह', 'गजगामिनी']
        },
        {
            'who said "अगली बार मुन्ना भैया घर आए, जिंदा वापस नहीं लौटे तो"?':[ 'गुड्डू पंडित', 'डिम्पी', 'बबलू पंडित', 'कम्पाउण्डर']
        },
        {
            'What is being referred to as बवाल "अबे बवाल चीज है बे, सिस्टम हिल जाता है"?':[ 'गन', 'गोली', 'बुलेट', 'डिम्पी']
        },
        {
            'Who said "शादी कोई खाना, खाना थोड़ी ही न है कि करना ही है"?':[ 'गुड्डू', 'डिम्पी', 'गोलू', 'कम्पाउण्डर']
        },
        {
            'Who said "गन्स की मदद से डर नहीं बढ़ाना है, डर की मदद से गन्स बढ़ानी है"?':[ 'बबलू', 'कम्पाउण्डर', 'मक़सूद', 'डिम्पी']
        },
        {
            'To whom स्वीटी said this, "छूना नहीं हमको बिना परमिशन के"?':[ 'गुड्डू', 'मुन्ना', 'बबलू', 'डिम्पी']
        },
        {
            'Who said "फट गई  है उसकी, जाने दीजिये।"?':[ 'जज','लॉयर', 'रमाकांत पंडित', 'गुड्डू']
        },
        {
            'त्रिपाठी के पहले किन लोगों का raaj था Mirzapur पे?':[ 'चौधरी का', 'रमा सिंह कांत का', 'मौर्या का', 'गुड्डू का']
        },
        {
            'रति शंकर शुक्ल की हत्या किस राज्य में हुई थी?':[ 'उत्तर प्रदेश', 'बिहार', 'मध्य प्रदेश', 'राजस्थान']
        },
        {
            'What was बर्फी referred in the web series Mirzapur?':[ 'अफीम', 'चरस', 'गांजा', 'नान खटाई']
        },
        {
            'What character did Actress of Movie Haramkhor. श्वेता त्रिपाठी played in Mirzapur?':[ 'गोलू', 'डिम्पी', 'स्वीटी', 'गुड्डू']
        },
        {
            'इनमे से किसने हिंदी का वरमाला पूरा सुनाया था?':[ 'गुड्डू', 'प्रिंस चार्ल्स', 'लाला', 'स्वीटी']
        },
        {
            'कालेन भैया और मुन्ना भैया ने किसे Postman कहा?':[ 'स्वीटी के पापा और गोली के पापा ', 'गोली के पापा और बबलू पंडित ', 'बबलू पंडित और स्वीटी के पापा', 'बबलू पंडित और कम्पाउण्डर']
        },
        {
            'इनमें से कौन सा character लोकप्रिय रूप से गजगामिनी गुप्ता के नाम से जाना जाता था?':[ 'गोली गुप्ता', 'डिम्पी गुप्ता','स्वीटी गुप्ता', 'लाला']
        },
        {
            'गुड्डू पंडित के पिता का नाम क्या था?':[ 'रमाकांत', 'मौर्या', 'रति शंकर', 'लाला']
        },
        {
            'Mirzapur किस महीने रिलीज़ हुई?':[ 'नवंबर', 'दिसंबर', 'अक्टूबर', 'जनुअरी']
        },
        {
            'Mirzapur के पहले सीजन में कितने एपिसोड है?':[ '9', '8','10', '7']
        },
        {
            'आखिर में, जिन्दा बचा कौन था?':[ 'गुड्डू भैया', 'स्वीटी', 'गोलू', 'बबलू पंडित ']
        },
        {
            'गुड्डू भैया का असली नाम क्या है?':[ 'अली फैजल', 'विक्रांत मसमे', 'दिव्येन्दु', 'महाराज सिंह']
        },
        {
            'अखंड त्रिपाठी की पत्नी कौन थी?':[ 'बीना', 'डिम्पी', 'स्वीटी', 'श्वेता त्रिपाठी ']
        },
        {
            'कम्पाउण्डर को किसने मारा?':[ 'मुन्ना भैया ', 'गुड्डू पंडित ', 'बबलू पंडित ', 'रमाकांत पंडित ']
        },
        {
            'Mirzapur का प्रारंभिक दृश्य कौन सा है?':[ 'शादी का दृश्य', 'फाइटिंग सीन', 'मुन्ना और स्वीटी का सीन', 'नाचने का सीन']
        },
        {
            'स्वीटी का असली नाम क्या है?':[ 'श्रिया पिलगांवकर', 'श्वेता त्रिपाठी', 'रसिका दुगल', 'हिमानी सिंघल']
        },
        {
            'अखंडानंद त्रिपाठी का विरोधी कौन था?':[ 'रति शंकर शुक्ला', 'मंत्री जी', 'मौर्या ', 'लाला']
        },
        {
            'Mirzapur का प्लेटफार्म?':[ 'अमेजॉन प्राइम', 'नेटफ्लिक्स', 'हॉटस्टार', 'इनमे से कोई नहीं']
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
var CARD_TITLE = "Quiz of Mirzapur"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Mirzapur के Quiz में आपका स्वागत है|" + " में आपसे   " + GAME_LENGTH.toString()
            + " question पूछूँगी, जितना हो सके उतना सही पाने की कोशिश करें, हर सही जवाब के लिए, आपका स्कोर 1 से बढ़ जाएगा, केवल answer की संख्या कहें, जैसे की, मेरा आंसर 1 है|"
            + " यदि आप अधिक जानना चाहते हैं, तो कृपया help कहें, अन्यथा खेल शुरू करते है|",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), 
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = " Question 1. " + spokenQuestion + " ",

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
        throw "अमान्य Game Length.";
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
        throw "Question के लिए पर्याप्त answer नहीं है |";
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
        speechOutput = "कोई खेल प्रगति पर नहीं है। क्या आप एक नया Game शुरू करना चाहते हैं? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {

        var reprompt = session.attributes.speechOutput;
        var speechOutput = "आपका  जवाब 1 और " + ANSWER_COUNT + " के बीच की संख्या होना चाहिए | " + reprompt;
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
            speechOutputAnalysis = "सही है| ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "गलत है|  "
            }
            speechOutputAnalysis += " सही जवाब है " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }

        if (currentQuestionIndex === GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : " आपका जवाब  ";
            speechOutput += speechOutputAnalysis + " आपको  " + GAME_LENGTH.toString()+ " में से "
                + currentScore.toString() + " मिला| Mirzapur Quiz खेलने के लिए धन्यवाद| आपका समय अच्छा गुजरे";
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
            speechOutput += userGaveUp ? "" : "आपका जवाब  ";
            speechOutput += speechOutputAnalysis + "आपका स्कोर " + currentScore.toString() + " है| " + repromptText;

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


    var speechOutput = "Mirzapur की Quiz में आपका स्वागत है, " + " आपको सही उत्तर खोजना होगा|" +
                        " में आपसे " + GAME_LENGTH + " multiple choice questions पूछूँगी| " + " प्रत्येक सही जवाब के लिए, आपके अंक में 1 की वृद्धि होगी " 
                        + " answer की संख्या के साथ जवाब दें। "
        + " जैसे की, बोलिये,  मेरा answer 1 है, या मेरा answer 2 है, या 3 या 4| "
        + " आखिरी सवाल दोहराने के लिए, बोलिये, repeat करो |  "
        + " क्या आप खेलना जारी रखेंगे?",
        repromptText = " किसी question का answer देने के लिए, answer की संख्या के साथ जवाब दें| "
        + " क्या आप खेलना जारी रखेंगे?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {

    callback(session.attributes,
        buildSpeechletResponseWithoutCard(" गुड बाय! Mirzapur की Quiz का उपयोग करने के लिए धन्यवाद! आपका समय बेहतर रहे!", "", true));
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

