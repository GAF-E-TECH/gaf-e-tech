function envoyerWhatsApp() {

    const nom = document.getElementById("nom").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const besoin = document.getElementById("besoin").value;

    const message =
`Bonjour GAF E-TECH
Nom: ${nom}
Téléphone: ${telephone}
Email: ${email}
Besoin: ${besoin}`;

    const url = "https://wa.me/2290194733397?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}