<script>
	import Header from './Header.svelte';
	import './styles.css';
	// import firebase from 'firebase/app';
	import { initializeApp } from 'firebase/app';
	import { getAnalytics } from 'firebase/analytics';
	// import 'firebase/auth';
	import { getAuth } from 'firebase/auth';

	import { onMount } from 'svelte';
	import authStore from '../stores/authStore';

	onMount(() => {
		console.log('page loaded');

		const firebaseConfig = {
			apiKey: 'AIzaSyD3zi0rb7IRS_Nnxh9DQSo7VnsnEXflL_w',
			authDomain: 'bus-club.firebaseapp.com',
			projectId: 'bus-club',
			storageBucket: 'bus-club.appspot.com',
			messagingSenderId: '820453723681',
			appId: '1:820453723681:web:c36d7e14527614acfd1d60',
			measurementId: 'G-2RX5BMLMZ5'
		};

		const app = initializeApp(firebaseConfig);
		const analytics = getAnalytics(app);

		const auth = getAuth(app);

		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log('user is logged in');
				authStore.set({ isLoggedIn: user !== null, user, firebaseControlled: true });
			} else {
				console.log('user is logged out');
				authStore.set({ isLoggedIn: user !== null, user, firebaseControlled: false });
			}
		});
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
