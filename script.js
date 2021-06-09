 // Get the modals
        var modalAbout = document.getElementById("modalAbout");
        var modalHobbies = document.getElementById("modalHobbies");
        var modalInfo = document.getElementById("modalInfo");
        var modalSkills = document.getElementById("modalSkills");
        var modalPerson = document.getElementById("modalPerson");
        var modalFacts = document.getElementById("modalFacts");
        // Get the button that opens the modal
        var btnAbout = document.getElementById("about");
        var btnHobbies = document.getElementById("hobbies");
        var btnInfo = document.getElementById("info");
        var btnSkills = document.getElementById("skills");
        var btnFacts = document.getElementById("facts");
        var btnPerson = document.getElementById("person");

        // Get the <span> element that closes the modal
        var span0 = document.getElementsByClassName("close")[0];
        var span1 = document.getElementsByClassName("close")[1];
        var span2 = document.getElementsByClassName("close")[2];
        var span3 = document.getElementsByClassName("close")[3];
        var span4 = document.getElementsByClassName("close")[4];
        var span5 = document.getElementsByClassName("close")[5];


        // When the user clicks on the button, open the modal
        function OpenModal(button, modal) {
            button.onclick = function () {
                modal.style.display = "block";
            }
        }

        OpenModal(btnAbout, modalAbout);
        OpenModal(btnHobbies, modalHobbies);
        OpenModal(btnSkills, modalSkills);
        OpenModal(btnFacts, modalFacts);
        OpenModal(btnInfo, modalInfo);
        OpenModal(btnPerson, modalPerson);



        // When the user clicks on <span> (x), close the modal
        function CloseModal(span, modal) {
            span.onclick = function () {
                modal.style.display = "none";
            }
        }
        CloseModal(span0, modalAbout);
        CloseModal(span1, modalHobbies);
        CloseModal(span2, modalInfo);
        CloseModal(span3, modalSkills);
        CloseModal(span4, modalPerson);
        CloseModal(span5, modalFacts);



        // When the user clicks anywhere outside of the modal, close it

        window.onclick = function (event) {
            if (event.target == modalAbout) {
                modalAbout.style.display = "none";
            }
            if (event.target == modalHobbies) {
                modalHobbies.style.display = "none";
            }
            if (event.target == modalSkills) {
                modalSkills.style.display = "none";
            }
            if (event.target == modalFacts) {
                modalFacts.style.display = "none";
            }
            if (event.target == modalInfo) {
                modalInfo.style.display = "none";
            }
            if (event.target == modalPerson) {
                modalPerson.style.display = "none";
            }
        }