import generator from './generator';
import {projectList} from './projects';

export default function() {
    this.get('/api/projects/:projectId/folders', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.projectId);
        const folders = generator.folderList();

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: folders})
        ];
    });

    this.get('/api/projects/:projectId/folders/:folderId', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.id);

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: project})
        ]
    })
}