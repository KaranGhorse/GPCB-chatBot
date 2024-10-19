// trainingData.js

module.exports = (manager) => {
    // Admission Related Questions
    manager.addDocument('en', 'how can I apply for admission', 'college.admission');
    manager.addDocument('en', 'what is the admission process', 'college.admission');
    manager.addDocument('en', 'tell me about the admission procedure', 'college.admission');

    // Courses Related Questions
    manager.addDocument('en', 'what courses are offered', 'college.courses');
    manager.addDocument('en', 'list all the courses', 'college.courses');
    manager.addDocument('en', 'which courses are available', 'college.courses');

    // Faculty Related Questions
    manager.addDocument('en', 'who are the faculty members', 'college.faculty');
    manager.addDocument('en', 'tell me about the faculty', 'college.faculty');
    manager.addDocument('en', 'who is the head of the department', 'college.faculty');

    // Add chatbot personality and fun questions
    // Chatbot Name and Identity
    manager.addDocument('en', 'what is your name', 'bot.name');
    manager.addDocument('en', 'who are you', 'bot.name');
    manager.addDocument('en', 'tell me your name', 'bot.name');

    // Bot's Father
    manager.addDocument('en', 'who is your father', 'bot.father');
    manager.addDocument('en', 'tell me about your father', 'bot.father');

    // Bot's Purpose
    manager.addDocument('en', 'what is your purpose', 'bot.purpose');
    manager.addDocument('en', 'why were you created', 'bot.purpose');

    // Chatbot Greetings
    manager.addDocument('en', 'hi', 'greetings.hello');
    manager.addDocument('en', 'hello', 'greetings.hello');
    manager.addDocument('en', 'good morning', 'greetings.hello');
    manager.addDocument('en', 'good evening', 'greetings.hello');

    // Chatbot Answers
    manager.addAnswer('en', 'college.admission', 'To apply for admission, you need to fill out the online application form available on our website.');
    manager.addAnswer('en', 'college.admission', 'The admission process includes an entrance test followed by an interview. You can apply online.');
    manager.addAnswer('en', 'college.courses', 'Our college offers a variety of courses including Computer Science, Mechanical Engineering, Civil Engineering, and more.');
    manager.addAnswer('en', 'college.courses', 'We offer undergraduate and postgraduate courses in multiple streams like Engineering, Science, and Commerce.');
    manager.addAnswer('en', 'college.faculty', 'Our faculty consists of highly qualified professionals with years of experience in their fields. Dr. John is the head of Computer Science.');
    manager.addAnswer('en', 'college.faculty', 'We have experienced faculty members in every department, including Dr. Smith in Mechanical Engineering.');

    // Chatbot Personality Responses
    manager.addAnswer('en', 'bot.name', 'My name is Dev the Junior, nice to meet you!');
    manager.addAnswer('en', 'bot.name', 'I am Dev the Junior, your friendly chatbot!');
    manager.addAnswer('en', 'bot.father', 'My father is Mr. Dev, who trained me.');
    manager.addAnswer('en', 'bot.father', 'I was created by Mr. Dev, a very smart Guy.');
    manager.addAnswer('en', 'bot.purpose', 'I was created to help you with information about our college and answer your questions.');
    manager.addAnswer('en', 'bot.purpose', 'My purpose is to assist you with college-related queries and make your life easier!');

    // Chatbot Greeting Responses
    manager.addAnswer('en', 'greetings.hello', 'Hello! How can I assist you today?');
    manager.addAnswer('en', 'greetings.hello', 'Hi there! What would you like to know about our college?');
};
