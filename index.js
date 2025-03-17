const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
  
    let lowerTutorial = tutorial.toLowerCase();
    
  
    const specialWords = {
      "nan": "NaN",
      "jsonp": "JSONP",
      "stoppropagation": "StopPropagation",
      "preventdefault": "PreventDefault",
      "api": "API",
      "oo": "OO"
    };
    
  
    Object.keys(specialWords).forEach(word => {
    
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      lowerTutorial = lowerTutorial.replace(regex, specialWords[word]);
    });
    
    
    return lowerTutorial
      .split(" ")
      .map(word => {
      
        if (Object.values(specialWords).includes(word)) {
          return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
};