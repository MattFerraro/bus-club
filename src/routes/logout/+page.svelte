<script>
	import { getAuth, signOut } from 'firebase/auth';
	import { goto } from '$app/navigation';

	const logout = () => {
		console.log('Okay, logging out!');
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log('sign out successful!');
				goto('/');
			})
			.catch((error) => {
				// An error happened.
				console.log('An error ocurred when signing out: ', error);
			});
	};
</script>

<h1>Really Log out?</h1>
<button on:click={logout}>Yes, Log out</button>
