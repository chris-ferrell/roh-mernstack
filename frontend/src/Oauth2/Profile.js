import React from 'react'

function Profile() {

  
	window.onload = () => {
        var user = userTokenReturn();
        console.log(user)
        console.log(userTokenReturn);
	};
    const userTokenReturn = () => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
		const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

		if (!accessToken) {
			return (document.getElementById('login').style.display = 'block');
		}

		fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then(result => result.json())
			.then(response => {
				const { username, discriminator, id } = response;
				document.getElementById('info').innerText += ` ${username}#${discriminator} id: ${id}`;
				
			})
			.catch(console.error);
    }


  return (
    <div>
      <p id='info'> </p>
    </div>
  )
}

export default Profile