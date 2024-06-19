// Function to show modal with book details
function showModal(bookId) {
    const books = {
        'N1': {
            title: 'My Murder',
            author: 'Katie Williams',
            image: 'https://m.media-amazon.com/images/I/81rtLd2TvNL._AC_UF1000,1000_QL80_.jpg',
            description: `
            <p><strong>What if the murder you had to solve was your own?</strong></p>
            <p>Lou is a happily married mother of an adorable toddler. She's also the victim of a local serial killer. Recently brought back to life and returned to her grieving family
             by a government project, she is grateful for this second chance. But as the new Lou re-adapts to her old routines, and as she bonds with other female victims, she realizes that
              disturbing questions remain about what exactly preceded her death and how much she can really trust those around her.
            Now it's not enough to care for her child, love her husband, and work the job she's always enjoyed--she must also figure out the circumstances of her death. Darkly comic, tautly paced, 
            and full of surprises, My Murder is a devour-in-one-sitting, clever twist on the classic thriller.</p>`
        },
        'N2': {
            title: 'Biography of X',
            author: 'Catherine Lacey',
            image: 'https://m.media-amazon.com/images/I/A1GfAsYaYDL._AC_UF1000,1000_QL80_.jpg',
            description: `
            <p><strong>From one of our fiercest stylists, a roaring epic chronicling the life, times, and secrets of a notorious artist.</strong></p>
            <p>When X—an iconoclastic artist, writer, and polarizing shape-shifter—falls dead in her office, her widow, wild with grief and refusing everyone’s good advice, 
            hurls herself into writing a biography of the woman she deified. Though X was recognized as a crucial creative force of her era, she kept a tight grip on her life story. 
            Not even CM, her wife, knew where X had been born, and in her quest to find out, she opens a Pandora’s box of secrets, betrayals, and destruction. All the while, she 
            immerses herself in the history of the Southern Territory, a fascist theocracy that split from the rest of the country after World War II, as it is finally, in the present day,
             forced into an uneasy reunification.</p>`

        },
        'N3': {
            title: 'Emergency: Stories',
            author: 'Kathleen Alcott',
            image: 'https://m.media-amazon.com/images/I/61T74EkQoJL._AC_UF1000,1000_QL80_.jpg',
            description: `
            <p>A professor finds a photograph of her deceased mother in a compromising position on the wall of a museum. A twenty-something's lucrative remote work sparks
             paranoia and bigotry. A transplant to a new city must make a choice about who she trusts when her partner reveals a violent history. The summer after her divorce 
             from an older man, an exiled painter's former friends grapple with rumors that she attempted to pass as a teenager.
            In this long-awaited debut collection, Kathleen Alcott turns her skills as a stylist on the unfreedoms of American life--as well as the guilt that stalks those who
             survive them. Emergency roams from European cities to scorched California towns, drug-smeared motel rooms to polished dinner parties, taking taut, surprising portraits
              of addiction, love, misogyny, and sexual power. Confronting the hidden perils of class ascension, the women in these stories try to pay down the psychic debts of their
               old lives as they search for a new happiness they can afford.</p>`
        },
        'N4': {
            title: 'The Bee Sting',
            author: 'Paul Murray',
            image: 'https://m.media-amazon.com/images/I/71y5RG8XkTL._AC_UF1000,1000_QL80_.jpg',
            description: `
            <p><strong>From the author of Skippy Dies comes Paul Murray's The Bee Sting, an irresistibly funny, wise, and thought-provoking tour de force about family, 
            fortune, and the struggle to be a good person when the world is falling apart.</strong></p>
            <p>The Barnes family is in trouble. Dickie’s once-lucrative car business is going under―but rather than face the music, he’s spending his days in the woods, 
            building an apocalypse-proof bunker with a renegade handyman. His wife Imelda is selling off her jewelry on eBay, while their teenage daughter Cass, formerly 
            top of her class, seems determined to binge-drink her way through her final exams. And twelve-year-old PJ is putting the final touches to his grand plan to run away from home.
            Where did it all go wrong? A patch of ice on the tarmac, a casual favor to a charming stranger, a bee caught beneath a bridal veil―can a single moment of bad luck 
            change the direction of a life? And if the story has already been written―is there still time to find a happy ending?</p>`
        },
        'N5': {
            title: 'Day',
            author: 'Michael Cunningham',
            image: 'https://m.media-amazon.com/images/I/81JrUiHIWQL._AC_UF1000,1000_QL80_.jpg',
            description: `
            <p>As the world changes around them, a family weathers the storms of growing up, growing older, falling in and out of love, losing the things that are most precious—and
             learning to go on—from the Pulitzer Prize–winning author of The Hours</p>
             <p>From the brilliant mind of Pulitzer Prize winner Michael Cunningham, Day is a searing, exquisitely crafted meditation on love and loss and the struggles and limitations
              of family life—how to live together and apart.</p>`
        }
    };

    const book = books[bookId];
    const modalTitle = document.querySelector('.modal-title');
    const modalBody = document.querySelector('.modal-body');

    modalTitle.textContent = book.title;
    modalBody.innerHTML = `
        <p><strong>Author:</strong> ${book.author}</p>
        <img src="${book.image}" class="img-fluid mb-3" alt="${book.title}">
        <p>${book.description}</p>
    `;

    const modal = document.getElementById('bookModal');
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.classList.add('modal-open');

    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop', 'fade', 'show');
    document.body.appendChild(modalBackdrop);

    modal.querySelector('.close').addEventListener('click', hideModal);
    modalBackdrop.addEventListener('click', hideModal);

    function hideModal() {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        modalBackdrop.remove();
    }
}

// Event listener for dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
