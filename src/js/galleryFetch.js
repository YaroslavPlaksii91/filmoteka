import { API_service } from './apiSevice';
import renderFilmsMarkup from '../js/templates/renderFilmsMarkup';

const filmsApi = new API_service();

filmsApi.fetchTrending().then(renderFilmsMarkup).catch(console.log);
