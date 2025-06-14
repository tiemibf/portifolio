import React from 'react';
import githubIcon from '../../assets/images/github.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import linkedinIcon from '../../assets/images/linkedin.svg';
import { ContactContainer, Email, IconImg, IconLink, MainBody, Name, SocialIcons, Subtitle } from './styles';

export const ContactMe: React.FC = () => {
    return (
        <ContactContainer id="contact-me">
            <Subtitle>_contato</Subtitle>
            <MainBody>
                <Name>tiemi nagazawa</Name>
                <Email href="mailto:tiemibfn@gmail.com">tiemibfn@gmail.com</Email>
                <SocialIcons>
                    <IconLink href="https://www.linkedin.com/in/tiemibf/" target="_blank" rel="noopener noreferrer">
                        <IconImg src={linkedinIcon} alt="LinkedIn" />
                    </IconLink>
                    <IconLink href="https://www.instagram.com/tiemibf/" target="_blank" rel="noopener noreferrer">
                        <IconImg src={instagramIcon} alt="Instagram" />
                    </IconLink>
                    <IconLink href="https://github.com/tiemibf/" target="_blank" rel="noopener noreferrer">
                        <IconImg src={githubIcon} alt="GitHub" />
                    </IconLink>
                </SocialIcons>
            </MainBody>
        </ContactContainer>
    );
}; 