// imports
import darkMovie from '../assets/The dark movie.webp';
import inception from '../assets/inception.webp';
import redemption from '../assets/redemption.webp';
import pulpFiction from '../assets/pulp fiction.webp';
import forrestGump from '../assets/forrest gump.webp';
import matrix from '../assets/matrix.webp';
import interstellar from '../assets/interstellar.webp';
import goodfellas from '../assets/Goodfellas.webp';
import godfather from '../assets/godfather.webp';
import schindler from '../assets/schindler.webp';
import fightClub from '../assets/fight club.webp';
import lordOfTheRings from '../assets/the lord.webp';
import starWars from '../assets/Star wars.webp';
import silenceLambs from '../assets/the silence.webp';
import savingPrivateRyan from '../assets/saving.webp';
import gladiator from '../assets/Gladiator.webp';
import titanic from '../assets/titanic.webp';
import avatar from '../assets/Avatar.webp';
import departed from '../assets/the departed.webp';
import jurassicPark from '../assets/jurassic.webp';
import avengers from '../assets/avengers.webp';
import ironMan from '../assets/iron man.webp';
import blackPanther from '../assets/black.webp';
import doctorStrange from '../assets/dr.webp';
import guardians from '../assets/guardian.webp';
import deadpool from '../assets/deadpool.webp';
import wonderWoman from '../assets/wonder woman.webp';
import aquaman from '../assets/aqua.webp';
import thor from '../assets/thor.webp';
import spiderMan from '../assets/spider.webp';

// moviesData
export const moviesData = [
  { id: 1, title: 'The Dark Knight', category: 'Action', year: 2008, rating: 9.0, duration: '152 min', description: 'Batman faces the chaos unleashed by the Joker in Gotham City.', image: darkMovie },
  { id: 2, title: 'Inception', category: 'Sci-Fi', year: 2010, rating: 8.8, duration: '148 min', description: 'A thief is tasked with planting an idea inside someone\'s mind.', image: inception },
  { id: 3, title: 'The Shawshank Redemption', category: 'Drama', year: 1994, rating: 9.3, duration: '142 min', description: 'Two men bond in prison over years and find redemption.', image: redemption },
  { id: 4, title: 'Pulp Fiction', category: 'Crime', year: 1994, rating: 8.9, duration: '154 min', description: 'Lives of mobsters and others intertwine in violent tales.', image: pulpFiction },
  { id: 5, title: 'Forrest Gump', category: 'Drama', year: 1994, rating: 8.8, duration: '142 min', description: 'Life story of a man with a kind heart through history.', image: forrestGump },
  { id: 6, title: 'The Matrix', category: 'Sci-Fi', year: 1999, rating: 8.7, duration: '136 min', description: 'A hacker discovers the real world is a simulation.', image: matrix },
  { id: 7, title: 'Interstellar', category: 'Sci-Fi', year: 2014, rating: 8.6, duration: '169 min', description: 'Explorers travel through a wormhole to save humanity.', image: interstellar },
  { id: 8, title: 'Goodfellas', category: 'Crime', year: 1990, rating: 8.7, duration: '146 min', description: 'The story of Henry Hill and his life in the mob.', image: goodfellas },
  { id: 9, title: 'The Godfather', category: 'Crime', year: 1972, rating: 9.2, duration: '175 min', description: 'A mafia patriarch passes control of his empire to his son.', image: godfather },
  { id: 10, title: 'Schindler\'s List', category: 'Drama', year: 1993, rating: 9.0, duration: '195 min', description: 'Oskar Schindler saves Jewish workers during WWII.', image: schindler },
  { id: 11, title: 'Fight Club', category: 'Drama', year: 1999, rating: 8.8, duration: '139 min', description: 'An underground fight club forms with shocking results.', image: fightClub },
  { id: 12, title: 'The Lord of the Rings', category: 'Fantasy', year: 2001, rating: 8.8, duration: '178 min', description: 'A Hobbit embarks on a journey to destroy the One Ring.', image: lordOfTheRings },
  { id: 13, title: 'Star Wars: A New Hope', category: 'Sci-Fi', year: 1977, rating: 8.6, duration: '121 min', description: 'A young hero joins forces to save the galaxy.', image: starWars },
  { id: 14, title: 'The Silence of the Lambs', category: 'Thriller', year: 1991, rating: 8.6, duration: '118 min', description: 'An FBI cadet seeks help from a cannibal killer.', image: silenceLambs },
  { id: 15, title: 'Saving Private Ryan', category: 'War', year: 1998, rating: 8.6, duration: '169 min', description: 'Soldiers go behind enemy lines to save a paratrooper.', image: savingPrivateRyan },
  { id: 16, title: 'Gladiator', category: 'Action', year: 2000, rating: 8.5, duration: '155 min', description: 'A Roman general seeks vengeance against a corrupt emperor.', image: gladiator },
  { id: 17, title: 'Titanic', category: 'Romance', year: 1997, rating: 7.9, duration: '194 min', description: 'A young aristocrat falls in love on the ill-fated Titanic.', image: titanic },
  { id: 18, title: 'Avatar', category: 'Sci-Fi', year: 2009, rating: 7.8, duration: '162 min', description: 'A Marine on Pandora struggles between orders and morality.', image: avatar },
  { id: 19, title: 'The Departed', category: 'Crime', year: 2006, rating: 8.5, duration: '151 min', description: 'An undercover cop and a mole try to find each other.', image: departed },
  { id: 20, title: 'Jurassic Park', category: 'Adventure', year: 1993, rating: 8.2, duration: '127 min', description: 'Paleontologists try to protect dinosaurs in a theme park.', image: jurassicPark },
  { id: 21, title: 'The Avengers', category: 'Action', year: 2012, rating: 8.0, duration: '143 min', description: 'Earth\'s mightiest heroes must stop Loki from destroying the world.', image: avengers },
  { id: 22, title: 'Iron Man', category: 'Action', year: 2008, rating: 7.9, duration: '126 min', description: 'A billionaire builds an armored suit to fight evil.', image: ironMan },
  { id: 23, title: 'Black Panther', category: 'Action', year: 2018, rating: 7.3, duration: '134 min', description: 'T\'Challa returns home as king of Wakanda but faces a challenger.', image: blackPanther },
  { id: 24, title: 'Doctor Strange', category: 'Action', year: 2016, rating: 7.5, duration: '115 min', description: 'A surgeon becomes a Master of the Mystic Arts.', image: doctorStrange },
  { id: 25, title: 'Guardians of the Galaxy', category: 'Action', year: 2014, rating: 8.0, duration: '121 min', description: 'A group of intergalactic criminals must save the universe.', image: guardians },
  { id: 26, title: 'Deadpool', category: 'Action', year: 2016, rating: 8.0, duration: '108 min', description: 'A mercenary with accelerated healing seeks revenge.', image: deadpool },
  { id: 27, title: 'Wonder Woman', category: 'Action', year: 2017, rating: 7.4, duration: '141 min', description: 'An Amazonian princess becomes a hero in the world of men.', image: wonderWoman },
  { id: 28, title: 'Aquaman', category: 'Action', year: 2018, rating: 6.9, duration: '143 min', description: 'Arthur Curry discovers he is heir to the underwater kingdom.', image: aquaman },
  { id: 29, title: 'Thor: Ragnarok', category: 'Action', year: 2017, rating: 7.9, duration: '130 min', description: 'Thor must escape and save Asgard from Hela.', image: thor },
  { id: 30, title: 'Spider-Man: Homecoming', category: 'Action', year: 2017, rating: 7.4, duration: '133 min', description: 'Peter Parker balances high school life with being Spider-Man.', image: spiderMan },
];
