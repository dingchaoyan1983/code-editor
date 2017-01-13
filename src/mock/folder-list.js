export default function() {
    this.get('/api/code_editor', function(req, res) {
        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: {}})
        ];
    });
}