import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter({ }) {
    const user = null;
    const username = null;

    return (
        <main>
            {user ?
                !userName ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }
        </main>
    );
}

function SignInButton() {
    const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
    };

    return (
        <button className='btn-google' onClick={signInWithGoogle}>
        <img src={'/google.png'} />
        </button>
);
}

function SignOutButton() {
return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm() {


}