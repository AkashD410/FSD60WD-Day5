const resume = {
    "name": "Akash",
    "email": "akmailshere18@gmail.com",
    "phone": "7010814406",
    "address": "Koradacheri",
    "summary": "Budding JS developer.",
    "skills": [
      "JavaScript",
      "HTML5",
      "CSS3",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git"
    ]
  };
  
 
  for (const key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(`${key}: ${resume[key]}`);
    }
  }
  