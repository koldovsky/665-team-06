const cardsList = {
    management: [
        { title: "Patrick Pool", content: "CEO | 10 years of experience", contacts: "pool@email.com", description: "Patrick Pool has more than 10 years of experience in IT development and marketing. He successfully leads our team to create one-of-a-kind digital solutions." },
        { title: "Andrew Wilson", content: "Senior Project Manager | 8 years of experience", contacts: "wilson@email.com", description: "Andrew is our experienced professional in the project management. He brings together various talents to produce unrivaled and unique work. He is the soul of our first-class design team." },
        { title: "Mark Taylor", content: "Support Manager | 6 years of experience", contacts: "taylor@email.com", description: "Mark works as a Support Manager for over 6 years. He is a real expert in dealing with any aspects of client-related support. He is committed to client satisfaction and strives to build long-term relationships with them." },
        { title: "Helen Smith", content: "Director of Finance | 7 years of experience", contacts: "smith@email.com", description: "Helen is a Financial Director with prior experience in senior management. She is responsible for finance and company operations." }
    ],
    design: [
        { title: "Jason Lewis", content: "Web Designer | 8 years of experience", contacts: "lewis@email.com", description: "Jason has over 8 years of web design and development experience. He is really a professional in turning any design idea into a reality." },
        { title: "Richard King", content: "Web Designer | 6 years of experience", contacts: "king@email.com", description: "Richard is highly experienced in crafting awesome websites with user-friendly interfaces. He is master in solving any design challenge imaginable." },
        { title: "Andy Myers", content: "Web Developer | 10 years of experience", contacts: "myers@email.com", description: "Mark works as a Support Manager for over 6 years. He is a real expert in dealing with any aspects of client-related support. He is committed to client satisfaction and strives to build long-term relationships with them." },
        { title: "Patrick Pool", content: "Copywriter | 8 years of experience", contacts: "stone@email.com", description: "Jane has been working in content marketing for more than eight years, helping our company fill sites with relevant and easy-to-read content to make them more attractive." }
    ],
    visual:[
        { title: "Tina Garcia", content: "Graphic Designer | 6 years of experience", contacts: "garcia@email.com", description: "Patrick Pool has more than 10 years of experience in IT development and marketing. He successfully leads our team to create one-of-a-kind digital solutions." },
        { title: "Linda Hoffman", content: "Project Manager | 6 years of experience", contacts: "hoffman@email.com", description: "Andrew is our experienced professional in the project management. He brings together various talents to produce unrivaled and unique work. He is the soul of our first-class design team." },
        { title: "Sean Simon", content: "Illustrator | 3 years of experience", contacts: "simon@email.com", description: "Mark works as a Support Manager for over 6 years. He is a real expert in dealing with any aspects of client-related support. He is committed to client satisfaction and strives to build long-term relationships with them." },
        { title: "Chris Addington", content: "Senior Illustrator | 5 years of experience", contacts: "addington@email.com", description: "Patrick Pool has more than 10 years of experience in IT development and marketing. He successfully leads our team to create one-of-a-kind digital solutions." }
    ],
    uidesign:  [
        { title: "Brian Johnson", content: "UI Designer | 4 years of experience", contacts: "lewis@email.com", description: "Brian is a talented master in crafting UI designs. He is committed to continuous education to stay aware of the latest design trends and technological feasibility." },
        { title: "Robert O'Neill", content: "UI & UX Designe | 5 years of experience", contacts: "robert@email.com", description: "Robert always listens to the clients' visions and creates data-driven designs for what they imagine, what they really need, and require." },
        { title: "Jack Nicholson", content: "Project Manager | 3 years of experience", contacts: "nicholson@email.com", description: "Jack always strives to go above and beyond in order to achieve project goals meeting any clients' needs, expectations, and budgets. Feel free to hire him for your next project!" },
        { title: "Linda Stewart", content: "Lead UI Designer | 6 years of experience", contacts: "linda@email.com", description: "Hire our highly trained UI Designer. Linda is passionate about creating groundbreaking and breathtaking solutions for web, software, and mobile." }
    ]
};

(function () {
    renderCards('management');
    const tabs = document.getElementsByClassName('tab-nav');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', (event) => {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('tab-nav-active');
            }
            event.target.classList.add('tab-nav-active');

            renderCards(event.target.id);
        });
    }
})();

function renderCards(key) {
    const cardsData = cardsList[key];
    const cardsContainer = document.getElementsByClassName('our-team__cards')[0];

    clearContainer(cardsContainer);

    cardsData.forEach(card => {
        cardsContainer.appendChild(renderCard(card));
    });
}

function renderCard(card) {
    var cardContainer = document.createElement('div');

    cardContainer.classList.add("card-container");

    var cardTitle = document.createElement('h3');
    cardTitle.textContent = card.title;

    var cardContent = document.createElement('p');
    cardContent.textContent = card.content;

    var cardContacts = document.createElement('p');
    cardContacts.textContent = card.contacts;

    var cardDescription = document.createElement('p');
    cardDescription.textContent = card.description;

    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardContent);
    cardContainer.appendChild(cardContacts);
    cardContainer.appendChild(cardDescription);

    return cardContainer;
};

function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
};