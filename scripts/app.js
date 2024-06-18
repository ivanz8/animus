// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase Auth and Database references
const auth = firebase.auth();
const database = firebase.database();

// Example: Function to handle user authentication
function signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Handle successful sign-in
            const user = userCredential.user;
            console.log('Signed in as:', user.email);
        })
        .catch((error) => {
            // Handle sign-in errors
            console.error('Sign-in error:', error.message);
        });
}

// Example: Function to retrieve appointments from database
function getAppointments() {
    const appointmentsRef = database.ref('appointments');
    appointmentsRef.on('value', (snapshot) => {
        const appointments = snapshot.val();
        console.log('Appointments:', appointments);
        // Update UI with appointments data
    });
}

// Add more functions as needed to handle appointment logic, UI updates, etc.

// Example usage
signIn('ivan@aclcbukidnon.com', 'admin123');
getAppointments();
