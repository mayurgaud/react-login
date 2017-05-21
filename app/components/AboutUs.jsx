import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

/**
 * About us component.
 */
class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.scrollToSection = this.scrollToSection.bind(this);
    }

    componentDidMount() {
        if (this.props.location.pathname !== "") {
            this.scrollToSection();
        }
    }

    componentDidUpdate() {
        if (this.props.location.pathname !== "") {
            this.scrollToSection();
        }
    }

    /**
     * Scroll to a given section on the page.
     *
     * @return undefined
     */
    scrollToSection() {
        let path = this.props.location.pathname;
        let lastElement = path.substring(path.lastIndexOf("/") + 1, path.length);

        if (lastElement) {
            document.getElementById(lastElement).scrollIntoView();
        }
    }

    render() {
        let dummyText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum`;
        return (
            <div id="aboutus">
                <section id="profile">
                    <Jumbotron>
                        <h1>Profile Section</h1>
                        <p>{dummyText}</p>
                        <p><Button bsStyle="primary">Learn more</Button></p>
                    </Jumbotron>
                </section>
                <section id="team">
                    <Jumbotron>
                        <h1>Team Section</h1>
                        <p>{dummyText}</p>
                        <p><Button bsStyle="primary">Learn more</Button></p>
                    </Jumbotron>
                </section>
                <section id="contact">
                    <Jumbotron>
                        <h1>Contact Section</h1>
                        <p>{dummyText}</p>
                        <p><Button bsStyle="primary">Learn more</Button></p>
                    </Jumbotron>
                </section>
            </div>
        );
    }
}

export default AboutUs;