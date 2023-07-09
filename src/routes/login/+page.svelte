<script>
	import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
	import { goto } from '$app/navigation';

	const login = () => {
		email = document.getElementById('email').value;
		password = document.getElementById('password').value;
		console.log('email and pw:', email, password);
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log('Signed in as a user!', user);
				goto('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log('Error:', errorCode, errorMessage);
			});
	};
</script>

<h1>Log in Page!</h1>

<form>
	<label for="email">Email</label>
	<input type="email" id="email" name="email" />
	<label for="password">Password</label>
	<input type="password" id="password" name="password" />

	<button on:click={login}>Create Account</button>
</form>
