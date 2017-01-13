import Pretender from 'pretender';
import folderListRoutes from './folder-list';

const server  = new pretender();

server.map(folderListRoutes);

export default server;
