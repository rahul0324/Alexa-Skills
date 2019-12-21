'use strict';

var questions = [
       {
            '2018 तक कितने सीज़न का प्रीमियर हुआ?':[ '1', '2', '3', '4']
        },
        {
            'पहला सीजन कब प्रीमियर हुआ था?':[ '2018', '2016', '2014', '2012']
        },
        {
            'Sacred Games किस स्थान पर उत्पन्न हुआ था?':[ 'इंडिया', 'अमेरिका', 'यूके', 'ऑस्ट्रेलिया']
        },
        {
            'Ganesh Gaitonde कौन है?':[ 'नवाजुद्दीन सिद्दीकी', 'सैफ अली खान', 'करन वाही', 'नीरज काबी']
        },
        {
            'बंटी की भूमिका किसने निभाई?':[ 'जतिन सरना', 'नवाजुद्दीन सिद्दीकी', 'सैफ अली खान', 'करन वाही']
        },
        {
            'Sacred Games शो किसके द्वारा निर्देशित है?':[ 'अनुराग कश्यप', 'करण ग्रोवर', 'यश राज', 'अरबाज खान']
        },
        {
            'शो का हिस्सा कौन नहीं है?':[ 'ओम पुरी','नवाजुद्दीन सिद्दीकी', 'सैफ अली खान', 'राधिका आप्टे']
        },
        {
            'सीजन 1 के पहले एपिसोड का नाम क्या है?':[ 'अश्वत्थामा', 'कालकूट', 'अतापी वतापी', 'ब्रह्म हटिया']
        },
        {
            'Ganesh के घर पर कौन मिला?':[ 'त्रिवेदी', 'पारुलकर', 'कॉन्स्टेबल कटेकर', 'सरताज सिंह']
        },
        {
            'राधिका आप्टे ने किस किरदार को निभाया है?':[ 'रॉ एजेंट अंजलि माथुर', 'Kuku', 'निदा रहीम', 'नयनिका']
        },
        {
            'चरित्र बंटी का वास्तविक नाम क्या है?':[ 'जतिन सरना', 'पंकज सरीन', 'नवाजुद्दीन', 'यतिन शर्मा']
        },
        {
            'सब मर जायेंगे सिर्फ _ बच जायेगा':[ 'त्रिवेदी', 'पंडित', 'नाथू', 'चतुर्वेदी']
        },
        {
            '____ दिन है तुम्हारे पास?':[ '25', '28', '27', '24']
        },
        {
            'गायतोंडे का भाग्यशाली आकर्षण कौन है?':[ 'कुकू', 'बंटी','त्रिवेदी', 'कांता बाई']
        },
        {
            'गायतोंडे के पहले पिता का क्या पेशा है?':[ 'पंडित', 'शेख़ीबाज़', 'आतंकवादी', 'चित्रकार']
        },
        {
            'कार का रंग क्या था Gaitonde हमेशा खुद के सपने देखता था?':[ 'लाल', 'स्वर्ण', 'सफेद', 'नीला']
        },
        {
            'गायतोंडे का पहला मामला कहाँ दर्ज किया गया था?':[ 'कैलाश पाड़ा', 'थाइन', 'वर्ली', 'उसके घर में']
        },
        {
            'सैफ अली खान के किस अंग को काट दिया गया था, जब उनका अपहरण हुआ था?':[ 'अंगूठा', 'नाक', 'हाथ', 'टांग']
        },
        {
            'गायतोंडे की माँ को कौन मारता है?':[ 'गायतोंडे', 'पारुलकर', 'सलीम', 'बंटी']
        },
        {
            'हीरो बनना है तो ​​पेहले कॉमेडी छोड किसने कहा था?':[ 'कुकू', 'मजीद', 'कांता बाई', 'बंटी']
        },
        {
            'तबुत क्या होता  है?':[ 'बंटी', 'कटेकर', 'छोटा बदरिया', 'बडा बदरिया']
        },
        {
            'गैरी लोगन का प्रवेश सिरफ मंदिर में मुफ्त है किसने कहा था?':[ 'सुभद्रा', 'बंटी', 'गायतोंडे', 'बिपिन भोसले']
        },
        {
            'बंदूकें, ड्रग्स, संपत्ति सब छोटा धन है। असली धंधा है राजनीति, किसने कहा था?':[ 'गायतोंडे', 'बंटी', 'बिपिन भोसले', 'खन्ना गुरुजी']
        },
        {
            'क्यूं आती है क़ुर्बानी हमारे ज़िन्दगी में बार बार, अल्लाह तंग आगया है हमसे?':[ 'मैल्कम मौराड', 'गायतोंडे', 'बंटी', 'सरताज सिंह']
        },
        {
            'हिंदुस्तान जब हिंदुस्तान नहीं बना था तबसे पॉलिटिक्स की मच्छी को धरम के तेल में फ्राई करते हुए आये है किसने कहा था?':[ 'गायतोंडे', 'बंटी','अंजलि माथुर', 'बिपिन भोसले']
        },
        {
            'मई कोई भी है लेकिन तेरे जैसा नहीं है किसने कहा था?':[ 'गायतोंडे', 'बंटी', 'अंजलि माथुर', 'कुक्कू']
        },
        {
            'कभी कभी लगता है कि अपुन ही भगवान् है किसने कहा था?':[ 'गायतोंडे', 'सरताज सिंह', 'बंटी', 'बिपिन भोसले']
        },
        {
            'अपुन कुकू के पीछे भाग रहा था और देश मंदिर के पीछे किसने कहा था?':[ 'गायतोंडे', 'नयनिका ', 'सरताज सिंह', 'बिपिन भोसले']
        },
        {
            'अगर मर्द फील्ड पे काम करना चाहें तोह पैशन. और अगर औरत करना चाहें तोह भूत?':[ 'अंजलि माथुर', 'गायतोंडे', 'सरताज सिंह', 'बंटी']
        },
        {
            'जसकी कुकू उसकी बांबई किसने कहा था?':[ 'गायतोंडे', 'बंटी', 'सुलेमान ईसा', 'छोटा बदरिया']
        },
        {
            'भगवन को मानते हो? भगवन को घंटा फरक पड़ता है किसने कहा था?':[ 'गायतोंडे', 'बंटी', 'सरताज','माथु ']
        },
        {
            'धर्मों का रूप एहि है. राहगीर को प्रेम से घर बुलाओ. आदर समित भोजन ग्रहण कराओ. फिर उसकी आत्मा पर कब्ज़ा करलो किसने कहा था?':[ 'खन्ना गुरु जी', 'गायतोंडे', 'बिपिन भोसले', 'सरताज सिंह']
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
var CARD_TITLE = "Quiz of Sacred Games"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Sacred Games के Quiz में आपका स्वागत है|" + " में आपसे   " + GAME_LENGTH.toString()
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
                + currentScore.toString() + " मिला| Sacred Games Quiz खेलने के लिए धन्यवाद| आपका समय अच्छा गुजरे";
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


    var speechOutput = "Sacred Games की Quiz में आपका स्वागत है " + " आपको सही उत्तर खोजना होगा|" +
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
        buildSpeechletResponseWithoutCard(" गुड बाय! Sacred Games की Quiz का उपयोग करने के लिए धन्यवाद! बेहतर समय रहे!", "", true));
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

