const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
    // const usuario = usuarios[0];

    // for (let index = 0; index < usuario.tecnologias.length; index++) {
    //     const tecnologia = usuario.tecnologias[index];
    //     if (tecnologia === 'CSS') return true;
    // }

    // for (const tecnologia of usuario.tecnologias) {
    //     if (tecnologia === 'CSS') return true;
    // }

    // return false;


    const css = usuario.tecnologias.findIndex(tec => tec === 'CSS');
    return css > -1 ? true : false;
}

// for (let index = 0; index < usuarios.length; index++) {
//     const usuario = usuarios[index];
//     const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuario);

//     if (usuarioTrabalhaComCss) {
//         console.log(`O usuário ${usuario.nome} trabalha com CSS`);
//     }
// }

usuarios.forEach((usuario) => {
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuario);
    if (usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
})
