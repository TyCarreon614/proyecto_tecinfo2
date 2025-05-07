body {
    font-family: Arial, sans-serif;
    background-color: #282c34;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.carousel-container {
    width: 80%;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.carousel {
    display: flex;
    width: 400%;
    animation: desplazamiento 8s infinite alternate ease-in-out;
}

.carousel img {
    width: 25%;
    transition: transform 0.5s ease;
}

@keyframes desplazamiento {
    0% { transform: translateX(0); }
    25% { transform: translateX(-25%); }
    50% { transform: translateX(-50%); }
    75% { transform: translateX(-75%); }
    100% { transform: translateX(0); 
