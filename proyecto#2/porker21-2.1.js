const readline = require('readline-sync');

console.log("🃏 Bienvenido a Poker 21 🃏");

// Función para obtener una carta aleatoria entre 1 y 11
function obtenerCarta() {
  return Math.floor(Math.random() * 11) + 1;
}

// Función principal del juego
function jugarPoker21() {
  let total = 0;
  let continuar = true;

  // Primera carta (no se muestra)
  total += obtenerCarta();

  console.log("\n🔢 Tu total actual es: ? (oculto hasta que decidas detenerte)");

  do {
    console.log("\n📋 OPCIONES:");
    console.log("1️⃣ Pedir otra carta");
    console.log("2️⃣ Plantarse");
    console.log("3️⃣ Reiniciar juego");

    let opcion = readline.question("Elige una opción (1/2/3): ");

    switch (opcion) {
      case "1": // Pedir carta
        total += obtenerCarta();
        console.log("✅ Carta añadida. Tu total sigue oculto.");
        
        if (total > 21) {
          console.log("\n💀 ¡Has perdido! 💀 Tu total era: " + total);
          continuar = false;
        }
        break;

      case "2": // Plantarse
        console.log(`\n🏁 Te plantaste. Tu total final es: ${total}`);
        if (total === 21) {
          console.log("🎉 ¡BLACKJACK! ¡Has ganado! 🎉");
        } else if (total < 21) {
          console.log("🏆 ¡Has ganado! 🏆");
        }
        continuar = false;
        break;

      case "3": // Reiniciar juego
        console.log("\n🔄 Reiniciando el juego...");
        jugarPoker21();
        return;

      default:
        console.log("⚠️ Opción no válida, intenta de nuevo.");
    }
  } while (continuar);

  // Preguntar si desea volver a jugar
  let respuesta = readline.question("\n¿Quieres jugar otra vez? (s/n): ");
  if (respuesta.toLowerCase() === "s") {
    jugarPoker21();
  } else {
    console.log("👋 ¡Gracias por jugar! Hasta la próxima.");
  }
}

// Iniciar el juego
jugarPoker21();