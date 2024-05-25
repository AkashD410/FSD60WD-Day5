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
  
  Object.entries(resume).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });