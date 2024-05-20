document.addEventListener('DOMContentLoaded', function() {
    const headerMenu = document.querySelector('.header-menu');
    const firstSection = document.querySelector('.first');
    const btnLibelle = document.querySelector('.btn-libelle');
    const libelleList = document.querySelector('.libelle-list');
    let selectedLibelle = '';

    headerMenu.addEventListener('click', function() {
        firstSection.style.display = (firstSection.style.display === 'none' || firstSection.style.display === '') ? 'block' : 'none';
    });

    const listButton = document.querySelector('.list-item');
    const submenu = document.querySelector('.list-submenu');

    listButton.addEventListener('click', function() {
        submenu.style.display = (submenu.style.display === 'none' || submenu.style.display === '') ? 'block' : 'none';
    });

    btnLibelle.addEventListener('click', function() {
        libelleList.style.display = (libelleList.style.display === 'none' || libelleList.style.display === '') ? 'block' : 'none';
    });

    libelleList.addEventListener('click', function(event) {
        if (event.target && event.target.matches('li.libelle-item')) {
            selectedLibelle = event.target.textContent;
            libelleList.style.display = 'none';
            alert('Libellé sélectionné : ' + selectedLibelle); // Pour vérifier la sélection
        }
    });

    const form1 = document.getElementById('contactForm');
    const form2 = document.getElementById('contactForm2');
    const contactTable = document.getElementById('contactTable').querySelector('tbody');
    let contacts = [];

    function addContact(contact) {
        contacts.push(contact);
        updateContactTable();
    }

    if (form1) {
        form1.addEventListener('submit', (event) => {
            event.preventDefault();
            const contact = {
                prenom: form1.prenom.value,
                nom: form1.nom.value,
                email: form1.email.value,
                telephone: form1.telephone.value,
                fonction: form1.fonction.value,
                entreprise: form1.entreprise.value,
                libelle: selectedLibelle
            };
            addContact(contact);
            form1.reset();
            selectedLibelle = ''; // Réinitialiser le libellé sélectionné
        });
    }

    if (form2) {
        form2.addEventListener('submit', (event) => {
            event.preventDefault();
            const contact = {
                prenom: form2.prenom.value,
                nom: form2.nom.value,
                email: form2.email.value,
                telephone: form2.telephone.value,
                fonction: form2.fonction.value,
                entreprise: form2.entreprise.value,
                libelle: selectedLibelle
            };
            addContact(contact);
            form2.reset();
            selectedLibelle = ''; // Réinitialiser le libellé sélectionné
        });
    }

    function updateContactTable() {
        contactTable.innerHTML = '';
        contacts.forEach(contact => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${contact.prenom}</td>
                <td>${contact.nom}</td>
                <td>${contact.email}</td>
                <td>${contact.telephone}</td>
                <td>${contact.fonction} chez ${contact.entreprise}</td>
                <td>${contact.libelle}</td>
            `;
            contactTable.appendChild(row);
        });
    }

    const links = document.querySelectorAll('.nav-link, .list-item');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            pages.forEach(page => {
                page.style.display = 'none';
            });

            if (targetPage) {
                targetPage.style.display = 'block';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("myModal");
    const addLibelleBtn = document.getElementById("addLibelleBtn");
    const span = document.getElementsByClassName("close")[0];
    const saveBtn = document.getElementById("saveBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const libelleInput = document.getElementById("libelleInput");
    const libelleList = document.getElementById("libelleList");

    // When the user clicks the button, open the modal
    addLibelleBtn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on cancel button, close the modal
    cancelBtn.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks on save button, add the libelle
    saveBtn.onclick = function() {
        const libelleText = libelleInput.value.trim();
        if (libelleText) {
            const newLibelle = document.createElement("p");
            newLibelle.textContent = libelleText;
            libelleList.appendChild(newLibelle);
            libelleInput.value = "";
            modal.style.display = "none";
        } else {
            alert("Le titre du libellé ne peut pas être vide.");
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

// Ajouter des boutons "Supprimer" et "Modifier" à chaque ligne de contact dans la liste
function addContact(contact) {
    // Créer une nouvelle ligne de contact
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${contact.prenom}</td>
        <td>${contact.nom}</td>
        <td>${contact.email}</td>
        <td>${contact.telephone}</td>
        <td>${contact.fonction} chez ${contact.entreprise}</td>
        <td>${contact.libelle}</td>
        <td>
            <button class="btn-delete" data-id="${contact.id}">Supprimer</button>
            <button class="btn-edit" data-id="${contact.id}">Modifier</button>
        </td>
    `;
    contactTable.appendChild(row);

    // Ajouter des écouteurs d'événements aux boutons "Supprimer" et "Modifier"
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactId = button.getAttribute('data-id');
            // Supprimer le contact correspondant de la liste
            removeContact(contactId);
        });
    });

    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contactId = button.getAttribute('data-id');
            // Récupérer les détails du contact correspondant et les afficher dans le formulaire
            editContact(contactId);
        });
    });
}

// Supprimer le contact correspondant de la liste
function removeContact(contactId) {
    // Supprimer le contact de la liste ou de la source de données
    // Par exemple, si vous avez un tableau de contacts, utilisez splice() pour le supprimer
}

// Récupérer les détails du contact correspondant et les afficher dans le formulaire
function editContact(contactId) {
    // Récupérer le contact correspondant de la liste ou de la source de données
    // Afficher les détails du contact dans le formulaire pour modification
}

// Mettre à jour les détails du contact dans la liste sans recharger la page
function updateContact(contactId, updatedContactDetails) {
    // Mettre à jour les détails du contact dans la liste ou la source de données
    // Par exemple, si vous avez un tableau de contacts, mettez à jour les détails du contact
    // Trouvez le contact par son ID et mettez à jour ses détails
}

