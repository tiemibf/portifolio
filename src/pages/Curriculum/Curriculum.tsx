import React from 'react';
import {
    Column,
    Content,
    CurriculumContainer,
    Description,
    LanguageBar,
    LanguageBars,
    List,
    ListItem,
    SectionTitle,
    SkillsList,
    Subtitle,
    TwoColumn,
    Year
} from './styles';

export const Curriculum: React.FC = () => {
    const skills = [
        'HTML5',
        'CSS',
        'JavaScript',
        'Illustrator',
        'ReactJS',
        'Photoshop',
    ]

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
                                    <Year>2021</Year>
                                    <Content>
                                        Fernandes Arquitetura e Design
                                        <Description>
                                            Cargo: Arquiteta Jr.
                                            Período de 01/2021 - 08/2021
                                        </Description>
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
                                    <Year>2022</Year>
                                    <Content>
                                        Universidade Estácio de Sá
                                        <Description>
                                            Tecnólogo em Análise e Desenvolvimento de Sistemas
                                            Conclusão: 2/2024
                                        </Description>
                                    </Content>
                                </ListItem>
                                <ListItem>
                                    <Year>2015-2020</Year>
                                    <Content>
                                        Universidade de Brasília
                                        <Description>
                                            Graduação em Arquitetura e Urbanismo
                                            Conclusão: 2/2020
                                        </Description>
                                    </Content>
                                </ListItem>
                            </List>
                        </div>
                        <div>
                            <SectionTitle>experiência acadêmica</SectionTitle>
                            <List>
                                <ListItem>
                                    <Year>2016-2017</Year>
                                    <Content>
                                        Centro de Ação Social em Arquitetura Sustentável (CASAS)
                                        <Description>
                                            Escritório Modelo de Assistência Técnica em Arquitetura e Urbanismo
                                        </Description>
                                    </Content>
                                </ListItem>
                                <ListItem>
                                    <Year>2018</Year>
                                    <Content>
                                        Projeto de Assistência Técnica para Habitação de Origem Social
                                        <Description>
                                            Elaboração de projeto executivo de Melhoria Habitacional para uma família selecionada pela CODHAB.
                                        </Description>
                                    </Content>
                                </ListItem>
                            </List>
                        </div>
                        <div>
                            <SectionTitle>extracurriculares</SectionTitle>
                            <List>
                                <ListItem>
                                    <Year>2022</Year>
                                    <Content>
                                        Bootcamps
                                        <Description>
                                            | Hiring Coders - Gama Academy + VTEX
                                            | Bootcamp Digital Innovation One - Inter Front-end Developer
                                        </Description>
                                    </Content>
                                </ListItem>
                                <ListItem>
                                    <Year>2020-2022</Year>
                                    <Content>
                                        Cursos
                                        <Description>
                                            | Imersão Dev - Alura
                                            | Curso JavaScript e TypeScript - Udemy
                                            | Curso ReactJS + NextJS - Udemy
                                            | Imersão ReactJS - Alura
                                        </Description>
                                    </Content>
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
        </div>
    );
}; 