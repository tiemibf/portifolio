import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ titleHeader = '' }: { titleHeader?: string }) => {
    return (
        <header id='header'>
            <div>
                <ul>
                    <li>en |</li>
                    <li>pt</li>
                </ul>
            </div>
            {titleHeader && <p>{titleHeader}</p>}
            <div>
                <ul>
                    <li><Link to="/about">sobre |</Link></li>
                    <li><Link to="/curriculum">currículo |</Link></li>
                    <li><a href='#projects'>projetos |</a></li>
                    <li><a href='#contact-me'>contato</a></li>
                </ul>
            </div>
        </header>
    )
}