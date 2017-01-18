import React from 'react';
import ReactCodemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/scroll/simplescrollbars.js';
import 'codemirror/addon/scroll/simplescrollbars.css';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import classname from 'classname';
import { MODIFY, SAVE } from 'src/constants';

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
            readOnly: true,
            code: props.file.get('content')
        }

        this.onClick = this.onClick.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }

    componentWillReceiveProps(props) {
        const code = props.file.get('content');

        if (code !== this.state.code) {
            this.setState({
                code
            });
        }
    }

    render() {
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
                  <ReactCodemirror onChange={this.updateCode} value={this.state.code} options={this.options} className={classname(this.state.readOnly ? 'readonly' : '')}/>
               </div>
    }

    onClick() {
        let state = !this.state.readOnly;
        this.setState({
            readOnly: state
        }, () => {
            if (this.state.readOnly) {
                this.props.modifyContent(this.props.file.get('extname'), this.state.code)
                .catch(() => {
                    this.props.loadContent(this.props.file.get('extname'));
                });
            }
        });
    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        })
    }
}

