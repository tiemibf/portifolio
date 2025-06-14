import React from 'react';
import {
    Column,
    Content,
    CurriculumContainer,
    Description,
    ExperienceList,
    GraduationInfo,
    ItemTitle,
    LanguageBar,
    LanguageBars,
    List,
    ListItem,
    SectionTitle,
    SkillsList,
    Subtitle,
    TwoColumn
} from './styles';

export const Curriculum: React.FC = () => {
    const skills = ['React', 'Typescript', 'HTML', 'CSS', 'Javascript', 'NodeJS', 'Jest', 'CI/CD Pipelines', 'NewRelic', 'Git', 'RESTful APIs', 'ArgoCD', 'Optimizely', 'React Testing Library']

    return (
        <div id='curriculum'>
            <CurriculumContainer>
                <Subtitle>_currículo</Subtitle>
                <TwoColumn>
                    <Column>
                        <div>
                            <SectionTitle>experiência profissional</SectionTitle>
                            <List>
                                <ListItem>
                                    <Content>
                                        <strong>Ab-Inbev - BEES Brasil</strong>
                                        <Description>
                                            A Ab-inbev é uma empresa multinacional, hoje considerada a maior cervejaria do mundo e conta com o Bees como um dos seus principais braços de tecnologia. O Bees é uma plataforma global B2B de comércio digital de mercadorias.
                                        </Description>
                                        <List>
                                            <ListItem>
                                                <ItemTitle>
                                                    <span>FrontEnd Software Engineer Pleno</span>
                                                    <span>set/2024 – Atual</span>
                                                </ItemTitle>
                                                <ExperienceList>
                                                    <li>Manutenção e desenvolvimento de uma das principais plataformas de backoffice da companhia, wrapper de aproximadamente 90 Micro-frontends, utilizando React, Single-spa e Typescript;</li>
                                                    <li>Suporte e manutenção de pipelines (CI/CD);</li>
                                                    <li>Desenvolvimento de biblioteca de componentes internos (Design System) com Storybook (desenvolvimento em React + Rollup);</li>
                                                    <li>Participação no desenvolvimento e manutenção de plataforma fintech e de gerenciamento de crédito da empresa;</li>
                                                    <li>Definição de interfaces funcionais em colaboração com equipes de Design e Produto</li>
                                                </ExperienceList>
                                            </ListItem>
                                            <ListItem>
                                                <ItemTitle>
                                                    <span>FrontEnd Software Engineer Júnior</span>
                                                    <span>mai/2023 – set/2024</span>
                                                </ItemTitle>
                                                <ExperienceList>
                                                    <li>Desenvolvimento e manutenção do front-end de aplicações em arquitetura de Micro-frontend, com uso de Single-SPA, React e Typescript;</li>
                                                    <li>Escrita de testes unitários em Jest + React Testing Library;</li>
                                                    <li>Desenvolvimento de BFFs em Node.JS com arquitetura hexagonal;</li>
                                                </ExperienceList>
                                            </ListItem>
                                            <ListItem>
                                                <ItemTitle>
                                                    <span>Associate FrontEnd Software Engineer</span>
                                                    <span>ago/2022 – mai/2023</span>
                                                </ItemTitle>
                                                <ExperienceList>
                                                    <li>Desenvolvimento do front end de uma aplicação para centralização dos dados e PowerBI dashboards, com React + arquitetura de Microfront-end (single-spa)</li>
                                                    <li>Escrita de testes unitários em Jest + React Testing Library;</li>
                                                </ExperienceList>
                                            </ListItem>
                                        </List>
                                    </Content>
                                </ListItem>
                            </List>
                        </div>
                    </Column>

                    <Column>
                        <div>
                            <SectionTitle>educação</SectionTitle>
                            <List>
                                <ListItem>
                                    <ItemTitle>
                                        <span> Tecnólogo em Análise e Desenvolvimento de Sistemas</span>
                                        <span>2023-2026</span>
                                    </ItemTitle>
                                    <GraduationInfo>
                                        <div>Universidade Estácio de Sá</div>
                                        <div>Conclusão: 2026</div>
                                    </GraduationInfo>
                                </ListItem>
                                <ListItem>
                                    <ItemTitle>
                                        <span>Graduação em Arquitetura e Urbanismo</span>
                                        <span>2015-2020</span>
                                    </ItemTitle>
                                    <GraduationInfo>
                                        <div>Universidade de Brasília</div>
                                        <div>Conclusão: 2/2020</div>
                                    </GraduationInfo>
                                </ListItem>
                            </List>
                        </div>
                        <div>
                            <SectionTitle>habilidades técnicas</SectionTitle>
                            <SkillsList as="ul">
                                {skills.map((skill, index) => (
                                    <li key={index}>_{skill}</li>
                                ))}
                            </SkillsList>
                        </div>
                        <div>
                            <SectionTitle>idiomas</SectionTitle>
                            <LanguageBars>
                                <LanguageBar>
                                    <div className="label">Inglês</div>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '90%', background: '#888' }} /></div>
                                </LanguageBar>
                                <LanguageBar>
                                    <div className="label">Francês</div>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '35%', background: '#bdbdbd' }} /></div>
                                </LanguageBar>
                                <LanguageBar>
                                    <div className="label">Espanhol</div>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '20%', background: '#d3d3d3' }} /></div>
                                </LanguageBar>
                                <LanguageBar>
                                    <div className="label">Italiano</div>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '20%', background: '#e0e0e0' }} /></div>
                                </LanguageBar>
                            </LanguageBars>
                        </div>
                    </Column>
                </TwoColumn>
            </CurriculumContainer>
        </div >
    );
}; 