document.addEventListener('DOMContentLoaded', function(){
    const user = 'danzSTK';
    const apiSrc = `https://api.github.com/users/${user}`
    // const token =  ; // --> Seu token de validação aqui para a utilização dessa APi
    fetch(apiSrc, {
        headers:{
            'Authorization': `token ${token}`
        }
    }).then(function(resposta){
        return resposta.json()
    })
        .then(function(json){
            const profilePhoto = json.avatar_url;
            console.log(profilePhoto)
            const followers = json.followers;
            const following = json.following;
            const repositorios = json.public_repos;
            const userName = json.login;
            const name = json.name;
            const urlProfile = json.html_url;

            const img = document.getElementById('profile__photo');
            const elementName =  document.getElementById('name');
            const elementUSerName = document.getElementById('user__name');
            const elementFollowers = document.querySelector('#followers');
            const elementFollowings = document.querySelector('#followings');
            const elementRepositorios = document.querySelector('#repositorios');
            const buttonSrcProfileUser = document.getElementById('link__profile');

            function addInfos(){
                img.src = profilePhoto
                elementName.innerText = name
                elementUSerName.innerText = `@${userName}`;
                elementRepositorios.innerHTML = `<h4>Repositórios</h4> ${repositorios}`;
                elementFollowers.innerHTML = `<h4>Seguidores</h4> ${followers}`;
                elementFollowings.innerHTML = `<h4>Seguindo</h4> ${following}`;
                buttonSrcProfileUser.href = urlProfile
            }
            
            addInfos()
        })
        /* .catch(
            alert("Ops! Encontramos um erro em nossos servidores."),
            alert('tente novamente mais tarde'),
            document.body.style.backgroundColor = '#1e1e1e',
            document.body.innerHTML = '<h1 style=" text-transform: uppercase; color: #ccc; width: 100vw; text-align: center; font-family: sans-serif; position: absolute; top: 50%; left:0; transform: translateY(-50%);">Ops! Tente novamente mais tarde<h1>'
        ) */
        .finally(function(){
            console.log('Olá')
        })
});