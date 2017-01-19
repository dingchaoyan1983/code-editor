import { connect } from 'react-redux';
import CodeEditor from '../mainbody/code-editor'; 
import { modifyContent, loadContent, loadHistory } from 'src/redux/reducers/file';

export default connect(null, {
    modifyContent,
    loadContent,
    loadHistory
})(CodeEditor);