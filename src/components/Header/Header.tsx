import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderContainer, LanguageButton, LanguageMenu, LeftMenu, RightMenu } from "./styles";

export const Header = ({ titleHeader = '' }: { titleHeader?: string }) => {

    const menuItems = [
        { label: 'sobre', href: '/about' },
        { label: 'currículo', href: '/curriculum' },
        { label: 'projetos', href: '/projects' },
        { label: 'contato', href: '/contact' }
    ]

    return (
        <HeaderContainer>
            <LeftMenu>
                <LanguageMenu>
                    <LanguageButton>en</LanguageButton>
                    <span>|</span>
                    <LanguageButton>pt</LanguageButton>
                </LanguageMenu>
                <ThemeToggle />
            </LeftMenu>

            {titleHeader && <p>{titleHeader}</p>}

            <RightMenu>
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <Link to={item.href}>{item.label}</Link>
                        {index < menuItems.length - 1 && <span>|</span>}
                    </React.Fragment>
                ))}
            </RightMenu>
        </HeaderContainer>
    )
}