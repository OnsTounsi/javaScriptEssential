let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);


// Attribution des services selon le rôle
if (userRole === "employe") {
    serviceMessage = "Accès aux Services diététiques.";
} else if (userRole === "membre_inscrit") {
    serviceMessage = "Accès aux Services diététiques + interaction individuelle avec un diététicien.";
} else if (userRole === "abonne") {
    serviceMessage = "Accès partiel aux Services diététiques.";
} else if (userRole === "non_abonne") {
    serviceMessage = "Veuillez vous inscrire ou vous abonner pour accéder aux Services diététiques.";
} else {
    serviceMessage = "Rôle inconnu. Aucun service disponible.";
}
console.log("Message pour l'utilisateur :", serviceMessage);