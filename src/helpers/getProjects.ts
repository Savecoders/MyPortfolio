
import CryptoApp from '../../public/img/projects/cryptoApp.png'
import GifApp from '../../public/img/projects/gifApp.jpg'
import WeatherApp from '../../public/img/projects/weatherApp.jpg'
import TodoApp from '../../public/img/projects/todoApp.png'
import Tictactoe from '../../public/img/projects/tictactoe.png'
import Masterace from '../../public/img/projects/masterace.jpg'

const getProyects = () => [
  {
    id: 1,
    name: 'CryptoApp',
    description: 'App to manage your crypto list',
    image: CryptoApp,
    url: 'https://savecoders.github.io/CryptoApp/',
    date: '2022-02-21',
  },
  {
    id: 2,
    name: 'GifApp',
    description: 'App to search gifs',
    image: GifApp,
    url: 'https://savecoders.github.io/GifExpertApp/',
    date: '2021-10-19',
  },
  {
    id: 3,
    name: 'WeatherApp',
    description: 'App to search weather in your city',
    image: WeatherApp,
    url: 'https://savecoders.github.io/WeatherApp/',
    date: '2021-11-09',
  },
  {
    id: 4,
    name: 'TodoApp',
    description: 'App create your todo list',
    image: TodoApp,
    url: 'https://savecoders.github.io/TodoApp/',
    date: '2022-06-23',
  },
  {
    id: 5,
    name: 'Tictactoe',
    description: 'App game tictactoe',
    image: Tictactoe,
    url: 'https://codepen.io/savecoders/full/YzVxKqL',
    date: '2021-05-01',
  },
  {
    id: 6,
    name: 'Single Page Masterace',
    description: 'is the first project of the web development course',
    image: Masterace,
    url: 'https://savecoders.github.io/PCMasterRice-Proyect/',
    date: '2021-02-07',
  },
]



export default getProyects