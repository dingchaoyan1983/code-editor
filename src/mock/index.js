import Pretender from 'pretender';
import folderListRoutes from './folder-list';

const server  = new Pretender();

server.map(folderListRoutes);

export default server;
