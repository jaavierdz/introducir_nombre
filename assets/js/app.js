document.getElementById('formNombre').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('CajaNombre').value;
    alert(`Hola ${nombre}, mi nombre es Sergio Solana y soy un estudiante de SMR de 2º curso de Joyfe, Madrid.`);
    alert(`Tere soy buenísimo no hace falta que me revises nada, pero si quieres, puedes ver mi perfil en Linkedin.`);
    alert(`O también puedes ver mi GitHub, donde tengo proyectos subidos, también es cierto que tengo algunos ocultos.`);
    alert(`Para más información sobre mí puedes visitar mi sitio web.`);
    alert(`https://seergiocorp.site/`);
    alert(`Un saludo Tere!`);
});
