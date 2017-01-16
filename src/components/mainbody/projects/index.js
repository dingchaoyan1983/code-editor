import React from 'react';
import Project from './project';

const { PureComponent } = React;

export default class Projects extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this.props.loadProjects();
    }

    render() {
        const { projects } = this.props;
        
        return <ul className="projects">
                    {
                        projects.map((project, index) => <Project {...project} key={index}/>)
                    }
              </ul>
    }
}
