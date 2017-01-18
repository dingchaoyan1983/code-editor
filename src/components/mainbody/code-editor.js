import React from 'react';
import ReactCodemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/scroll/simplescrollbars.css';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import classname from 'classname';

const MODIFY= '修改';
const SAVE = '保存';
const { PureComponent } = React;

const options = {
    lineNumbers: true,
	mode: 'javascript',
    scrollbarStyle: 'simple'
}

export default class extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this.options = {
            lineNumbers: true,
            mode: 'javascript',
            scrollbarStyle: 'simple'
        };

        this.state = {
            readOnly: true
        }

        this.onClick = this.onClick.bind(this);
    }

    render() {
        const content = this.props.file.get('content');
        this.options.readOnly = this.state.readOnly;

        return <div>
                  <div className="clearfix editor-toolbar__wrapper">
                      <Col sm={3} smOffset={9} className="editor-toolbar">
                        <Button bsSize="xs" bsStyle="primary" onClick={this.onClick}>
                            <i className={classname('icon', this.state.readOnly ? 'icon-pencil' : 'icon-floppy-disk')}/>
                            { this.state.readOnly ? MODIFY : SAVE }
                        </Button>
                      </Col>
                  </div>
                  <ReactCodemirror value={content} options={this.options} className={classname(this.state.readOnly ? 'readonly' : '')}/>
               </div>
    }

    onClick() {
        let state = !this.state.readOnly;
        this.setState({
            readOnly: state
        });
    }
}

