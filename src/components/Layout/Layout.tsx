import React from 'react';
import { About } from '../../pages/About';
import { ContactMe } from '../../pages/ContactMe';
import { Curriculum } from '../../pages/Curriculum';
import { Home } from '../../pages/Home';
import { Projects } from '../../pages/Projects';
import { Header } from '../Header/Header';
import { LayoutContainer } from './styles';

export const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Header />
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="curriculum">
                <Curriculum />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <ContactMe />
            </section>
        </LayoutContainer>
    );
}; 