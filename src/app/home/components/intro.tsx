// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHMwJYJoywmloBDp6NHi9Bhu47UaS9GCg",
  authDomain: "track-app-de594.firebaseapp.com",
  projectId: "track-app-de594",
  storageBucket: "track-app-de594.appspot.com",
  messagingSenderId: "40767975210",
  appId: "1:40767975210:web:2e9ffdb8604e3ddb2ff853",
  measurementId: "G-ZPCPXT8MRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Intro = () => {
    return (
        <div>
            <div className="flex flex-col mt-64 mb-8">
                <h1 className="flex justify-center m-0 font-extrabold pb-3 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                    A new way to
                </h1>
                <h1 className="flex justify-center m-0 font-extrabold pb-3 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600">
                    get your dream job.
                </h1>
            </div>
            <div className="flex justify-center mb-64">
                <p className="text-3xl text-gray-600 w-8/12 text-center">
                    Your Ultimate Job Application Management Solution
                </p>
            </div>
        </div>
    )
}

export default Intro;