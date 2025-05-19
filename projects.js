// Fetch project data from the JSON file
fetch("./projects.json")
	.then((response) => response.json())
	.then((projects) => {
		// Select the correct container for the Projects section
		const projectsContainer = document.querySelector(
			".project-containers"
		);

		// Iterate over the projects and dynamically create HTML
		projects.forEach((project) => {
			const projectCard = document.createElement("div");
			projectCard.classList.add(
				"details-container",
				"color-container"
			);

			projectCard.innerHTML = `
        <div class="article-container">
          <img src="${project.image}" alt="${project.name}" class="project-img" />
        </div>
        <h2 class="skills-sub-title project-title">${project.name}</h2>
        <p>${project.description}</p>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubLink}'">Github</button>
          <button class="btn btn-color-2 project-btn" onclick="location.href='${project.liveDemoLink}'">Live Demo</button>
        </div>
      `;

			if (projectsContainer) {
				projectsContainer.appendChild(projectCard);
			} else {
				console.error("projectsContainer element not found!");
			}
		});
	})
	.catch((error) => console.error("Error loading projects:", error));
