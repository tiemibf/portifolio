import { navigateToSection } from "@/utils/navigateToSection";
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import { HeaderContainer, LeftMenu, RightMenu, StyledAnchor } from "./styles";

export const Header = ({ titleHeader = '' }: { titleHeader?: string }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'home', href: 'home' },
        { label: 'sobre', href: 'about' },
        { label: 'currículo', href: 'curriculum' },
        { label: 'projetos', href: 'projects' },
        { label: 'contato', href: 'contact' }
    ]

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        navigateToSection(href);
    };

    return (
        <HeaderContainer $isScrolled={isScrolled}>
            <LeftMenu>
                {/* <LanguageMenu>
                    <LanguageButton>en</LanguageButton>
                    <span>|</span>
                    <LanguageButton>pt</LanguageButton>
                </LanguageMenu> */}
                <ThemeToggle />
            </LeftMenu>

            {titleHeader && <p>{titleHeader}</p>}

            <RightMenu>
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <StyledAnchor href={item.href} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, item.href)}>
                            {item.label}
                        </StyledAnchor>
                        {index < menuItems.length - 1 && <span>|</span>}
                    </React.Fragment>
                ))}
            </RightMenu>
        </HeaderContainer>
    )
}