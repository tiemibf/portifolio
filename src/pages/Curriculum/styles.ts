import styled from 'styled-components';

export const CurriculumContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 4rem 2rem;
    margin-top: 4rem;
`;

export const Subtitle = styled.h2`
    margin-bottom: 3.75rem;
`;

export const TwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    position: relative;
    
    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr;
        
        &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 1px;
            background: #e0e0e0;
            transform: translateX(-50%);
        }
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 1.25rem;
`;

export const SectionTitle = styled.h3`
    text-transform: lowercase;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    gap: 20px;

    &:after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: #e0e0e0;
    }
`;

export const ItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-top: 1rem;
`;

export const ExperienceList = styled.ul`
    font-size: 15px;
    line-height:1.5rem;
    padding-left: 1.5rem;
    margin: 0.75rem 0;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    padding-left: 1rem;
`;

export const ListItem = styled.li`
    font-size: 1rem;
    line-height: 1.5;
    span {
        font-size: 0.95rem;
    }
`;

export const GraduationInfo = styled.div`
    font-size: 15px;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
`;

export const Year = styled.span`
    font-weight: bold;
    margin-right: 0.5rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Description = styled.span`
    font-size: 15px;
`;

export const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem 1.5rem;
    list-style: none;
    padding-left: 1rem;
    margin: 0;
    font-size: 0.98rem;
`;

export const LanguageBars = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;
    max-width: 350px;
    padding-left: 1rem;
`;

export const LanguageBar = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    .label {
        min-width: 70px;
        font-size: 0.98rem;
    }
    .bar-bg {
        flex: 1;
        height: 8px;
        background: #ececec;
        border-radius: 4px;
        overflow: hidden;
    }
    .bar-fill {
        height: 100%;
        border-radius: 4px;
        background: #bdbdbd;
    }
`; 