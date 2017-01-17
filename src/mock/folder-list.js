import generator from './generator';
import {projectList} from './projects';
import { DELAY } from 'src/constants';

export default function() {
    this.get('/api/projects/:projectId/folders', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.projectId);
        const folders = generator.folderList();

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: folders})
        ];
    }, DELAY);

    this.get('/api/projects/:projectId/folders/:folderId', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.id);
        const folders = generator.folderList();

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: folders})
        ];
    }, DELAY);

    this.get('/api/projects/:projectId/folders/:folderId/files/:fileId', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.id);
        const content = generator.fileContent('.js');

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: content})
        ];
    }, DELAY)
}
