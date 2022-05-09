import { GithubAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "firebase_app/client/init"

// Create and initialize firebase app instance,
// this means, the same instance is used through the project

export async function signUpWithGithub() {
  const githubProvider = new GithubAuthProvider()
  await signInWithPopup(auth, githubProvider)
}