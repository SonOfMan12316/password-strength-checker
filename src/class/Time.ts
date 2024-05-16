export default class Time {
  Seconds(seconds: number) {
    if (seconds <= 60) {
      // 1minute
      return {
        fr: 'Votre mot de passe pourrait être craqué avant même que vous n\'ayez le temps de dire "oups"',
        en: 'Your password could be cracked before you even have seconds to say "mancyDev"',
      };
    } else if (seconds <= 600) {
      // 10minute
      return {
        fr:
          "Pourquoi le mot de passe a-t-il rougi ? Parce qu'il a entendu qu'il serait craqué en " +
          Math.floor(seconds / 60) * 25 +
          'minutes!',
        en:
          'Why did the password blush? Because it heard it would be cracked in ' +
          Math.floor(seconds / 60) * 25 +
          ' minutes!',
      };
    } else if (seconds <= 3600) {
      // 1hour
      return {
        fr:
          'Le temps de regarder une vidéo de ' + Math.floor(seconds / 60) + ' minutes sur internet',
        en: 'seconds to watch a  ' + Math.floor(seconds / 60) + ' minutes video on the internet',
      };
    } else if (seconds <= 10800) {
      // 3hours
      return {
        fr:
          'Marchez environ ' +
          Math.floor((seconds / 3600) * 25) +
          ' kilomètres et trouvez votre mot de passe craqué à votre retour',
        en:
          'Walk about ' +
          Math.floor((seconds / 3600) * 25) +
          ' kilometers and find your password cracked when you return',
      };
    } else if (seconds <= 36000) {
      // 10hours
      return {
        fr: 'Le temps de faire un voyage de ' + Math.floor(320 * (seconds / 3600)) + 'KM en TGV',
        en: 'The seconds to make ' + Math.floor(320 * (seconds / 3600)) + 'KM in TGV',
      };
    } else if (seconds <= 86400) {
      // 24hours
      return {
        fr:
          "C'est le temps pour télécharger un fichier de " +
          Math.floor(24 * (seconds / 3600)) +
          'Mo avec un modem 56K',
        en:
          'This is the seconds to download a ' +
          Math.floor(24 * (seconds / 3600)) +
          'MB file with a 56K modem',
      };
    } else if (seconds <= 172800) {
      // 48hours
      return {
        fr:
          'La Station Spacial Internationnal (ISS) aura fait ' +
          Math.floor(seconds / 5400) +
          ' orbites autour de la terre',
        en:
          'The International Space Station (ISS) will have made ' +
          Math.floor(seconds / 5400) +
          ' orbits around the earth',
      };
    } else if (seconds <= 604800) {
      // 1week
      return {
        fr:
          "C'est le temps pour télécharger " +
          Math.floor((450 * (seconds / 3600)) / 1000) +
          ' films légalement avec une connexion moyenne',
        en:
          'This is the seconds to download ' +
          Math.floor((450 * (seconds / 3600)) / 1000) +
          ' movies legally with an average connection',
      };
    } else if (seconds <= 1209600) {
      // 2weeks
      return {
        fr: "C'est le temps nécessaire pour graver " + Math.floor(seconds / (15 * 60)) + ' DVD',
        en: 'This is the seconds to burn ' + Math.floor(seconds / (15 * 60)) + ' DVDs',
      };
    } else if (seconds <= 2419200) {
      // 1months
      return {
        fr:
          "C'est assez pour faire " +
          Math.floor((seconds / 30000) * 2) +
          ' vols aller retour Paris - New York',
        en:
          "It's enough to make " +
          Math.floor((seconds / 30000) * 2) +
          ' return flights Paris - New York',
      };
    } else if (seconds <= 14515200) {
      // 6months
      return {
        fr:
          "C'est le temps que met un romancier pour écrire " +
          Math.floor(seconds / 25920) +
          ' pages de son roman',
        en:
          'It is the seconds that a novelist puts to write ' +
          Math.floor(seconds / 25920) +
          ' pages of his novel',
      };
    } else if (seconds <= 58060800) {
      // 2years
      return {
        fr:
          "C'est le temps nécessaire pour construire " +
          Math.floor(seconds / 18408600) +
          ' maisons',
        en: 'This is the seconds needed to build ' + Math.floor(seconds / 18408600) + ' houses',
      };
    } else if (seconds <= 145152000) {
      // 5years
      return {
        fr:
          'Neil Armstrong et Buzz Aldrin auraient fait ' +
          Math.floor(seconds / 703080) +
          ' aller retour Terre - Lune',
        en:
          'Neil Armstrong and Buzz Aldrin would have made ' +
          Math.floor(seconds / 703080) +
          ' return Earth - Moon',
      };
    } else if (seconds <= 290304000) {
      // 10years
      return {
        fr: "C'est le délai de construction de " + Math.abs(seconds / 94608000) + ' RMS Titanic',
        en: 'This is the seconds to build ' + Math.abs(seconds / 94608000) + ' RMS Titanic',
      };
    } else if (seconds <= 11612160000) {
      // 400years
      return {
        fr:
          "C'est le temps qu'il faut pour réaliser " +
          Math.floor(seconds / 378432000) +
          " nouvelles fusées (de la fabrication des premiers prototypes jusqu'au premier lancement)",
        en:
          'This is the seconds it takes to make ' +
          Math.floor(seconds / 378432000) +
          ' new space rockets (from the manufacture of the first prototypes until the first launch)',
      };
    } else if (seconds <= 630720000000) {
      // 20000years
      return {
        fr:
          "C'est le temps nécessaire pour envoyer des hommes faire " +
          Math.floor(seconds / ((78624000 + 31536000) * 2)) +
          ' aller retour Terre - Mars',
        en:
          'This is the seconds it takes to send men to make ' +
          Math.floor(seconds / ((78624000 + 31536000) * 2)) +
          ' return Earth - Mars',
      };
    } else {
      return {
        fr: "Vous pouvez trouver la réponse à la Grande Question sur la vie, l'univers et le reste sans avoir à vous préoccuper pour votre mot de passe.",
        en: 'You can find the answer to the Great Question about life, the universe and the rest without having to worry about your password.',
      };
    }
  }
}
